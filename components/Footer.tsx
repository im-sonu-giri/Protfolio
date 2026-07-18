import Link from "next/link";
import { SITE_CONFIG } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 px-6 md:px-10 py-10 mt-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <p className="font-display text-2xl tracking-tightest mb-2">
            Let&apos;s build something.
          </p>
          <Link
            href={`mailto:${SITE_CONFIG.email}`}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            {SITE_CONFIG.email}
          </Link>
        </div>

        <div className="flex gap-6 text-sm text-gray-400">
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span>© {new Date().getFullYear()} Sonu Giri</span>
        </div>
      </div>
    </footer>
  );
}
