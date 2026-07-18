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
        Great software starts with thoughtful design
        </h1>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
        <ScrollReveal className="md:col-span-2">
          <div className="relative aspect-[4/5] border border-gray-800 overflow-hidden">
            <Image
              src="/images/Sonu.png"
              alt="Sonu Giri"
              fill
              className="object-cover grayscale contrast-125"
              priority
            />
          </div>
        </ScrollReveal>

        <ScrollReveal className="md:col-span-3 flex flex-col gap-6 text-gray-400 text-lg leading-relaxed">
          <p data-reveal-item>
            My journey into technology began in Class 9 when I built my first website. That curiosity led to internships at Panacea Nepal and Encode Solution, where I gained hands-on experience building real-world web applications.
          </p>

          <p data-reveal-item>
            A scholarship brought me to Nepal College of Information Technology (NCIT), where I pursued Software Engineering and developed a passion for System Design, scalable architectures, and building reliable software.
          </p>

          <p data-reveal-item>
            Today, as a final-year Software Engineering student, I'm interning at Geek Tech Solutions, contributing to a production-grade POS system with a focus on backend engineering, security, and performance.
          </p>

          <p data-reveal-item>
            I've built AI-powered and full-stack applications—from Nepali License Plate Recognition to healthcare, employee management, and e-commerce systems—emphasizing clean architecture, scalability, and production-ready development.
          </p>

          <p data-reveal-item>
            Currently, I'm expanding my expertise in Generative AI, LLMs, and RAG while building modern full-stack applications that solve meaningful real-world problems.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-12">
        {[
          { label: "Based in", value: "Kathmandu,Nepal" },
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
