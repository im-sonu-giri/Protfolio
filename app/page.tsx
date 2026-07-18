import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { Hero } from "@/components/Hero";
import { StackSection } from "@/components/StackSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { SITE_CONFIG } from "@/data/site";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <Hero />
      <StackSection />

      {/* Selected work */}
      <section id="selected-work" className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="flex items-end justify-between mb-16">
            <div>
              <p className="eyebrow mb-4">Selected Work</p>
              <h2 className="font-display text-clamp-h2 tracking-tight-2">
                A few systems I&apos;m proud of.
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden md:flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
            >
              All projects
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </ScrollReveal>

          <ScrollReveal
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            stagger={0.12}
          >
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Approach / philosophy */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <ScrollReveal>
            <p className="eyebrow mb-4">How I Work</p>
            <h2 className="font-display text-clamp-h2 tracking-tight-2 leading-tight">
              I&apos;d rather ship the boring, correct version first.
            </h2>
          </ScrollReveal>
          <ScrollReveal className="flex flex-col justify-center gap-6 text-gray-400 leading-relaxed">
            <p data-reveal-item>
              Most of what I&apos;ve learned came from the unglamorous parts
              of projects — the webhook that fires twice, the migration that
              locks a table longer than expected, the test I skipped that
              cost a weekend. I design for those failure modes now, before
              they happen.
            </p>
            <p data-reveal-item>
              I&apos;m a final-year Computer Science student, currently
              interning as a software developer where I own backend and
              integration work on a production capstone system. Outside of
              that, I build things that force me to learn — a chat app to
              understand pub/sub, a plate-recognition pipeline to understand
              computer vision, and lately, RAG systems to understand what it
              actually takes to make an LLM trustworthy.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills preview */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-16">
            <p className="eyebrow mb-4">Expertise</p>
            <h2 className="font-display text-clamp-h2 tracking-tight-2">
              What I actually work with.
            </h2>
          </ScrollReveal>

          <ScrollReveal
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-800"
            stagger={0.08}
          >
            {skillGroups.map((group) => (
              <div
                key={group.id}
                data-reveal-item
                className="bg-black p-8 hover:bg-black/50 transition-colors"
              >
                <span className="eyebrow">{group.index}</span>
                <h3 className="font-display text-xl tracking-tight-2 mt-3 mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-1.5">
                  {group.items.slice(0, 5).map((item) => (
                    <li key={item} className="text-sm text-gray-500">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal className="mt-10 flex justify-center">
            <Link
              href="/skills"
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
            >
              Full breakdown
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-24 md:py-40 border-t border-gray-800">
        <ScrollReveal className="max-w-7xl mx-auto text-center">
          <p className="eyebrow mb-6">Currently open to opportunities</p>
          <h2 className="font-display text-clamp-h1 tracking-tightest mb-10">
            Have something worth
            <br />
            building? Let&apos;s talk.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex px-8 md:px-10 py-4 bg-white text-black text-sm font-medium border border-transparent transition-[background,color,border-color] duration-300 hover:bg-transparent hover:text-white hover:border-white"
            >
              Get in Touch
            </Link>
            <a
              href={SITE_CONFIG.resumeUrl}
              download
              className="inline-flex items-center gap-1.5 px-8 md:px-10 py-4 border border-gray-700 text-sm text-white transition-[border-color] duration-300 hover:border-white"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
