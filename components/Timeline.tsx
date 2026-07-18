"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import type { ExperienceEntry } from "@/data/experience";

export function Timeline({ entries }: { entries: ExperienceEntry[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // The vertical spine draws itself downward as the section scrolls
      // into view, giving the timeline a sense of progression rather than
      // appearing all at once.
      gsap.fromTo(
        "[data-timeline-spine]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: container,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 0.6,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>("[data-timeline-entry]").forEach((entry) => {
        gsap.from(entry, {
          opacity: 0,
          x: -24,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: entry,
            start: "top 85%",
            once: true,
          },
        });
        const dot = entry.querySelector("[data-timeline-dot]");
        if (dot) {
          gsap.from(dot, {
            scale: 0,
            duration: 0.5,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: entry,
              start: "top 85%",
              once: true,
            },
          });
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative pl-10 md:pl-14">
      <div className="absolute left-0 top-2 bottom-2 w-px bg-gray-800">
        <div
          data-timeline-spine
          className="w-full h-full bg-white"
        />
      </div>

      <div className="flex flex-col gap-16">
        {entries.map((entry) => (
          <div key={entry.id} data-timeline-entry className="relative">
            <span
              data-timeline-dot
              className="absolute -left-[3.1rem] md:-left-[3.6rem] top-1.5 w-2.5 h-2.5 rounded-full bg-white"
            />
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
              <h3 className="font-display text-xl md:text-2xl tracking-tight-2">
                {entry.role}
              </h3>
              <span className="eyebrow whitespace-nowrap">{entry.period}</span>
            </div>
            <p className="text-gray-400 mb-4">
              {entry.org} — {entry.location}
            </p>
            <ul className="space-y-2">
              {entry.points.map((point, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-400 leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-gray-600"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
