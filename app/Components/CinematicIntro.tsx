"use client";

import { useEffect, useRef, useState } from "react";

const SESSION_KEY = "mathen-cinematic-intro";
const INTRO_DURATION_SECONDS = 12;

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
  const outerRadius = 3.9;
  const halfFieldOfView = (fieldOfView * Math.PI) / 360;
  const narrowDimension = Math.min(1, aspectRatio);

  return Math.max(13, (outerRadius * 1.23) / (Math.tan(halfFieldOfView) * narrowDimension));
}

export default function CinematicIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);
  const finishRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    try {
      if (window.sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      // Storage can be unavailable in private browsing or restricted contexts.
    }

    const visibilityFrame = requestAnimationFrame(() => setIsVisible(true));
    const handleMotionPreference = (event: MediaQueryListEvent) => {
      if (event.matches) finishRef.current?.();
    };
    reducedMotion.addEventListener("change", handleMotionPreference);

    let cancelled = false;
    let hasFinished = false;
    let timeline: ReturnType<(typeof import("gsap"))["default"]["timeline"]> | undefined;
    let renderer: import("three").WebGLRenderer | undefined;
    let geometry: import("three").BufferGeometry | undefined;
    let material: import("three").ShaderMaterial | undefined;
    let frameId = 0;
    let removeResizeListener = () => {};
    let removeContextLossListener = () => {};
    let resetPresentationStyles = () => {};

    const finish = () => {
      if (cancelled || hasFinished) return;
      hasFinished = true;
      timeline?.kill();
      cancelAnimationFrame(frameId);
      removeResizeListener();
      removeContextLossListener();
      resetPresentationStyles();

      if (renderer) {
        renderer.setAnimationLoop(null);
        geometry?.dispose();
        material?.dispose();
        renderer.dispose();
        renderer.domElement.remove();
        renderer = undefined;
      }

      try {
        window.sessionStorage.setItem(SESSION_KEY, "seen");
      } catch {
        // The animation still completes when storage is unavailable.
      }

      setIsVisible(false);
    };

    finishRef.current = finish;

    const initializeScene = async () => {
      try {
        const [THREE, { gsap }] = await Promise.all([
          import("three"),
          import("gsap"),
        ]);
        if (cancelled || hasFinished || !hostRef.current) return;

        try {
          window.sessionStorage.setItem(SESSION_KEY, "seen");
        } catch {
          // Continue without session persistence when storage is unavailable.
        }

        const width = window.innerWidth;
        const height = window.innerHeight;
        const isMobile = width < 768;
        const particleCount = getParticleCount(width, height, isMobile);
        const startPositions = new Float32Array(particleCount * 3);
        const targetPositions = new Float32Array(particleCount * 3);
        const phases = new Float32Array(particleCount);
        const majorAngles = new Float32Array(particleCount);
        const sizes = new Float32Array(particleCount);
        const colors = new Float32Array(particleCount * 3);

        const emerald = new THREE.Color("#10b981");
        const mint = new THREE.Color("#d1fae5");
        const particleColor = new THREE.Color();
        const strandCount = 6;
        const particlesPerStrand = Math.ceil(particleCount / strandCount);
        const torusMajorRadius = 2.75;
        const tilt = 0.78;
        const yaw = -0.2;
        const cosTilt = Math.cos(tilt);
        const sinTilt = Math.sin(tilt);
        const cosYaw = Math.cos(yaw);
        const sinYaw = Math.sin(yaw);
        const fullTurn = Math.PI * 2;

        for (let index = 0; index < particleCount; index += 1) {
          const offset = index * 3;
          const strand = Math.floor(index / particlesPerStrand);
          const positionInStrand = index % particlesPerStrand;
          const majorAngle = ((positionInStrand + Math.random() * 0.8) / particlesPerStrand) * fullTurn;
          const seed = Math.random() * fullTurn;

          // Six interlaced helical lanes form a thick toroidal shell with a clear center.
          const minorAngle = majorAngle * 2.4
            + (strand / strandCount) * fullTurn
            + (Math.random() - 0.5) * 0.82;
          const tubeRadius = 0.68 + Math.random() * 0.52;
          const localMajorRadius = torusMajorRadius
            + 0.1 * Math.sin(minorAngle * 2)
            + 0.08 * Math.sin(majorAngle * 5 + strand);
          const radialDistance = localMajorRadius + tubeRadius * Math.cos(minorAngle);
          const localX = radialDistance * Math.cos(majorAngle);
          const localY = radialDistance * Math.sin(majorAngle);
          const localZ = tubeRadius * Math.sin(minorAngle);
          const tiltedY = localY * cosTilt - localZ * sinTilt;
          const tiltedZ = localY * sinTilt + localZ * cosTilt;

          targetPositions[offset] = localX * cosYaw - tiltedY * sinYaw;
          targetPositions[offset + 1] = localX * sinYaw + tiltedY * cosYaw;
          targetPositions[offset + 2] = tiltedZ;

          const startRadius = 4.5 + Math.random() * 5;
          const startAzimuth = Math.random() * fullTurn;
          const startElevation = (Math.random() - 0.5) * Math.PI;
          startPositions[offset] = Math.cos(startAzimuth) * Math.cos(startElevation) * startRadius;
          startPositions[offset + 1] = Math.sin(startElevation) * startRadius;
          startPositions[offset + 2] = Math.sin(startAzimuth) * Math.cos(startElevation) * startRadius;

          phases[index] = seed;
          majorAngles[index] = majorAngle;
          sizes[index] = 0.7 + Math.random() * (isMobile ? 0.7 : 0.95);

          const occasionalHighlight = Math.random() > 0.994;
          particleColor.lerpColors(emerald, mint, occasionalHighlight ? 0.88 : Math.random() * 0.3);
          const colorVariation = 0.48 + Math.random() * 0.65;
          colors[offset] = particleColor.r * colorVariation;
          colors[offset + 1] = particleColor.g * colorVariation;
          colors[offset + 2] = particleColor.b * colorVariation;
        }

        const scene = new THREE.Scene();
        const fieldOfView = 42;
        const camera = new THREE.PerspectiveCamera(fieldOfView, width / height, 0.1, 120);
        camera.position.z = getCameraDistance(width / height, fieldOfView);

        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: !isMobile,
          powerPreference: "low-power",
        });
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.2 : 1.5));
        renderer.setSize(width, height);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.domElement.className = "cinematic-intro__canvas";
        renderer.domElement.setAttribute("aria-hidden", "true");

        const handleContextLost = (event: Event) => {
          event.preventDefault();
          finishRef.current?.();
        };
        renderer.domElement.addEventListener("webglcontextlost", handleContextLost);
        removeContextLossListener = () => renderer?.domElement.removeEventListener("webglcontextlost", handleContextLost);
        hostRef.current.appendChild(renderer.domElement);

        geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(startPositions, 3));
        geometry.setAttribute("aTarget", new THREE.BufferAttribute(targetPositions, 3));
        geometry.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
        geometry.setAttribute("aMajor", new THREE.BufferAttribute(majorAngles, 1));
        geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
        geometry.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));

        const particleMaterial = new THREE.ShaderMaterial({
          transparent: true,
          depthWrite: false,
          uniforms: {
            uTime: { value: 0 },
            uBirth: { value: 0 },
            uAssemble: { value: 0 },
            uDisperse: { value: 0 },
            uPixelRatio: { value: renderer.getPixelRatio() },
          },
          vertexShader: `
            attribute vec3 aTarget;
            attribute float aPhase;
            attribute float aMajor;
            attribute float aSize;
            attribute vec3 aColor;
            uniform float uTime;
            uniform float uBirth;
            uniform float uAssemble;
            uniform float uDisperse;
            uniform float uPixelRatio;
            varying vec3 vColor;
            varying float vAlpha;
            void main() {
              float assemble = clamp(uAssemble, 0.0, 1.0);
              float disperse = clamp(uDisperse, 0.0, 1.0);
              vec3 orbitalDrift = vec3(
                sin(uTime * 0.34 + aPhase) * 0.34,
                cos(uTime * 0.29 + aPhase * 1.4) * 0.28,
                sin(uTime * 0.25 + aPhase * 0.8) * 0.42
              );
              vec3 point = mix(position + orbitalDrift, aTarget, assemble);
              point += vec3(
                sin(aMajor * 2.4 + uTime * 0.55 + aPhase) * 0.07,
                cos(aMajor * 1.8 + uTime * 0.42 + aPhase) * 0.065,
                sin(aPhase + uTime * 0.48) * 0.06
              ) * assemble;

              float yaw = uTime * 0.075;
              float yawCos = cos(yaw);
              float yawSin = sin(yaw);
              point.xz = mat2(yawCos, -yawSin, yawSin, yawCos) * point.xz;

              vec3 tangent = normalize(vec3(-aTarget.y, aTarget.x, 0.3 * sin(aPhase)));
              vec3 escapeDirection = normalize(aTarget + tangent * 0.78 + vec3(0.0, 0.0, (aPhase / 6.28318 - 0.5) * 1.5));
              float escapeDistance = pow(disperse, 1.18) * (13.0 + 14.0 * (aPhase / 6.28318));
              point += escapeDirection * escapeDistance;
              point += tangent * disperse * sin(aPhase * 2.7 + uTime * 1.3) * 1.25;

              vec4 viewPosition = modelViewMatrix * vec4(point, 1.0);
              gl_Position = projectionMatrix * viewPosition;
              gl_PointSize = clamp(aSize * uPixelRatio * (34.0 / -viewPosition.z), 1.0, 3.8);

              float birthAlpha = smoothstep(0.0, 0.9, uBirth);
              float exitAlpha = 1.0 - smoothstep(0.58, 1.0, disperse) * 0.16;
              float shimmer = 0.78 + 0.22 * sin(aPhase * 2.1 + uTime * 1.4);
              vColor = aColor * shimmer;
              vAlpha = birthAlpha * exitAlpha * (0.42 + 0.5 * shimmer);
            }
          `,
          fragmentShader: `
            varying vec3 vColor;
            varying float vAlpha;
            void main() {
              float distanceFromCenter = length(gl_PointCoord - vec2(0.5));
              float core = 1.0 - smoothstep(0.12, 0.5, distanceFromCenter);
              float softEdge = 1.0 - smoothstep(0.28, 0.5, distanceFromCenter);
              float glow = exp(-distanceFromCenter * 9.0) * 0.12;
              gl_FragColor = vec4(vColor * (0.92 + glow), (core * 0.9 + softEdge * 0.1) * vAlpha);
              #include <tonemapping_fragment>
              #include <colorspace_fragment>
            }
          `,
        });
        material = particleMaterial;

        const particles = new THREE.Points(geometry, particleMaterial);
        scene.add(particles);

        const homeContent = document.querySelector<HTMLElement>("[data-home-intro-content]");
        resetPresentationStyles = () => {
          gsap.set(hostRef.current, { clearProps: "opacity" });
          if (homeContent) gsap.set(homeContent, { clearProps: "transform,opacity" });
        };

        if (homeContent) {
          gsap.set(homeContent, { y: Math.min(window.innerHeight * 0.16, 140) });
        }

        const startedAt = performance.now();
        const drawFrame = (now: number) => {
          if (cancelled || !renderer) return;
          particleMaterial.uniforms.uTime.value = (now - startedAt) / 1000;
          try {
            renderer.render(scene, camera);
          } catch {
            finishRef.current?.();
            return;
          }
          frameId = requestAnimationFrame(drawFrame);
        };
        frameId = requestAnimationFrame(drawFrame);

        timeline = gsap.timeline({ onComplete: finish });
        timeline.to(particleMaterial.uniforms.uBirth, { value: 1, duration: 2.5, ease: "power2.out" }, 0);
        timeline.to(particleMaterial.uniforms.uAssemble, { value: 1, duration: 3, ease: "power3.inOut" }, 2.5);
        timeline.to(camera.rotation, { z: 0.055, duration: 3, ease: "sine.inOut" }, 5.5);
        timeline.to(camera.rotation, { z: 0, duration: 3, ease: "sine.inOut" }, 8.5);
        timeline.to(particleMaterial.uniforms.uDisperse, { value: 1, duration: 1.5, ease: "power3.in" }, 8.5);
        if (homeContent) {
          timeline.to(homeContent, { y: 0, duration: 2.65, ease: "power4.out" }, 9.35);
        }
        timeline.to(hostRef.current, {
          opacity: 0,
          duration: INTRO_DURATION_SECONDS - 9.5,
          ease: "power3.inOut",
        }, 9.5);

        const handleResize = () => {
          if (!renderer) return;
          const nextWidth = window.innerWidth;
          const nextHeight = window.innerHeight;
          camera.aspect = nextWidth / nextHeight;
          camera.position.z = getCameraDistance(camera.aspect, fieldOfView);
          camera.updateProjectionMatrix();
          renderer.setSize(nextWidth, nextHeight);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, nextWidth < 768 ? 1.2 : 1.5));
        };
        window.addEventListener("resize", handleResize, { passive: true });
        removeResizeListener = () => window.removeEventListener("resize", handleResize);
      } catch {
        if (cancelled || hasFinished) return;
        finishRef.current?.();
      }
    };

    const sceneStartTimer = window.setTimeout(() => void initializeScene(), 0);

    return () => {
      cancelled = true;
      cancelAnimationFrame(visibilityFrame);
      window.clearTimeout(sceneStartTimer);
      reducedMotion.removeEventListener("change", handleMotionPreference);
      timeline?.kill();
      cancelAnimationFrame(frameId);
      removeResizeListener();
      removeContextLossListener();
      resetPresentationStyles();
      geometry?.dispose();
      material?.dispose();
      renderer?.dispose();
      renderer?.domElement.remove();
      finishRef.current = null;
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="cinematic-intro" ref={hostRef}>
      <button
        type="button"
        className="cinematic-intro__skip"
        onClick={() => finishRef.current?.()}
      >
        Pular introdução <span aria-hidden="true">↗</span>
      </button>
    </div>
  );
}
