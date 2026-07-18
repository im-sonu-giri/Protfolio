"use client";
import React, {
  useEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from "react";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type Props = {
  children: ReactNode;
  className?: string;
  /** stagger delay in seconds when multiple children with data-reveal-item are present */
  stagger?: number;
  y?: number;
  as?: ElementType;
};"use client";

import React, {
  useEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from "react";
import { gsap } from "@/lib/gsap";

type Props = {
  children: ReactNode;
  className?: string;
  /** stagger delay in seconds when multiple children with data-reveal-item are present */
  stagger?: number;
  y?: number;
  as?: ElementType;
};

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
      gsap.set(targets, { opacity: 0, y });

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

  const Component = Tag;

  return (
    <Component
      ref={ref as React.Ref<HTMLElement>}
      className={className}
    >
      {children}
    </Component>
  );
}

/**
 * Generic scroll-triggered fade + rise. Wrap any section (or a group of
 * `[data-reveal-item]` children) and it animates in once, the moment it
 * crosses ~85% up the viewport. Kept as a single reusable primitive rather
 * than re-writing the same ScrollTrigger boilerplate in every section.
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
      gsap.set(targets, { opacity: 0, y });
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
