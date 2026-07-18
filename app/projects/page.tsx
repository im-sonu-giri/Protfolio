import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack systems, computer vision pipelines, and real-time applications built by Sonu Giri.",
};

export default function ProjectsPage() {
  return (
    <div className="px-6 md:px-10 pt-40 pb-32 max-w-7xl mx-auto">
      <ScrollReveal className="mb-16">
        <p className="eyebrow mb-4">Projects</p>
        <h1 className="font-display text-clamp-h1 tracking-tightest max-w-3xl">
          Case studies, not just screenshots.
        </h1>
        <p className="text-gray-400 mt-6 max-w-xl">
          Every project here solved a real problem. Open any card for the full
          breakdown — the decisions, the trade-offs, and what I&apos;d do
          differently now.
        </p>
      </ScrollReveal>

      <ProjectsGrid />
    </div>
  );
}
