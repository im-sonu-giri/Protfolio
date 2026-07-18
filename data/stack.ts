export type StackCategory = {
  id: string;
  label: string;
  items: string[];
};

/**
 * Categorised reference of the tools and technologies I work with.
 * Cross-referenced from skills.ts and projects.ts — nothing here is
 * aspirational; every item has been used in a shipped project or
 * professional context.
 */
export const stack: StackCategory[] = [
  {
    id: "languages",
    label: "Languages",
    items: ["TypeScript", "Python", "JavaScript", "SQL"],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    items: ["Next.js", "React", "Django", "FastAPI", "Node.js / Express"],
  },
  {
    id: "data",
    label: "Data & Storage",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma / Drizzle"],
  },
  {
    id: "security",
    label: "Security & Auth",
    items: [
      "JWT",
      "Argon2 / bcrypt",
      "Row-Level Security",
      "Rate Limiting",
    ],
  },
  {
    id: "infra",
    label: "CI / CD & Infra",
    items: ["Docker", "GitHub Actions", "Vercel", "AWS"],
  },
  {
    id: "ai",
    label: "AI / ML",
    items: ["LangChain", "FAISS", "PyTorch", "YOLOv8"],
  },
];
