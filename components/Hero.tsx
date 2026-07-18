"use client";

import { useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Download, ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { MagneticButton } from "@/components/MagneticButton";
import { HeroBackground } from "@/components/HeroBackground";
import { SITE_CONFIG } from "@/data/site";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const primaryRef = useRef<HTMLButtonElement>(null);
  const secondaryRef = useRef<HTMLButtonElement>(null);
  const sweepRef = useRef<HTMLSpanElement>(null);
  const sweepTextRef = useRef<HTMLSpanElement>(null);
  const router = useRouter();

  /* ── Reduced-motion gate ─────────────────────────────────── */
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mq.matches;
    const onChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  /** Returns seconds — 0 when the user prefers reduced motion. */
  const dur = useCallback(
    (ms: number) => (prefersReducedMotion.current ? 0 : ms / 1000),
    [],
  );

  /* ── Hero entrance timeline ───────────────────────────────── */

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.set("[data-hero-line]", { yPercent: 110 })
        .set("[data-hero-fade]", { opacity: 0, y: 16, scale: 0.98 })
        .to("[data-hero-line]", {
          yPercent: 0,
          duration: 1.1,
          stagger: 0.1,
        })
        .to(
          "[data-hero-fade]",
          { opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.12 },
          "-=0.6",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* ── Primary button hover — scale + glow ──────────────────── */

  const handlePrimaryEnter = useCallback(() => {
    gsap.to(primaryRef.current, {
      scale: 1.03,
      boxShadow: "0 0 24px rgba(255,255,255,0.25)",
      duration: dur(300),
      ease: "power2.out",
    });
  }, [dur]);

  const handlePrimaryLeave = useCallback(() => {
    gsap.to(primaryRef.current, {
      scale: 1,
      boxShadow: "0 0 0px rgba(255,255,255,0)",
      duration: dur(300),
      ease: "power2.out",
    });
  }, [dur]);

  /* ── Secondary button hover — fill sweep + border ─────────── */

  const handleSecondaryEnter = useCallback(() => {
    const d = dur(350);
    gsap.to(sweepRef.current, {
      scaleX: 1,
      duration: d,
      ease: "power2.out",
    });
    gsap.to(sweepTextRef.current, {
      color: "#000000",
      duration: d,
      ease: "power2.out",
    });
    gsap.to(secondaryRef.current, {
      borderColor: "#ffffff",
      duration: d,
      ease: "power2.out",
    });
  }, [dur]);

  const handleSecondaryLeave = useCallback(() => {
    const d = dur(350);
    gsap.to(sweepRef.current, {
      scaleX: 0,
      duration: d,
      ease: "power2.out",
    });
    gsap.to(sweepTextRef.current, {
      color: "#ffffff",
      duration: d,
      ease: "power2.out",
    });
    gsap.to(secondaryRef.current, {
      borderColor: "#2A2A2A",
      duration: d,
      ease: "power2.out",
    });
  }, [dur]);

  /* ── Render ───────────────────────────────────────────────── */

  return (
    <section
      ref={containerRef}
      className="relative h-screen h-[100svh] flex flex-col items-center justify-center px-6 md:px-10 overflow-hidden"
    >
      <HeroBackground />

      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        <p data-hero-fade className="eyebrow mb-8">
          Sonu Giri
        </p>

        <h1 className="font-display font-medium leading-[0.95] tracking-tightest">
          <span className="block overflow-hidden">
            <span data-hero-line className="block text-clamp-hero">
              FULL-STACK
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-hero-line className="block text-clamp-hero text-gray-400">
              DEVELOPER
            </span>
          </span>
        </h1>

        <p
          data-hero-fade
          className="mt-8 max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed"
        >
          Building scalable web applications, resilient backend systems, and
          AI-powered solutions with a focus on clean architecture, software
          quality, and exceptional user experiences.
        </p>

        <p
          data-hero-fade
          className="mt-6 text-xs md:text-sm tracking-[0.2em] uppercase text-white"
        >
          Full-Stack Developer &middot; System Designer &middot; QA Automation
          &middot; LLM &amp; RAG Explorer
        </p>

        {/* ── CTA buttons ─────────────────────────────────── */}
        <div
          data-hero-fade
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Primary — solid white, scale + glow on hover */}
          <MagneticButton
            ref={primaryRef}
            onHoverStart={handlePrimaryEnter}
            onHoverEnd={handlePrimaryLeave}
            className="group inline-flex items-center gap-2 h-14 md:h-16 px-9 md:px-11 rounded-md bg-white text-black text-base font-medium border border-transparent cursor-pointer"
            onClick={() =>
              document
                .getElementById("selected-work")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Work
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MagneticButton>

          {/* Secondary — transparent bordered, fill-sweep on hover */}
          <MagneticButton
            ref={secondaryRef}
            onHoverStart={handleSecondaryEnter}
            onHoverEnd={handleSecondaryLeave}
            className="relative inline-flex items-center h-14 md:h-16 px-9 md:px-11 rounded-md bg-transparent text-base font-medium border border-gray-700 overflow-hidden cursor-pointer"
            onClick={() => router.push("/contact")}
          >
            <span
              ref={sweepRef}
              className="absolute inset-0 bg-white origin-left scale-x-0"
            />
            <span ref={sweepTextRef} className="relative z-10 text-white">
              Get in Touch
            </span>
          </MagneticButton>
        </div>

        {/* Download CV — understated text link, not a full button */}
        <a
          href={SITE_CONFIG.resumeUrl}
          download
          data-hero-fade
          className="mt-8 inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-gray-700 hover:decoration-white"
        >
          <Download className="w-3.5 h-3.5" />
          Download CV
        </a>
      </div>

      <div
        data-hero-fade
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-xs text-gray-500 z-10"
      >
        Scroll
        <span className="w-px h-8 bg-gray-700" />
      </div>
    </section>
  );
}
