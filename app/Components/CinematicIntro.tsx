"use client";

import { useEffect, useRef, useState } from "react";

const SESSION_KEY = "mathen-cinematic-intro";
const INTRO_DURATION_SECONDS = 8;

export default function CinematicIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSceneReady, setIsSceneReady] = useState(false);
  const [sceneFailed, setSceneFailed] = useState(false);
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

    try {
      window.sessionStorage.setItem(SESSION_KEY, "seen");
    } catch {
      // Continue without session persistence when storage is unavailable.
    }

    const visibilityFrame = requestAnimationFrame(() => setIsVisible(true));

    const handleMotionPreference = (event: MediaQueryListEvent) => {
      if (event.matches) finishRef.current?.();
    };
    reducedMotion.addEventListener("change", handleMotionPreference);

    let cancelled = false;
    let timeline: ReturnType<(typeof import("gsap"))["default"]["timeline"]> | undefined;
    let renderer: import("three").WebGLRenderer | undefined;
    let geometry: import("three").BufferGeometry | undefined;
    let material: import("three").ShaderMaterial | undefined;
    let frameId = 0;
    let hasFinished = false;
    let removeResizeListener = () => {};
    let removeContextLossListener = () => {};

    const finish = () => {
      if (cancelled || hasFinished) return;
      hasFinished = true;
      timeline?.kill();
      cancelAnimationFrame(frameId);
      removeResizeListener();
      removeContextLossListener();
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

        const width = window.innerWidth;
        const height = window.innerHeight;
        const isMobile = width < 768;
        const particleCount = isMobile ? 950 : 1900;
        const positions = new Float32Array(particleCount * 3);
        const phases = new Float32Array(particleCount);
        const sizes = new Float32Array(particleCount);

        for (let index = 0; index < particleCount; index += 1) {
          const offset = index * 3;
          const angle = Math.random() * Math.PI * 2;
          const radius = 2.3 + Math.random() * 7.5;
          positions[offset] = Math.cos(angle) * radius;
          positions[offset + 1] = (Math.random() - 0.5) * 7;
          positions[offset + 2] = (Math.random() - 0.5) * 13;
          phases[index] = Math.random() * Math.PI * 2;
          sizes[index] = 1 + Math.random() * (isMobile ? 2.3 : 3.4);
        }

        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#050807");
        const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 80);
        camera.position.z = 14;

        renderer = new THREE.WebGLRenderer({ alpha: false, antialias: !isMobile, powerPreference: "low-power" });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 1.6));
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
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
        geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));

        const particleMaterial = new THREE.ShaderMaterial({
          transparent: true,
          depthWrite: false,
          uniforms: {
            uTime: { value: 0 },
            uProgress: { value: 0 },
            uPixelRatio: { value: renderer.getPixelRatio() },
          },
          vertexShader: `
            attribute float aPhase;
            attribute float aSize;
            uniform float uTime;
            uniform float uProgress;
            uniform float uPixelRatio;
            varying float vAlpha;
            void main() {
              vec3 point = position;
              float converge = smoothstep(0.18, 0.53, uProgress);
              float disperse = smoothstep(0.72, 1.0, uProgress);
              float angle = atan(point.y, point.x) + uTime * 0.13 + aPhase * 0.08;
              float ringRadius = 1.1 + 0.72 * sin(aPhase * 2.0 + uTime * 0.8);
              vec3 orbit = vec3(cos(angle) * ringRadius, sin(angle * 1.35) * 1.3, sin(angle) * ringRadius * 0.45);
              point.xy = mix(point.xy, orbit.xy, converge * (1.0 - disperse * 0.25));
              point.z = mix(point.z, orbit.z, converge * (1.0 - disperse * 0.25));
              point += vec3(sin(uTime * 0.45 + aPhase), cos(uTime * 0.38 + aPhase * 1.4), sin(uTime * 0.32 + aPhase * 0.7)) * 0.14;
              point *= 1.0 + disperse * (0.55 + 0.3 * sin(aPhase));
              vec4 viewPosition = modelViewMatrix * vec4(point, 1.0);
              gl_Position = projectionMatrix * viewPosition;
              gl_PointSize = aSize * uPixelRatio * (24.0 / -viewPosition.z) * (1.0 + converge * 0.55);
              vAlpha = (0.16 + 0.62 * (1.0 - abs(sin(aPhase)))) * (0.22 + 0.78 * smoothstep(0.02, 0.24, uProgress)) * (1.0 - disperse * 0.35);
            }
          `,
          fragmentShader: `
            varying float vAlpha;
            void main() {
              vec2 centered = gl_PointCoord - vec2(0.5);
              float distanceFromCenter = length(centered);
              float core = smoothstep(0.5, 0.03, distanceFromCenter);
              float glow = exp(-distanceFromCenter * 10.0) * 0.3;
              vec3 emerald = vec3(0.20, 0.83, 0.56);
              gl_FragColor = vec4(emerald, (core + glow) * vAlpha);
            }
          `,
        });
        material = particleMaterial;

        const particles = new THREE.Points(geometry, particleMaterial);
        scene.add(particles);
        setIsSceneReady(true);

        const startedAt = performance.now();
        const drawFrame = (now: number) => {
          if (cancelled || !renderer) return;
          particleMaterial.uniforms.uTime.value = (now - startedAt) / 1000;
          try {
            renderer.render(scene, camera);
          } catch {
            setSceneFailed(true);
            finishRef.current?.();
            return;
          }
          frameId = requestAnimationFrame(drawFrame);
        };
        frameId = requestAnimationFrame(drawFrame);

        timeline = gsap.timeline({ onComplete: finish });
        timeline.to(particleMaterial.uniforms.uProgress, { value: 1, duration: INTRO_DURATION_SECONDS, ease: "none" }, 0);
        timeline.to(camera.position, { z: 10.8, duration: 4, ease: "power2.inOut" }, 2);
        timeline.to(camera.rotation, { z: 0.035, duration: 4, ease: "sine.inOut" }, 2);
        timeline.to(hostRef.current, { opacity: 0, duration: 1.25, ease: "power2.inOut" }, 6.7);

        const handleResize = () => {
          if (!renderer) return;
          const nextWidth = window.innerWidth;
          const nextHeight = window.innerHeight;
          camera.aspect = nextWidth / nextHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(nextWidth, nextHeight);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, nextWidth < 768 ? 1.25 : 1.6));
        };
        window.addEventListener("resize", handleResize, { passive: true });
        removeResizeListener = () => window.removeEventListener("resize", handleResize);
      } catch {
        if (cancelled || hasFinished) return;
        setSceneFailed(true);
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
      geometry?.dispose();
      material?.dispose();
      renderer?.dispose();
      renderer?.domElement.remove();
      finishRef.current = null;
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="cinematic-intro"
      data-scene-failed={sceneFailed}
      data-scene-ready={isSceneReady}
      ref={hostRef}
    >
      <button
        type="button"
        tabIndex={0}
        className="cinematic-intro__skip"
        onClick={() => finishRef.current?.()}
      >
        Pular introdução <span aria-hidden="true">↗</span>
      </button>
    </div>
  );
}
