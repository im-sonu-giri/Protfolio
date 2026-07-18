"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => null,
});

export function HeroScene3D() {
  const [shouldRender, setShouldRender] = useState(false);

  const checkCapabilities = useCallback(() => {
    if (typeof window === "undefined") return false;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isNarrow = window.innerWidth < 768;
    const lowCores =
      "hardwareConcurrency" in navigator &&
      navigator.hardwareConcurrency > 0 &&
      navigator.hardwareConcurrency <= 2;

    return !reduceMotion && !isNarrow && !lowCores;
  }, []);

  useEffect(() => {
    if (!checkCapabilities()) return;

    const id = window.requestIdleCallback
      ? window.requestIdleCallback(() => setShouldRender(true), { timeout: 1200 })
      : window.setTimeout(() => setShouldRender(true), 300);

    return () => {
      if (window.cancelIdleCallback && typeof id === "number") {
        window.cancelIdleCallback(id);
      } else {
        window.clearTimeout(id as unknown as number);
      }
    };
  }, [checkCapabilities]);

  if (!shouldRender) return null;

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <HeroScene reduceMotion={false} />
    </div>
  );
}
