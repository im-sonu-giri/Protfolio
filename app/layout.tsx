import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

// Inter covers body text. Display headings use a local "Neue Montreal"-style
// stack declared in globals.css — swap in the real font file under
// /public/fonts if you have a license for it; Inter is the safe fallback.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://sonugiri.com.np";

// Person + WebSite structured data — helps search engines and AI answer
// engines (Perplexity, Google AI Overviews, etc.) resolve "Sonu Giri" as an
// entity and surface role/links directly, without adding any visible UI.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sonu Giri",
  url: SITE_URL,
  jobTitle: "Full-Stack Developer",
  description:
    "Full-stack developer in Nepal building scalable production systems, clean architecture, and exploring LLMs and RAG.",
  sameAs: [
    "https://github.com/im-sonu-giri",
    "https://www.linkedin.com/in/sonu-giri-3b99302a6/",
  ],
  knowsAbout: [
    "Full-Stack Development",
    "System Design",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "LLM & RAG",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sonu Giri — Full-Stack Developer & System Designer",
    template: "%s — Sonu Giri",
  },
  description:
    "Full-stack developer in Nepal building scalable production systems, clean architecture, and exploring LLMs + RAG for intelligent applications.",
  keywords: [
    "Sonu Giri",
    "Full-Stack Developer Nepal",
    "System Design",
    "Next.js Developer",
    "LLM RAG Developer",
  ],
  authors: [{ name: "Sonu Giri", url: SITE_URL }],
  openGraph: {
    title: "Sonu Giri — Full-Stack Developer & System Designer",
    description:
      "Full-stack developer in Nepal building scalable production systems, clean architecture, and exploring LLMs + RAG.",
    url: SITE_URL,
    siteName: "Sonu Giri",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonu Giri — Full-Stack Developer & System Designer",
    description:
      "Full-stack developer in Nepal building scalable production systems and exploring LLMs + RAG.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="bg-black text-white-off">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
