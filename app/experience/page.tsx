import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Timeline } from "@/components/Timeline";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Sonu Giri's internship and academic timeline — backend and integration work on production systems.",
};

export default function ExperiencePage() {
  return (
    <div className="px-6 md:px-10 pt-40 pb-32 max-w-5xl mx-auto">
      <ScrollReveal className="mb-20">
        <p className="eyebrow mb-4">Experience</p>
        <h1 className="font-display text-clamp-h1 tracking-tightest max-w-3xl">
          Where the work happened.
        </h1>
      </ScrollReveal>

      <Timeline entries={experience} />
    </div>
  );
}
