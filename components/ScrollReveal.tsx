 "use client";

import React, { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";

type Props = {
  children: ReactNode;
  className?: string;
  /** stagger delay in seconds when multiple children with data-reveal-item are present */
  stagger?: number;
  y?: number;
  as?: ElementType;
};

/**
 * ScrollReveal Component
 * Generic scroll-triggered fade + rise animation.
 * Wrap any section or group of elements with [data-reveal-item].
 */
export function ScrollReveal({
  children,
  className,
  stagger = 0.08,
  y = 32,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll("[data-reveal-item]");
    const targets = items.length ? items : [el];

    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(targets, { opacity: 0, y });

      // Animate in
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [stagger, y]);

  const Component = Tag as React.ElementType;

  return React.createElement(
    Component,
    {
      ref,
      className,
    },
    children
  );
}
