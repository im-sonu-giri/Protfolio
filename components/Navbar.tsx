"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Linkedin } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/data/site";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Morph the navbar from a full-width transparent bar into a compact,
    // bordered pill once the user has scrolled past the hero fold.
    let lastState = false;
    const onScroll = () => {
      const shrink = window.scrollY > 80;
      if (shrink === lastState) return;
      lastState = shrink;

      gsap.to(nav, {
        paddingTop: shrink ? "0.75rem" : "1.5rem",
        paddingBottom: shrink ? "0.75rem" : "1.5rem",
        backgroundColor: shrink ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0)",
        backdropFilter: shrink ? "blur(12px)" : "blur(0px)",
        borderBottomColor: shrink ? "#222222" : "rgba(0,0,0,0)",
        duration: 0.5,
        ease: "power3.out",
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent px-6 md:px-10"
      style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <a
          href={SITE_CONFIG.github}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-hover
          className="font-display text-sm tracking-tight-2 uppercase font-medium hover:text-gray-400 transition-colors"
        >
          Sonu Giri
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm transition-colors duration-300 relative group",
                    pathname === link.href ? "text-white" : "text-gray-400 hover:text-white"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-white transition-all duration-300",
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            data-cursor-hover
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-[18px] h-[18px]" />
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 w-6 z-50"
        >
          <span
            className={cn(
              "h-px w-full bg-white transition-transform duration-300 origin-center",
              open && "translate-y-[3px] rotate-45"
            )}
          />
          <span
            className={cn(
              "h-px w-full bg-white transition-transform duration-300 origin-center",
              open && "-translate-y-[3px] -rotate-45"
            )}
          />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-display text-3xl tracking-tightest"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            {link.label}
          </Link>
        ))}
        <a
          href={SITE_CONFIG.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 text-sm mt-4"
        >
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
      </div>
    </header>
  );
}
