import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sonu Giri — full-stack developer and final-year Computer Science student in Nepal, building production systems and exploring LLMs + RAG.",
};

export default function AboutPage() {
  return (
    <div className="px-6 md:px-10 pt-40 pb-32 max-w-7xl mx-auto">
      <ScrollReveal className="mb-20">
        <p className="eyebrow mb-4">About</p>
        <h1 className="font-display text-clamp-h1 tracking-tightest max-w-3xl">
          I build things, then I ask why they broke.
        </h1>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
        <ScrollReveal className="md:col-span-2">
          <div className="relative aspect-[4/5] border border-gray-800 overflow-hidden">
            {/*
              TODO: Replace this placeholder with a real professional photo.
              Drop the file at /public/images/profile.jpg (portrait orientation
              works best given the aspect-[4/5] frame above), then swap the
              src below. Keep the grayscale filter for tonal consistency with
              the rest of the site, or remove it if the photo is already
              monochrome.
            */}
            <Image
              src="/images/profile-placeholder.svg"
              alt="Sonu Giri"
              fill
              className="object-cover grayscale contrast-125"
              priority
            />
          </div>
        </ScrollReveal>

        <ScrollReveal className="md:col-span-3 flex flex-col gap-6 text-gray-400 text-lg leading-relaxed">
          <p data-reveal-item>
            I&apos;m a final-year Computer Science student at NCIT in
            Kathmandu, currently interning as a Software Developer at Geek
            Tech Solutions in Lalitpur. Most of my time right now goes into
            backend and integration work on a capstone system that pulls
            together computer vision, time-series forecasting, and
            classification into one production pipeline.
          </p>
          <p data-reveal-item>
            I got into engineering the way a lot of people do — by wanting to
            build something specific, then discovering how much I didn&apos;t
            know about doing it properly. The projects that taught me the
            most weren&apos;t the ones that worked on the first try. They
            were the ones that broke in production-shaped ways: a webhook
            that fired twice, a migration that locked longer than expected, a
            forecasting model whose accuracy silently collapsed because of
            one wrong transformation.
          </p>
          <p data-reveal-item>
            That&apos;s shaped how I work now. I care about system design
            before I care about frameworks — what the data model actually
            enforces, where the failure modes live, what happens under
            concurrent load. I take testing seriously, not as a checkbox but
            as the fastest way to find out if I was wrong. And lately, I&apos;ve
            been pulled toward LLMs and retrieval-augmented generation,
            specifically the unglamorous problem of making retrieval
            trustworthy enough to build real applications on top of.
          </p>
          <p data-reveal-item>
            Outside of coursework and the internship, I build things that
            force me to learn something specific: a Nepali license plate
            recognition pipeline to actually understand computer vision
            end-to-end, a real-time chat app on Django Channels to understand
            pub/sub instead of just importing a chat SDK, and a handful of
            full-stack systems — employee management, clinic management,
            e-commerce — each one picked because it had a different kind of
            hard problem hiding inside it.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-12">
        {[
          { label: "Based in", value: "Nepal" },
          { label: "Focus", value: "Full-Stack & Systems" },
          { label: "Currently", value: "Interning + Capstone" },
          { label: "Exploring", value: "LLMs & RAG" },
        ].map((stat) => (
          <div key={stat.label} data-reveal-item>
            <p className="eyebrow mb-2">{stat.label}</p>
            <p className="font-display text-xl tracking-tight-2">{stat.value}</p>
          </div>
        ))}
      </ScrollReveal>
    </div>
  );
}
