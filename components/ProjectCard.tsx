"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Tilt magnitude is intentionally small (max ~6deg) — this is a lift,
    // not a carnival ride. Translate-Z + perspective gives the lift its depth.
    const rotateX = ((y - rect.height / 2) / rect.height) * -6;
    const rotateY = ((x - rect.width / 2) / rect.width) * 6;

    gsap.to(card, {
      rotateX,
      rotateY,
      translateZ: 20,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 800,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      translateZ: 0,
      duration: 0.6,
      ease: "power3.out",
    });
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
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="border border-gray-800 p-8 h-full flex flex-col justify-between transition-colors duration-300 group-hover:border-gray-500 will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div>
          <div className="flex items-start justify-between mb-6">
            <span className="eyebrow">
              {String(index + 1).padStart(2, "0")} / {project.category}
            </span>
            <ArrowUpRight
              className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
            />
          </div>

          <h3 className="font-display text-2xl md:text-3xl tracking-tight-2 mb-3">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {project.summary}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs text-gray-500 border border-gray-800 px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
