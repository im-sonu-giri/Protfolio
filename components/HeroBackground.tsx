"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Renders the hero's full-bleed background with a three-layer fallback:
 *
 *   1. Looping video  (public/videos/hero-bg.mp4)
 *   2. Animated GIF   (public/images/hero-bg.gif)  — plain <img>, not next/image
 *   3. CSS grid        (always present, zero network dependency)
 *
 * Each layer is tried in order; whichever succeeds cross-fades in over the
 * grid via GSAP. The grid is never removed — it sits underneath everything
 * and is always the final fallback.
 *
 * To use a real video: drop an .mp4 at public/videos/hero-bg.mp4.
 * To use the GIF:      place an animated GIF at public/images/hero-bg.gif.
 * Nothing else needs to change.
 */
export function HeroBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const gifRef = useRef<HTMLImageElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [gifReady, setGifReady] = useState(false);
  const [gifFailed, setGifFailed] = useState(false);

  // Subtle parallax: the whole background drifts a little slower than the
  // page as the hero scrolls out, which reads as depth rather than a static
  // photo behind text.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.to(root, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: root.parentElement,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // Safety net: if the video never fires onCanPlay or onError within 4 s
  // (some browsers silently ignore broken <source> elements), treat it as
  // failed so the GIF can take over.
  useEffect(() => {
    if (videoReady || videoFailed) return;
    const timer = window.setTimeout(() => setVideoFailed(true), 4000);
    return () => clearTimeout(timer);
  }, [videoReady, videoFailed]);

  // Video succeeded: fade video in, grid out.
  useEffect(() => {
    if (videoReady) {
      gsap.to(videoRef.current, { opacity: 1, duration: 1.2, ease: "power2.out" });
      gsap.to(gridRef.current, { opacity: 0, duration: 1.2, ease: "power2.out" });
    }
  }, [videoReady]);

  // GIF succeeded (and video did not): fade GIF in, grid out.
  useEffect(() => {
    if (gifReady && !videoReady) {
      gsap.to(gifRef.current, { opacity: 1, duration: 1.2, ease: "power2.out" });
      gsap.to(gridRef.current, { opacity: 0, duration: 1.2, ease: "power2.out" });
    }
  }, [gifReady, videoReady]);

  return (
    <div ref={rootRef} className="absolute inset-0 -z-10 overflow-hidden">
      {/* Layer 0 — Always-on fallback: animated diagonal grid, pure CSS, no assets */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          animation: "hero-grid-drift 18s linear infinite",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#000000_78%)]" />

      {/* Layer 1 — Optional video, silently no-ops if the file isn't present */}
      {!videoFailed && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-0"
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/hero-bg-poster.jpg"
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
        >
          <source
            src="/videos/hero-bg.mp4"
            type="video/mp4"
            onError={() => setVideoFailed(true)}
          />
        </video>
      )}

      {/* Layer 2 — Animated GIF fallback.
          Plain <img> instead of next/image so the optimizer doesn't
          re-encode the GIF to a static frame. Always rendered (not gated
          behind video state) so it loads in parallel; GSAP handles which
          layer is visible. Filtered to match the B&W palette. */}
      {!gifFailed && (
        <img
          ref={gifRef}
          src="/images/hero-bg-1.gif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-0 grayscale contrast-125"
          onLoad={() => setGifReady(true)}
          onError={() => setGifFailed(true)}
        />
      )}

      {/* Dark overlay for text contrast — sits on top of all background layers */}
      <div className="absolute inset-0 bg-black/70" />
    </div>
  );
}
