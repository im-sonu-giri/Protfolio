import type { Metadata } from "next";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ContactForm } from "@/components/ContactForm";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sonu Giri for work, collaboration, or questions.",
};

export default function ContactPage() {
  return (
    <div className="px-6 md:px-10 pt-40 pb-32 max-w-6xl mx-auto">
      <ScrollReveal className="mb-20">
        <p className="eyebrow mb-4">Contact</p>
        <h1 className="font-display text-clamp-h1 tracking-tightest max-w-3xl">
          Tell me what you&apos;re building.
        </h1>
        <p className="text-gray-400 mt-6 max-w-xl">
          Whether it&apos;s a role, a project, or just a technical question —
          the form goes straight to my inbox. I read everything.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
        <ScrollReveal className="md:col-span-3">
          <ContactForm />
        </ScrollReveal>

        <ScrollReveal className="md:col-span-2 flex flex-col gap-8" stagger={0.1}>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            data-reveal-item
            className="flex items-center gap-4 group"
          >
            <Mail className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
            <span className="text-gray-400 group-hover:text-white transition-colors">
              {SITE_CONFIG.email}
            </span>
          </a>

          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal-item
            className="flex items-center gap-4 group"
          >
            <Github className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
            <span className="text-gray-400 group-hover:text-white transition-colors">
              github.com/im-sonu-giri
            </span>
          </a>

          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal-item
            className="flex items-center gap-4 group"
          >
            <Linkedin className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
            <span className="text-gray-400 group-hover:text-white transition-colors">
              LinkedIn
            </span>
          </a>

          {/* TODO: drop your resume PDF into /public/resume.pdf */}
          <a
            href={SITE_CONFIG.resumeUrl}
            download
            data-reveal-item
            className="flex items-center gap-4 group"
          >
            <Download className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
            <span className="text-gray-400 group-hover:text-white transition-colors">
              Download CV
            </span>
          </a>

          <div data-reveal-item className="rule mt-4" />

          <p data-reveal-item className="text-sm text-gray-500 leading-relaxed">
            Based in {SITE_CONFIG.location}. Usually replies within 1–2 days.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
