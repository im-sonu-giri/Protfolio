import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  const liveLinks = project.liveUrls ||
    (project.liveUrl
      ? [{ label: "Live Site", url: project.liveUrl }]
      : []);

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

        <p className="eyebrow mb-4">{project.category}</p>
        <h1 className="font-display text-clamp-h1 tracking-tightest mb-6">
          {project.title}
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          {liveLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              {link.label} <ArrowUpRight className="w-4 h-4" />
            </a>
          ))}
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
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs text-gray-400 border border-gray-800 px-3 py-1.5 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </ScrollReveal>

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
