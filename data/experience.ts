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
      "Contributing to the development of a  POS system as a Full-Stack Developer.",
      "Building and maintaining scalable backend APIs using NestJS and PostgreSQL while integrating frontend features when required.",
      "Continuously learning database design, schema modeling, query optimization, indexing, authentication, authorization, application security, and backend performance optimization in a real production environment.",
      "Collaborating with senior engineers, participating in code reviews, debugging issues, and following clean architecture, Git workflows, and software engineering best practices.",
    ],
  },
  {
    id: "encode",
    org: "Encode Solution Pvt. Ltd.",
    role: "Web Development Intern",
    period: "July 2021 — January 2022",
    location: "pokhara,Nepal",
    points: [
      "Built responsive websites using HTML, CSS, Bootstrap, JavaScript, Python, and MySQL.",
      "Learned the fundamentals of full-stack web development, including frontend development, backend integration, REST APIs, relational databases, and client-server architecture.",
      "Developed dynamic web applications while gaining practical experience in responsive design, CRUD operations, debugging, and collaborative development workflows.",
    ],
  },
  {
    id: "panacea",
    org: "Panacea Nepal",
    role: "Web Design Intern",
    period: "April 2019 — June 2019",
    location: "Pokhara,Nepal",
    points: [
      "Started my professional journey by learning the fundamentals of modern web development.",
      "Built responsive interfaces using HTML, CSS, Bootstrap, and JavaScript while maintaining and updating company websites.",
      "Developed a strong foundation in responsive design, UI implementation, and frontend development best practices.",
    ],
  },
];
