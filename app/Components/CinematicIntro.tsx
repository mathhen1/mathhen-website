"use client";

import { useEffect, useRef, useState } from "react";

const SESSION_KEY = "mathen-cinematic-intro";
const INITIALIZATION_TIMEOUT_MS = 7_000;

type ParticleCapabilities = Navigator & { deviceMemory?: number };

function getParticleCount(width: number, height: number, isMobile: boolean) {
  const capabilities = navigator as ParticleCapabilities;
  const hasLimitedResources = (capabilities.deviceMemory ?? 8) <= 4
    || (navigator.hardwareConcurrency || 8) <= 4;
  const minimum = isMobile ? 4_500 : 10_000;
  const maximum = hasLimitedResources
    ? (isMobile ? 7_000 : 15_000)
    : (isMobile ? 12_000 : 28_000);

  return Math.min(maximum, Math.max(minimum, Math.round((width * height) / 55)));
}

function getCameraDistance(aspectRatio: number, fieldOfView: number) {
  const outerRadius = 5.2;
  const halfFieldOfView = (fieldOfView * Math.PI) / 360;
  const narrowDimension = Math.min(1, aspectRatio);

  return Math.max(14, (outerRadius * 1.28) / (Math.tan(halfFieldOfView) * narrowDimension));
}

export default function CinematicIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);
  const cleanupFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (cleanupFrameRef.current !== null) cancelAnimationFrame(cleanupFrameRef.current);
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      root.classList.remove("cinematic-intro-pending");
      root.classList.add("cinematic-intro-skip-cover");
      return;
    }
    if (!root.classList.contains("cinematic-intro-pending")) {
      root.classList.add("cinematic-intro-skip-cover");
      return;
    }

    try {
      if (window.sessionStorage.getItem(SESSION_KEY)) {
        root.classList.remove("cinematic-intro-pending");
        root.classList.add("cinematic-intro-skip-cover");
        return;
      }
    } catch {
      // Continue with the intro when session storage is unavailable.
    }

    let cancelled = false;
    let hasFinished = false;
    let timeline: ReturnType<(typeof import("gsap"))["gsap"]["timeline"]> | undefined;
    let renderer: import("three").WebGLRenderer | undefined;
    let geometry: import("three").BufferGeometry | undefined;
    let trailGeometry: import("three").BufferGeometry | undefined;
    let material: import("three").ShaderMaterial | undefined;
    let trailMaterial: import("three").ShaderMaterial | undefined;
    let frameId = 0;
    let initializationTimer = 0;
    let removeResizeListener = () => {};
    let removeContextLossListener = () => {};
    let removeMotionPreferenceListener = () => {};
    let resetPresentationStyles = () => {};

    const finish = () => {
      if (cancelled || hasFinished) return;
      hasFinished = true;
      window.clearTimeout(initializationTimer);
      timeline?.kill();
      cancelAnimationFrame(frameId);
      removeResizeListener();
      removeContextLossListener();
      removeMotionPreferenceListener();
      resetPresentationStyles();
      if (hostRef.current) hostRef.current.dataset.active = "false";

      geometry?.dispose();
      trailGeometry?.dispose();
      material?.dispose();
      trailMaterial?.dispose();
      renderer?.dispose();
      renderer?.domElement.remove();
      renderer = undefined;

      try {
        window.sessionStorage.setItem(SESSION_KEY, "seen");
      } catch {
        // The page remains usable when session storage is unavailable.
      }

      root.classList.remove("cinematic-intro-pending");
      root.classList.add("cinematic-intro-skip-cover");
      setIsVisible(false);
    };

    const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
      if (event.matches) finish();
    };
    reducedMotion.addEventListener("change", handleMotionPreferenceChange);
    removeMotionPreferenceListener = () => reducedMotion.removeEventListener("change", handleMotionPreferenceChange);

    initializationTimer = window.setTimeout(finish, INITIALIZATION_TIMEOUT_MS);

    const initializeScene = async () => {
      try {
        const [THREE, { gsap }] = await Promise.all([
          import("three"),
          import("gsap"),
        ]);
        if (cancelled || hasFinished || !hostRef.current) return;

        const width = window.innerWidth;
        const height = window.innerHeight;
        const isMobile = width < 768;
        const fieldOfView = 42;
        const aspectRatio = width / height;
        const cameraDistance = getCameraDistance(aspectRatio, fieldOfView);
        const visibleHeight = 2 * Math.tan((fieldOfView * Math.PI) / 360) * cameraDistance;
        const visibleWidth = visibleHeight * aspectRatio;
        const particleCount = getParticleCount(width, height, isMobile);
        const trailCount = Math.floor(particleCount * (isMobile ? 0.2 : 0.28));
        const startPositions = new Float32Array(particleCount * 3);
        const radii = new Float32Array(particleCount);
        const angles = new Float32Array(particleCount);
        const heights = new Float32Array(particleCount);
        const speeds = new Float32Array(particleCount);
        const phases = new Float32Array(particleCount);
        const sizes = new Float32Array(particleCount);
        const colors = new Float32Array(particleCount * 3);

        const emerald = new THREE.Color("#10b981");
        const mint = new THREE.Color("#d1fae5");
        const particleColor = new THREE.Color();
        const armCount = 6;
        const innerRadius = 1.55;
        const outerRadius = 5.05;
        const spiralTightness = 0.43;
        const fullTurn = Math.PI * 2;

        for (let index = 0; index < particleCount; index += 1) {
          const offset = index * 3;
          const phase = Math.random() * fullTurn;
          const arm = Math.floor(Math.random() * armCount);
          const radiusProgress = Math.pow(Math.random(), 0.78);
          const radius = innerRadius + radiusProgress * (outerRadius - innerRadius);
          const armSpread = (0.055 + radiusProgress * 0.12) * (Math.random() - 0.5);
          const interArmStream = Math.random() > 0.92 ? (Math.random() - 0.5) * 0.72 : 0;

          // Logarithmic winding creates narrow streams while leaving a clear central void.
          angles[index] = arm * (fullTurn / armCount)
            + Math.log(radius / innerRadius) / spiralTightness
            + armSpread
            + interArmStream;
          radii[index] = radius + Math.sin(phase * 2.1) * 0.08;
          heights[index] = (Math.random() - 0.5) * (0.16 + radiusProgress * 0.48);
          speeds[index] = (0.075 + 0.29 / Math.pow(radius, 0.66)) * (0.9 + Math.random() * 0.2);
          phases[index] = phase;
          sizes[index] = 0.65 + Math.random() * (isMobile ? 0.7 : 0.95);

          const occasionalHighlight = Math.random() > 0.993;
          particleColor.lerpColors(emerald, mint, occasionalHighlight ? 0.88 : Math.random() * 0.3);
          const colorVariation = 0.42 + Math.random() * 0.68;
          colors[offset] = particleColor.r * colorVariation;
          colors[offset + 1] = particleColor.g * colorVariation;
          colors[offset + 2] = particleColor.b * colorVariation;

          startPositions[offset] = (Math.random() - 0.5) * visibleWidth * 1.12;
          startPositions[offset + 1] = (Math.random() - 0.5) * visibleHeight * 1.12;
          startPositions[offset + 2] = (Math.random() - 0.5) * 8;
        }

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, 0.1, 160);
        camera.position.set(0, 1.1, cameraDistance);
        camera.lookAt(0, 0, 0);

        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: !isMobile,
          powerPreference: "low-power",
        });
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.15 : 1.45));
        renderer.setSize(width, height);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.domElement.className = "cinematic-intro__canvas";
        renderer.domElement.setAttribute("aria-hidden", "true");

        const handleContextLost = (event: Event) => {
          event.preventDefault();
          finish();
        };
        renderer.domElement.addEventListener("webglcontextlost", handleContextLost);
        removeContextLossListener = () => renderer?.domElement.removeEventListener("webglcontextlost", handleContextLost);
        hostRef.current.appendChild(renderer.domElement);

        geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(startPositions, 3));
        geometry.setAttribute("aRadius", new THREE.BufferAttribute(radii, 1));
        geometry.setAttribute("aAngle", new THREE.BufferAttribute(angles, 1));
        geometry.setAttribute("aHeight", new THREE.BufferAttribute(heights, 1));
        geometry.setAttribute("aSpeed", new THREE.BufferAttribute(speeds, 1));
        geometry.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
        geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
        geometry.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));

        const vertexShader = `
          attribute float aRadius;
          attribute float aAngle;
          attribute float aHeight;
          attribute float aSpeed;
          attribute float aPhase;
          attribute float aSize;
          attribute vec3 aColor;
          uniform float uTime;
          uniform float uBirth;
          uniform float uAssemble;
          uniform float uDisperse;
          uniform float uPixelRatio;
          uniform float uTrail;
          uniform float uOpacity;
          varying vec3 vColor;
          varying float vAlpha;

          void main() {
            float orbitalAngle = aAngle + uTime * aSpeed - uTrail * aSpeed * 0.42;
            float radiusWave = sin(orbitalAngle * 2.2 + aPhase + uTime * 0.22) * 0.035;
            float radius = aRadius + radiusWave;
            vec3 orbitPosition = vec3(
              cos(orbitalAngle) * radius,
              sin(orbitalAngle) * radius,
              aHeight + sin(orbitalAngle * 1.7 + aPhase) * 0.12
                + sin(uTime * 0.38 + aPhase) * 0.07
            );

            float tilt = 0.48;
            orbitPosition.yz = mat2(cos(tilt), -sin(tilt), sin(tilt), cos(tilt)) * orbitPosition.yz;
            vec3 point = mix(position, orbitPosition, smoothstep(0.0, 1.0, uAssemble));
            point += vec3(
              sin(uTime * 0.31 + aPhase) * 0.13,
              cos(uTime * 0.27 + aPhase * 1.3) * 0.11,
              sin(uTime * 0.24 + aPhase * 0.8) * 0.17
            ) * (1.0 - uAssemble * 0.78);

            vec3 tangent = normalize(vec3(-sin(orbitalAngle), cos(orbitalAngle), 0.28 * sin(aPhase)));
            vec3 escapeDirection = normalize(orbitPosition + tangent * 0.72 + vec3(0.0, 0.0, (aPhase / 6.28318 - 0.5) * 1.8));
            float escapeDistance = pow(uDisperse, 1.12) * (12.0 + 15.0 * fract(aPhase * 0.15915));
            point += escapeDirection * escapeDistance;
            point += tangent * uDisperse * sin(aPhase * 2.4 + uTime * 1.1) * 1.1;

            vec4 viewPosition = modelViewMatrix * vec4(point, 1.0);
            gl_Position = projectionMatrix * viewPosition;
            gl_PointSize = clamp(aSize * uPixelRatio * (35.0 / -viewPosition.z) * (1.0 - uTrail * 0.2), 1.0, 3.7);

            float birthAlpha = smoothstep(0.0, 0.88, uBirth);
            float dispersalAlpha = 1.0 - smoothstep(0.72, 1.0, uDisperse);
            float shimmer = 0.76 + 0.24 * sin(aPhase * 2.1 + uTime * 1.35);
            vColor = aColor * shimmer;
            vAlpha = birthAlpha * dispersalAlpha * uOpacity * (uTrail > 0.5 ? 0.22 : 0.86) * shimmer;
          }
        `;
        const fragmentShader = `
          varying vec3 vColor;
          varying float vAlpha;
          void main() {
            float distanceFromCenter = length(gl_PointCoord - vec2(0.5));
            float core = 1.0 - smoothstep(0.12, 0.5, distanceFromCenter);
            float softEdge = 1.0 - smoothstep(0.28, 0.5, distanceFromCenter);
            float glow = exp(-distanceFromCenter * 9.0) * 0.1;
            gl_FragColor = vec4(vColor * (0.94 + glow), (core * 0.9 + softEdge * 0.1) * vAlpha);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }
        `;

        const uniforms = {
          uTime: { value: 0 },
          uBirth: { value: 0 },
          uAssemble: { value: 0 },
          uDisperse: { value: 0 },
          uPixelRatio: { value: renderer.getPixelRatio() },
          uTrail: { value: 0 },
          uOpacity: { value: 1 },
        };
        material = new THREE.ShaderMaterial({
          transparent: true,
          depthWrite: false,
          uniforms,
          vertexShader,
          fragmentShader,
        });
        scene.add(new THREE.Points(geometry, material));

        trailGeometry = new THREE.BufferGeometry();
        const trailAttributes = [
          ["position", startPositions, 3],
          ["aRadius", radii, 1],
          ["aAngle", angles, 1],
          ["aHeight", heights, 1],
          ["aSpeed", speeds, 1],
          ["aPhase", phases, 1],
          ["aSize", sizes, 1],
          ["aColor", colors, 3],
        ] as const;
        trailAttributes.forEach(([name, values, itemSize]) => {
          trailGeometry?.setAttribute(name, new THREE.BufferAttribute(values.subarray(0, trailCount * itemSize), itemSize));
        });
        trailMaterial = new THREE.ShaderMaterial({
          transparent: true,
          depthWrite: false,
          uniforms: {
            ...uniforms,
            uTrail: { value: 1 },
            uOpacity: { value: 1 },
          },
          vertexShader,
          fragmentShader,
        });
        scene.add(new THREE.Points(trailGeometry, trailMaterial));

        const homeContent = document.querySelector<HTMLElement>("[data-home-intro-content]");
        const revealHeroContent = () => {
          homeContent?.querySelectorAll<HTMLElement>(".opacity-0").forEach((element) => {
            element.classList.remove("opacity-0");
          });
        };
        resetPresentationStyles = () => {
          gsap.set(hostRef.current, { clearProps: "opacity" });
          if (homeContent) gsap.set(homeContent, { clearProps: "transform,opacity" });
        };
        if (homeContent) gsap.set(homeContent, { y: Math.min(window.innerHeight * 0.16, 140) });

        const startedAt = performance.now();
        const drawFrame = (now: number) => {
          if (cancelled || !renderer) return;
          uniforms.uTime.value = (now - startedAt) / 1000;
          try {
            renderer.render(scene, camera);
          } catch {
            finish();
            return;
          }
          frameId = requestAnimationFrame(drawFrame);
        };
        frameId = requestAnimationFrame(drawFrame);

        timeline = gsap.timeline({ onComplete: finish });
        timeline.to(uniforms.uBirth, { value: 1, duration: 1.6, ease: "power2.out" }, 0);
        timeline.to(uniforms.uAssemble, { value: 1, duration: 2, ease: "power3.inOut" }, 1.5);
        timeline.to(camera.position, { x: 0.38, y: 1.38, duration: 1.9, ease: "sine.inOut" }, 3.5);
        timeline.to(camera.position, { x: 0, y: 1.1, duration: 1.7, ease: "sine.inOut" }, 5.2);
        timeline.to(uniforms.uDisperse, { value: 1, duration: 1.5, ease: "power3.in" }, 5.5);
        if (homeContent) {
          timeline.call(revealHeroContent, [], 6.1);
          timeline.to(homeContent, { y: 0, duration: 1.9, ease: "power4.out" }, 6.1);
        }
        timeline.to(hostRef.current, { opacity: 0, duration: 2, ease: "power3.inOut" }, 6);

        const handleResize = () => {
          if (!renderer) return;
          const nextWidth = window.innerWidth;
          const nextHeight = window.innerHeight;
          const nextIsMobile = nextWidth < 768;
          camera.aspect = nextWidth / nextHeight;
          camera.position.z = getCameraDistance(camera.aspect, fieldOfView);
          camera.updateProjectionMatrix();
          renderer.setSize(nextWidth, nextHeight);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, nextIsMobile ? 1.15 : 1.45));
          uniforms.uPixelRatio.value = renderer.getPixelRatio();
        };
        window.addEventListener("resize", handleResize, { passive: true });
        removeResizeListener = () => window.removeEventListener("resize", handleResize);

        hostRef.current.dataset.active = "true";
        setIsVisible(true);
        root.classList.remove("cinematic-intro-pending");
        root.classList.add("cinematic-intro-skip-cover");
        window.clearTimeout(initializationTimer);
        try {
          window.sessionStorage.setItem(SESSION_KEY, "seen");
        } catch {
          // The current intro can run without session persistence.
        }
      } catch {
        if (cancelled || hasFinished) return;
        finish();
      }
    };

    void initializeScene();

    return () => {
      cancelled = true;
      window.clearTimeout(initializationTimer);
      timeline?.kill();
      cancelAnimationFrame(frameId);
      removeResizeListener();
      removeContextLossListener();
      removeMotionPreferenceListener();
      resetPresentationStyles();
      geometry?.dispose();
      trailGeometry?.dispose();
      material?.dispose();
      trailMaterial?.dispose();
      renderer?.dispose();
      renderer?.domElement.remove();
      cleanupFrameRef.current = requestAnimationFrame(() => {
        root.classList.remove("cinematic-intro-pending");
        root.classList.add("cinematic-intro-skip-cover");
      });
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="cinematic-intro"
      data-active={isVisible ? "true" : "false"}
      ref={hostRef}
    />
  );
}
