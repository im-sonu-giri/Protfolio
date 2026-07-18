"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Next.js re-mounts `template.tsx` on every navigation (unlike layout.tsx,
 * which persists). That makes it the right place for a page-enter transition
 * without needing a router-events library — this runs exactly once per route
 * change, automatically.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );
    window.scrollTo({ top: 0 });
  }, []);

  return <div ref={ref}>{children}</div>;
}
