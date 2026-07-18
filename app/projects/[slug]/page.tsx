import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="px-6 md:px-10 pt-40 pb-32 max-w-4xl mx-auto">
      <ScrollReveal>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          All projects
        </Link>

        <p className="eyebrow mb-4">
          {project.category} — {project.year}
        </p>
        <h1 className="font-display text-clamp-h1 tracking-tightest mb-6">
          {project.title}
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Live Site <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-gray-700 text-sm hover:border-white transition-colors"
            >
              <Github className="w-4 h-4" /> Source
            </a>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-16">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs text-gray-400 border border-gray-800 px-3 py-1.5"
            >
              {tech}
            </span>
          ))}
        </div>
      </ScrollReveal>

      <div className="rule mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <ScrollReveal className="md:col-span-1">
          <p className="eyebrow mb-4">The Problem</p>
        </ScrollReveal>
        <ScrollReveal className="md:col-span-2 text-gray-400 leading-relaxed">
          <p>{project.problem}</p>
        </ScrollReveal>
      </div>

      <div className="rule my-16" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <ScrollReveal className="md:col-span-1">
          <p className="eyebrow mb-4">The Approach</p>
        </ScrollReveal>
        <ScrollReveal className="md:col-span-2" stagger={0.1}>
          <ul className="space-y-5">
            {project.approach.map((step, i) => (
              <li key={i} data-reveal-item className="flex gap-4">
                <span className="font-mono text-gray-600 text-sm mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-gray-400 leading-relaxed">{step}</p>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>

      <div className="rule my-16" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
        <ScrollReveal className="md:col-span-1">
          <p className="eyebrow mb-4">The Impact</p>
        </ScrollReveal>
        <ScrollReveal className="md:col-span-2" stagger={0.1}>
          <ul className="space-y-4">
            {project.impact.map((point, i) => (
              <li
                key={i}
                data-reveal-item
                className="text-white font-display text-lg tracking-tight-2 leading-snug"
              >
                {point}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>

      <ScrollReveal className="border-t border-gray-800 pt-12 flex items-center justify-between">
        <span className="text-sm text-gray-500">Next project</span>
        <Link
          href={`/projects/${next.slug}`}
          className="font-display text-2xl md:text-3xl tracking-tightest hover:text-gray-400 transition-colors flex items-center gap-3 group"
        >
          {next.title}
          <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </ScrollReveal>
    </div>
  );
}
