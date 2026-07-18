"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { stack } from "@/data/stack";

/**
 * Categorised stack reference section — replaces the flat marquee with
 * a dense, scannable row layout inspired by motion.dev's docs aesthetic.
 * Each category is one row: fixed-width monospace label on the left,
 * inline item tags wrapping naturally on the right.
 */
export function StackSection() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32 border-y border-gray-800">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="mb-16">
          <p className="eyebrow mb-4">Stack</p>
          <h2 className="font-display text-clamp-h2 tracking-tight-2">
            What I build with.
          </h2>
        </ScrollReveal>

        <ScrollReveal stagger={0.06}>
          {stack.map((category, i) => (
            <div key={category.id} data-reveal-item>
              {i > 0 && <div className="rule my-0" />}

              <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-y-3 gap-x-8 py-5">
                <span className="eyebrow leading-none pt-0.5">
                  {category.label}
                </span>

                <div className="flex flex-wrap items-center gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm text-gray-400 border border-gray-800 rounded-sm transition-colors duration-200 hover:border-gray-400 hover:text-white hover:bg-white/[0.03]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
