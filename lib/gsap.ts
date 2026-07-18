"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins exactly once. Importing this module anywhere is safe —
// gsap.registerPlugin is idempotent, but centralizing it avoids every
// component needing to remember to do it.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // Respect prefers-reduced-motion globally: GSAP timelines still run,
  // but at effectively zero duration, so layout logic in components
  // doesn't need its own reduced-motion branch.
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  gsap.defaults({
    duration: media.matches ? 0.01 : 0.8,
  });
}

export { gsap, ScrollTrigger };
