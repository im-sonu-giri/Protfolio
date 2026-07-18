export type ExperienceEntry = {
  id: string;
  org: string;
  role: string;
  period: string;
  location: string;
  points: string[];
};

// Ordered newest-first. The Timeline component renders these top to bottom.
export const experience: ExperienceEntry[] = [
  {
    id: "geektech",
    org: "Geek Tech Solutions Pvt. Ltd.",
    role: "Software Developer Intern",
    period: "May 2026 — Present",
    location: "Lalitpur, Nepal",
    points: [
      "Contributing to the development of a production-grade POS system as a Full-Stack Developer.",
      "Building and maintaining scalable backend APIs with NestJS and PostgreSQL, integrating frontend features where needed.",
      "Deepening practical knowledge of database design, schema modeling, query optimization, indexing, authentication, authorization, application security, and backend performance in a live production environment.",
      "Collaborating with senior engineers through code reviews, debugging, and clean Git workflows grounded in software engineering best practices.",
    ],
  },
  {
    id: "encode",
    org: "Encode Solution Pvt. Ltd.",
    role: "Web Development Intern",
    period: "July 2021 — January 2022",
    location: "Pokhara, Nepal",
    points: [
      "Built responsive websites using HTML, CSS, Bootstrap, JavaScript, Python, and MySQL.",
      "Learned the fundamentals of full-stack web development, including frontend integration, backend logic, REST APIs, relational databases, and client-server architecture.",
      "Shipped dynamic web applications while gaining hands-on experience with responsive design, CRUD operations, debugging, and collaborative development workflows.",
    ],
  },
  {
    id: "panacea",
    org: "Panacea Nepal",
    role: "Web Design Intern",
    period: "April 2019 — June 2019",
    location: "Pokhara, Nepal",
    points: [
      "Began my professional journey learning the fundamentals of modern web development.",
      "Built responsive interfaces with HTML, CSS, Bootstrap, and JavaScript while maintaining and updating live company websites.",
      "Developed a strong foundation in responsive design, UI implementation, and frontend best practices.",
    ],
  },
];
