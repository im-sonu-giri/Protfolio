"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// The Three.js canvas is only ever loaded on the client, and only after
// this wrapper decides the device can afford it — so it never adds to the
// server-rendered payload or blocks the hero's first paint.
const HeroScene = dynamic(() => import("./HeroScene").then((m) => m.HeroScene), {
  ssr: false,
});

/**
 * Decides whether to render the 3D hero layer at all. Skips it for:
 *  - prefers-reduced-motion users (still get the static CSS grid beneath it)
 *  - narrow viewports, where a spinning 3D object adds weight without much
 *    visual payoff behind stacked text
 *  - devices reporting very few logical cores (a cheap proxy for low-end
 *    hardware, since WebGL benchmarking isn't worth the complexity here)
 */
export function HeroScene3D() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isNarrow = window.innerWidth < 768;
    const lowCores =
      typeof navigator !== "undefined" &&
      "hardwareConcurrency" in navigator &&
      navigator.hardwareConcurrency > 0 &&
      navigator.hardwareConcurrency <= 2;

    if (reduceMotion || isNarrow || lowCores) return;

    // Defer mount slightly so the 3D layer never competes with the hero's
    // text-entrance animation or the largest-contentful-paint measurement.
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
  }, []);

  if (!shouldRender) return null;

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <HeroScene reduceMotion={false} />
    </div>
  );
}
