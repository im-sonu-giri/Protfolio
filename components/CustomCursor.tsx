"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on desktop with fine pointer (mouse)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const pos = { x: 0, y: 0 };
    const ringPos = { x: 0, y: 0 };

    // Mouse move handler
    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;

      // Instant move for the inner dot
      gsap.set(dot, { 
        x: pos.x, 
        y: pos.y,
        duration: 0 
      });
    };

    // Smooth trailing ring with GSAP ticker
    gsap.ticker.add(() => {
      ringPos.x += (pos.x - ringPos.x) * 0.12; // Slightly smoother lag
      ringPos.y += (pos.y - ringPos.y) * 0.12;
      
      gsap.set(ring, { 
        x: ringPos.x, 
        y: ringPos.y 
      });
    });

    // Professional hover animations
    const onEnter = () => {
      gsap.to(ring, {
        scale: 2.8,
        borderColor: "rgba(255,255,255,0.8)",
        duration: 0.4,
        ease: "power2.out"
      });
      gsap.to(dot, {
        scale: 0.6,
        backgroundColor: "#ffffff",
        duration: 0.3,
      });
    };

    const onLeave = () => {
      gsap.to(ring, {
        scale: 1,
        borderColor: "rgba(255,255,255,0.4)",
        duration: 0.4,
        ease: "power2.out"
      });
      gsap.to(dot, {
        scale: 1,
        backgroundColor: "#ffffff",
        duration: 0.3,
      });
    };

    // Event listeners
    window.addEventListener("mousemove", onMove);

    document.querySelectorAll("a, button, [data-cursor-hover], input, textarea").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none">
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />

      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white/40 rounded-full z-[9998] -translate-x-1/2 -translate-y-1/2 transition-colors"
      />
    </div>
  );
}