import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills & Expertise",
  description:
    "A breakdown of Sonu Giri's expertise across full-stack development, system design, QA, and LLM/RAG.",
};

export default function SkillsPage() {
  return (
    <div className="px-6 md:px-10 pt-40 pb-32 max-w-6xl mx-auto">
      <ScrollReveal className="mb-20">
        <p className="eyebrow mb-4">Skills & Expertise</p>
        <h1 className="font-display text-clamp-h1 tracking-tightest max-w-3xl">
          Depth over buzzwords.
        </h1>
        <p className="text-gray-400 mt-6 max-w-xl">
          Organized by where I actually spend time, not by what looks good on
          a list. The LLM/RAG section is the newest and growing fastest.
        </p>
      </ScrollReveal>

      <div className="flex flex-col">
        {skillGroups.map((group, i) => (
          <ScrollReveal
            key={group.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 border-t border-gray-800"
          >
            <div className="md:col-span-1">
              <span className="font-mono text-gray-600 text-sm">
                {group.index}
              </span>
            </div>
            <div className="md:col-span-4">
              <h2 className="font-display text-2xl md:text-3xl tracking-tight-2 mb-3">
                {group.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                {group.description}
              </p>
            </div>
            <div className="md:col-span-7 flex flex-wrap content-start gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  data-reveal-item
                  className="text-sm px-4 py-2 border border-gray-800 text-gray-300 hover:border-white hover:text-white transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>
        ))}
        <div className="border-t border-gray-800" />
      </div>
    </div>
  );
}
