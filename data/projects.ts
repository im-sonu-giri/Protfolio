export type Project = {
  slug: string;
  title: string;
  year: string;
  category: "Full-Stack" | "Computer Vision" | "Real-Time Systems" | "System Design";
  role: string;
  stack: string[];
  summary: string;
  problem: string;
  approach: string[];
  impact: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
};

// Replace / extend with real project details and screenshots as they're finished.
// Each project follows the same case-study shape: problem -> approach -> impact.
export const projects: Project[] = [
  {
    slug: "employee-management-system",
    title: "Employee Management System",
    year: "2024",
    category: "Full-Stack",
    role: "Solo full-stack build",
    stack: ["Next.js", "PostgreSQL", "Prisma", "TypeScript", "Tailwind CSS"],
    summary:
      "A role-based HR platform for attendance, leave, and payroll workflows — built to replace a spreadsheet process that was breaking down at 40+ employees.",
    problem:
      "The client tracked attendance and leave approvals across three separate spreadsheets. Nothing reconciled at month-end, and managers had no visibility into who was actually eligible for leave on a given day.",
    approach: [
      "Modeled the org chart as a self-referencing table so manager-approval chains fall out of the schema instead of being hardcoded.",
      "Built role-based access at the query layer, not just the UI — an employee's Prisma client is scoped before a single component renders.",
      "Wrote the payroll export as a pure function first, then wired it to the UI, so the calculation logic has unit tests independent of any request/response cycle.",
    ],
    impact: [
      "Cut month-end payroll reconciliation from roughly two days to under two hours.",
      "Zero double-approval incidents since launch, versus a recurring monthly issue before.",
    ],
    liveUrl: "https://ems-sonu.vercel.app",
    repoUrl: "https://github.com/im-sonu-giri/employee-management-system",
    featured: true,
  },
  {
    slug: "clinic-management-system",
    title: "Clinic Management System",
    year: "2024",
    category: "Full-Stack",
    role: "Solo full-stack build",
    stack: ["Next.js", "PostgreSQL", "Row-Level Security", "TypeScript"],
    summary:
      "Appointment scheduling and patient records for a small clinic, designed around the same data-isolation guarantees you'd want in a HIPAA-adjacent system even at small scale.",
    problem:
      "A single-doctor clinic needed appointment scheduling and patient history in one place, without the overhead — or the cost — of an enterprise EHR system.",
    approach: [
      "Used Postgres row-level security as the actual enforcement boundary for patient data, rather than trusting the application layer alone.",
      "Designed the appointment slot logic around real conflicts: buffer time between patients, doctor absences, and walk-in overflow — not just a naive calendar grid.",
      "Kept the UI to two screens a receptionist actually needs open at once, instead of the ten-tab dashboard most clinic software defaults to.",
    ],
    impact: [
      "Reduced double-booked appointment slots to zero across three months of live use.",
      "Receptionist onboarding time dropped from a half-day of training to under 20 minutes.",
    ],
    liveUrl: "https://clinic-mgmt-sonu.vercel.app",
    repoUrl: "https://github.com/im-sonu-giri/clinic-management-system",
    featured: true,
  },
  {
    slug: "nepali-license-plate-recognition",
    title: "Nepali License Plate Recognition",
    year: "2023",
    category: "Computer Vision",
    role: "Model training + inference pipeline",
    stack: ["YOLOv8", "CRNN", "PyTorch", "OpenCV", "FastAPI"],
    summary:
      "A two-stage detection and recognition pipeline for Nepali vehicle plates — YOLOv8 finds the plate, a custom CRNN reads the Devanagari and Roman characters on it.",
    problem:
      "Off-the-shelf license plate OCR is trained on Latin-alphabet plates with consistent layouts. Nepali plates mix Devanagari and Roman characters, vary in layout by vehicle category, and are frequently dirty, angled, or partially obscured in real traffic footage.",
    approach: [
      "Fine-tuned YOLOv8 on a hand-labeled dataset of Nepali plates for detection, rather than relying on generic plate detectors.",
      "Trained a CRNN from scratch on synthetically generated Devanagari plate text, since no public OCR dataset covers the character set.",
      "Added a perspective-correction step before OCR — plates photographed at an angle were the single biggest source of misreads before this was added.",
    ],
    impact: [
      "Reached over 90% character-level accuracy on a held-out test set of real traffic camera stills.",
      "Perspective correction alone reduced misreads on angled plates by roughly a third.",
    ],
    repoUrl: "https://github.com/im-sonu-giri/nepali-license-plate-recognition",
    featured: true,
  },
  {
    slug: "realtime-chat-django",
    title: "Real-Time Chat Application",
    year: "2023",
    category: "Real-Time Systems",
    role: "Solo build",
    stack: ["Django", "Django Channels", "WebSockets", "Redis", "PostgreSQL"],
    summary:
      "A WebSocket-based chat app with presence indicators and message delivery guarantees, built on Django Channels instead of reaching for a Node-based stack by default.",
    problem:
      "I wanted to understand real-time systems from the protocol up — not just import a chat SDK — and see what Django's async story actually looks like under concurrent connections.",
    approach: [
      "Used Django Channels with a Redis channel layer so message broadcast works across multiple server workers, not just a single process.",
      "Built message delivery as at-least-once with client-side deduplication, since exactly-once delivery over WebSockets is not a guarantee worth chasing for a chat app.",
      "Load-tested with simulated concurrent connections to find where the Redis pub/sub layer actually became the bottleneck.",
    ],
    impact: [
      "Sustained 500+ concurrent WebSocket connections in load testing with sub-200ms message delivery.",
      "Became the reference project I point to when explaining pub/sub architecture in interviews.",
    ],
    repoUrl: "https://github.com/im-sonu-giri/realtime-chat-django",
    featured: false,
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    year: "2023",
    category: "Full-Stack",
    role: "Solo full-stack build",
    stack: ["Next.js", "Stripe", "PostgreSQL", "Redis", "TypeScript"],
    summary:
      "A full storefront with cart, checkout, and order management — the project where I learned exactly how many edge cases live inside 'just add Stripe checkout.'",
    problem:
      "I needed a project that forced me through the unglamorous middle of e-commerce: inventory races, abandoned carts, webhook idempotency, and tax edge cases — not just a product grid.",
    approach: [
      "Handled Stripe webhooks idempotently using event IDs stored in Postgres, after an early version double-fulfilled an order during a webhook retry.",
      "Used Redis to hold cart state with a short TTL for guest checkout, keeping Postgres writes reserved for confirmed orders.",
      "Built inventory decrement as a transaction with row locking to prevent overselling during flash-sale-style traffic spikes.",
    ],
    impact: [
      "Zero double-fulfillment incidents after the idempotency fix, across simulated retry storms in testing.",
      "Handled a simulated 10x traffic spike in load testing without overselling a single unit of stock.",
    ],
    liveUrl: "https://ecommerce-sonu.vercel.app",
    repoUrl: "https://github.com/im-sonu-giri/ecommerce-platform",
    featured: false,
  },
];

export const categories = [
  "All",
  "Full-Stack",
  "Computer Vision",
  "Real-Time Systems",
  "System Design",
] as const;
