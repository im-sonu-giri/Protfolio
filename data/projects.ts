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
      summary: "A comprehensive role-based HR platform featuring attendance tracking, leave management, payroll processing, and interactive dashboards. Built to replace error-prone manual spreadsheets with a secure, scalable, and maintainable system that improves HR efficiency.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      repoUrl: "https://github.com/im-sonu-giri/Employee-management-system",
      liveUrl: "https://employee-management-system-git-main-sonugiri1410-4831s-projects.vercel.app",
      featured: true,
    },
    {
      slug: "clinic-management-system",
      title: "Clinic Management System",
      category: "FULL-STACK",
      summary: "Full-stack clinic management solution with patient registration, appointment scheduling, medical records, and separate dashboards for doctors and administrators. Designed with strong data isolation, role-based access, and modern UX to streamline clinic operations.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      repoUrl: "https://github.com/im-sonu-giri/Clinic_management_system",
      liveUrls: [
        { label: "User Portal", url: "https://clinic-management-system-frontend-4d6p.onrender.com" },
        { label: "Admin Panel", url: "https://clinic-management-system-3.onrender.com" }
      ],
      featured: true,
    },
    {
      slug: "nepali-license-plate-recognition",
      title: "Nepali License Plate Recognition",
      category: "AI/ML",
      summary: "End-to-end computer vision pipeline for Nepali vehicle license plates. Uses YOLOv8 for accurate plate detection and a custom CRNN model for Devanagari character recognition. Built with FastAPI backend and React frontend to handle real-world Nepali number plates effectively.",
      tech: ["Python", "YOLOv8", "CRNN", "FastAPI", "React"],
      repoUrl: "https://github.com/im-sonu-giri/-Nepali_License_Plate_Recognition",
      featured: true,
    },
    {
      slug: "realtime-chat-application",
      title: "Real-Time Chat Application",
      category: "REAL-TIME SYSTEMS",
      summary: "Scalable real-time messaging platform built with Django Channels and WebSockets. Supports instant messaging, online presence detection, group chats, and asynchronous handling — demonstrating deep understanding of real-time system architecture and state management.",
      tech: ["Django", "Django Channels", "WebSockets", "PostgreSQL"],
      repoUrl: "https://github.com/im-sonu-giri/chat-application",
    },
    {
      slug: "ecommerce-platform",
      title: "E-Commerce Platform",
      category: "FULL-STACK",
      summary: "Complete e-commerce solution featuring product catalog, advanced filtering, shopping cart, secure checkout, and order management system. Implemented with Django REST Framework backend and React frontend, focusing on performance, user experience, and scalability.",
      tech: ["Django REST Framework", "React", "PostgreSQL"],
      repoUrl: "https://github.com/im-sonu-giri/E-commerce-website",
    }
];
