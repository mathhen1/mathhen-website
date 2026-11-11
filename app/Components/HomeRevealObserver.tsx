"use client";

import { useEffect } from "react";

export default function HomeRevealObserver() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".reveal, .reveal-r, .reveal-l");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((target) => {
        target.classList.remove("opacity-0");
      });
      return;
    }

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.remove("opacity-0"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const target = entry.target;
        if (target.classList.contains("reveal-r")) target.classList.add("animate-reveal-r");
        else if (target.classList.contains("reveal-l")) target.classList.add("animate-reveal-l");
        else target.classList.add("animate-reveal");

        observer.unobserve(target);
      });
    }, { threshold: 0.2 });

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return null;
}
