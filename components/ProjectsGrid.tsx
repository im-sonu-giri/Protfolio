"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsGrid() {
  return (
    <ScrollReveal
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      stagger={0.1}
    >
      {projects.map((project, i) => (
        <ProjectCard key={project.slug} project={project} index={i} />
      ))}
    </ScrollReveal>
  );
}
