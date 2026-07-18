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
    period: "2024 — Present",
    location: "Lalitpur, Nepal",
    points: [
      "Own backend development end-to-end on a production capstone system — schema design, API contracts, and integration of multiple ML services into one FastAPI backend.",
      "Serve as time-series and integration lead: responsible for the forecasting pipeline and for making sure every model output reaches the frontend through a consistent, versioned API.",
      "Debugged a production forecasting bug that was silent for weeks — a double-differencing error was quietly destroying model accuracy until a systematic residual check caught it.",
      "Write the technical documentation the rest of the team relies on for defense and handoff — API references, data contracts, and integration diagrams.",
    ],
  },
  {
    id: "encode",
    org: "Encode Solution Pvt. Ltd.",
    role: "Web Design and Development Intern",
    period: "July 2021 — January 2022",
    location: "Nepal",
    points: [
      "Worked as a web designer and developer, building and maintaining client-facing sites end to end.",
      "Used Bootstrap and JavaScript for front-end layout and interactivity, with Python and MySQL on projects that needed a real backend and persistent data.",
      "First real exposure to working with a live database in production — where a lot of the instinct behind my current focus on schema design started.",
    ],
  },
  {
    id: "panacea",
    org: "Panacea Nepal",
    role: "Web Designer (Internship)",
    period: "April 2019 — June 2019",
    location: "Nepal",
    points: [
      "Worked as a web designer and CMS operator, maintaining and updating existing websites.",
      "Built with HTML, CSS, Bootstrap, and JavaScript — the internship that got me writing code for something other than a class assignment for the first time.",
    ],
  },
  {
    id: "ncit",
    org: "National College of Information Technology (NCIT)",
    role: "B.Sc. (Hons) Computer Science — Final Year",
    period: "2021 — 2025",
    location: "Kathmandu, Nepal",
    points: [
      "Coursework spanning data structures, database systems, distributed systems, and machine learning — the theoretical backbone behind the production systems I build outside class.",
      "Leading the backend and integration track of a multi-model capstone project spanning computer vision, time-series forecasting, and classification.",
      "Independently studied system design and QA practices beyond the curriculum — the pattern behind most of the personal projects on this site.",
    ],
  },
];
