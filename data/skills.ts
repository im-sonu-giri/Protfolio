export type SkillGroup = {
  id: string;
  title: string;
  index: string; // section marker, e.g. "01"
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "fullstack",
    title: "Full-Stack Development",
    index: "01",
    description:
      "Comfortable owning a feature from schema to pixel — I'd rather build one thing end-to-end than hand off at the API boundary.",
    items: [
      "TypeScript",
      "Next.js / React",
      "Node.js / Express",
      "Django",
      "PostgreSQL",
      "Prisma / Drizzle ORM",
      "Redis",
      "REST & WebSocket APIs",
      "Tailwind CSS",
    ],
  },
  {
    id: "systemdesign",
    title: "System Design",
    index: "02",
    description:
      "The part of engineering I find most interesting: making the right trade-off before a single line of code is written.",
    items: [
      "Database schema & indexing strategy",
      "Row-level security & multi-tenancy",
      "Caching strategy (Redis, CDN)",
      "Queueing & background jobs",
      "API contract design",
      "Auth & session architecture",
      "Horizontal scaling patterns",
    ],
  },
  {
    id: "qa",
    title: "QA & Reliability",
    index: "03",
    description:
      "I've shipped enough silent bugs to know that testing isn't overhead — it's the fastest path to shipping confidently.",
    items: [
      "Unit & integration testing",
      "Load & concurrency testing",
      "Idempotency & retry design",
      "Manual test-case design",
      "CI-driven test gates",
      "Root-cause debugging under production constraints",
    ],
  },
  {
    id: "llm",
    title: "LLM & RAG",
    index: "04",
    description:
      "The newest edge of what I build — currently focused on making retrieval and generation actually reliable, not just demo-able.",
    items: [
      "Retrieval-augmented generation architecture",
      "Vector search & embeddings",
      "Multilingual embedding models",
      "Prompt engineering for structured output",
      "FAISS",
      "Evaluating LLM output for factual grounding",
    ],
  },
];
