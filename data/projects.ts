export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  liveUrls?: { label: string; url: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "employee-management-system",
    title: "Employee Management System",
    category: "FULL-STACK",
    summary:
      "A role-based HR platform for attendance, leave, payroll, and dashboards. Built to replace unreliable spreadsheet workflows with a secure, scalable system.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    repoUrl: "https://github.com/im-sonu-giri/Employee-management-system",
    liveUrl:
      "https://employee-management-system-git-main-sonugiri1410-4831s-projects.vercel.app",
    featured: true,
  },
  {
    slug: "clinic-management-system",
    title: "Clinic Management System",
    category: "FULL-STACK",
    summary:
      "Complete clinic management system with patient records, appointment scheduling, and doctor dashboards. Designed with strong data isolation and user-friendly interfaces.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    repoUrl: "https://github.com/im-sonu-giri/Clinic_management_system",
    liveUrls: [
      {
        label: "User Portal",
        url: "https://clinic-management-system-frontend-4d6p.onrender.com",
      },
      {
        label: "Admin Panel",
        url: "https://clinic-management-system-3.onrender.com",
      },
    ],
    featured: true,
  },
  {
    slug: "nepali-license-plate-recognition",
    title: "Nepali License Plate Recognition",
    category: "COMPUTER VISION",
    summary:
      "End-to-end pipeline for detecting and recognizing Nepali Devanagari license plates using YOLOv8 for detection and custom CRNN OCR.",
    tech: ["Python", "YOLOv8", "CRNN", "FastAPI", "React"],
    repoUrl:
      "https://github.com/im-sonu-giri/-Nepali_License_Plate_Recognition",
    featured: true,
  },
  {
    slug: "realtime-chat-application",
    title: "Real-Time Chat Application",
    category: "REAL-TIME SYSTEMS",
    summary:
      "Scalable real-time chat platform with WebSockets, presence detection, and group messaging built using Django Channels.",
    tech: ["Django", "Django Channels", "WebSockets", "PostgreSQL"],
    repoUrl: "https://github.com/im-sonu-giri/chat-application",
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "FULL-STACK",
    summary:
      "Full-featured e-commerce store with product catalog, shopping cart, checkout, and order management.",
    tech: ["Django REST Framework", "React", "PostgreSQL"],
    repoUrl: "https://github.com/im-sonu-giri/E-commerce-website",
  },
];
