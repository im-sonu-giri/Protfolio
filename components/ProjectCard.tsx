"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = () => {
    const card = cardRef.current;
    const arrow = arrowRef.current;
    if (!card) return;

    gsap.to(card, {
      y: -6,
      duration: 0.3,
      ease: "power2.out",
    });

    if (arrow) {
      gsap.to(arrow, {
        x: 3,
        y: -3,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const arrow = arrowRef.current;
    if (!card) return;

    gsap.to(card, {
      y: 0,
      duration: 0.4,
      ease: "power3.out",
    });

    if (arrow) {
      gsap.to(arrow, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: "power3.out",
      });
    }
  };

  return (
    <Link
      href={`/projects/${project.slug}`}
      data-reveal-item
      data-cursor-hover
      className="group block"
    >
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="border border-gray-800 p-8 h-full flex flex-col justify-between transition-[border-color] duration-300 group-hover:border-gray-500 will-change-transform"
      >
        <div>
          <div className="flex items-start justify-between mb-6">
            <span className="eyebrow">
              {String(index + 1).padStart(2, "0")} / {project.category}
            </span>
            <span ref={arrowRef} className="inline-flex">
              <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-[color] duration-300" />
            </span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl tracking-tight-2 mb-3">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {project.summary}
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs text-gray-500 border border-gray-800 rounded-full px-3 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
