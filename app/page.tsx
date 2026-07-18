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
                From idea to implementation.
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

          <p className="text-gray-400 -mt-10 mb-12 max-w-2xl leading-relaxed">
            Every project tells a story of solving real-world problems through
            thoughtful architecture, modern technologies, and continuous
            iteration. Explore the design decisions, technical challenges, and
            lessons learned.
          </p>

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
              I enjoy building products where clean code meets scalable architecture.
            </h2>
          </ScrollReveal>
          <ScrollReveal className="flex flex-col justify-center gap-6 text-gray-400 leading-relaxed">
            <p data-reveal-item>
              I believe in building software the right way — not the fastest
              or flashiest. Before writing a single line of code, I invest
              time in thoughtful system design, clear requirements, and proper
              architecture. I follow Agile methodologies — participating in
              sprint planning, daily standups, and retrospectives while
              maintaining strong communication with team members. I break
              complex features into small, manageable chunks, deliver working
              increments, and iterate based on feedback.
            </p>
            <p data-reveal-item>
              I maintain clean, well-organized, and maintainable codebases
              using modern yet stable technologies and best practices. I&apos;m
              not afraid to explore new tools and frameworks, but I prioritize
              reliability and long-term maintainability. I actively use AI
              tools (like Claude, Cursor, and GitHub Copilot) to accelerate
              development, improve code quality, and explore new ideas faster.
            </p>
            <p data-reveal-item>
              From early internships to my current role at Geek Tech Solutions,
              I&apos;ve learned that great engineering comes from discipline,
              continuous learning, and ownership. Whether working on
              production systems or personal projects, I focus on delivering
              real value through thoughtful design, robust testing, and
              attention to detail.
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
              className="inline-flex px-8 md:px-10 py-4 rounded-full bg-white text-black text-sm font-medium border border-transparent transition-[background,color,border-color] duration-300 hover:bg-transparent hover:text-white hover:border-white"
            >
              Get in Touch
            </Link>
            <a
              href={SITE_CONFIG.resumeUrl}
              download
              className="inline-flex items-center gap-1.5 px-8 md:px-10 py-4 rounded-full border border-gray-700 text-sm text-white transition-[border-color] duration-300 hover:border-white"
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
