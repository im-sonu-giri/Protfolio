"use client";

import { useMemo, useState } from "react";
import { gsap } from "@/lib/gsap";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, categories } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  const handleFilter = (cat: (typeof categories)[number]) => {
    setActive(cat);
    // A quick, contained fade on the grid itself when the filter changes —
    // ScrollReveal only fires once per element, so this is a separate,
    // deliberately simple transition for repeated filter interactions.
    gsap.fromTo(
      "[data-projects-grid]",
      { opacity: 0.3 },
      { opacity: 1, duration: 0.4, ease: "power2.out" }
    );
  };

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={cn(
              "text-sm px-4 py-2 border transition-colors duration-300",
              active === cat
                ? "bg-white text-black border-white"
                : "border-gray-800 text-gray-400 hover:border-gray-500 hover:text-white"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        data-projects-grid
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-gray-500 text-sm">
          Nothing in this category yet — check back soon.
        </p>
      )}
    </div>
  );
}
