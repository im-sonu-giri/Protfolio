"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const STACK = [
  "React",
  "Next.js",
  "Django",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "LangChain",
  "TypeScript",
  "Redis",
];

/**
 * Infinite horizontal marquee. The track renders the stack list twice
 * back-to-back, then animates translateX from 0% to -50% linearly and
 * repeats forever — because the two halves are identical, the jump back
 * to 0% at the loop point is invisible. This is the standard GSAP marquee
 * pattern and avoids the layout-thrash you get from re-measuring widths
 * on every frame.
 */
export function TechMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const tween = gsap.to(track, {
      xPercent: -50,
      duration: 22,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div className="border-y border-gray-800 py-6 overflow-hidden select-none">
      <div ref={trackRef} className="flex w-max gap-12 will-change-transform">
        {[...STACK, ...STACK].map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="font-display text-2xl md:text-3xl tracking-tight-2 text-gray-600 whitespace-nowrap flex items-center gap-12"
          >
            {tech}
            <span className="text-gray-800 text-lg">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
