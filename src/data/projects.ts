export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string | null;
  highlights: string[];
  featured: boolean;
};

export type EnterpriseProject = {
  title: string;
  description: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "Voting Platform",
    description:
      'Production-deployed full-stack election system. ASP.NET Core Web API backend, React/TypeScript frontend, PostgreSQL database — hosted on Railway and Netlify with a Dockerised backend and GitHub Actions CI/CD pipeline. Covers the complete voting lifecycle with role-based access control and a secure, auditable voting flow.',
    tech: [
      "ASP.NET Core Web API",
      "React",
      "TypeScript",
      "PostgreSQL",
      "JWT",
      "Docker",
      "GitHub Actions",
      "Railway",
      "Netlify",
    ],
    github: "https://github.com/ibs13/voting-platform",
    demo: "https://votingplatform2026.netlify.app/",
    highlights: [
      "Role-based authentication (admin / voter) with JWT",
      "Email OTP login — no passwords stored for voters",
      "Admin dashboard for candidate and voter management",
      "CSV bulk import for voter registration",
      "Secure voting flow with vote integrity checks",
      "Protected result publishing controlled by admin",
      "PostgreSQL on Railway, frontend on Netlify",
      "Dockerised backend with CI/CD via GitHub Actions",
    ],
    featured: true,
  },
  {
    title: "Enterprise Project Case Studies",
    description:
      "Written case studies of enterprise applications contributed to at Beximco Pharmaceuticals — documenting architecture decisions, technology choices, and key engineering challenges without exposing private source code or confidential data.",
    tech: ["Architecture Write-ups", "Case Studies"],
    github: "https://github.com/ibs13/enterprise-project-case-studies",
    demo: null,
    highlights: [],
    featured: false,
  },
  {
    title: "Job Tracker",
    description:
      "React application for tracking job applications through their full lifecycle. Uses custom hooks and localStorage for client-side persistence — no backend required.",
    tech: ["React", "JavaScript", "Vite", "Tailwind CSS"],
    github: "https://github.com/ibs13/Job-Tracker",
    demo: null,
    highlights: [],
    featured: false,
  },
  {
    title: "Kanban Board",
    description:
      "Task management board with column-based task organisation. Built with React and localStorage for a simple, dependency-free workflow tool.",
    tech: ["React", "JavaScript", "TailwindCSS"],
    github: "https://github.com/ibs13/Kanban-board",
    demo: null,
    highlights: [],
    featured: false,
  },
  {
    title: "Expense Tracker",
    description:
      "Personal finance tracker for logging income and expenses with live balance calculation. Clean single-page interface with no external dependencies.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/ibs13/Expense-Tracker",
    demo: null,
    highlights: [],
    featured: false,
  },
];

export const enterpriseProjects: EnterpriseProject[] = [
  {
    title: "e-Prescription Application",
    description:
      "Clinical prescription writing tool with medicine suggestions, dosage tracking, and patient history management for medical professionals.",
    tech: ["PHP", "MySQL", "JavaScript", "jQuery", "Bootstrap", "CKEditor"],
  },
  {
    title: "Marketing Portal",
    description:
      "Internal sales management portal with Rx competition module for the pharmaceutical marketing division.",
    tech: ["Node.js", "Meteor", "MongoDB"],
  },
  {
    title: "Knowledge Center",
    description:
      "Internal knowledge management and room reservation platform used across the organisation.",
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "My BPL Hub",
    description:
      "Multi-module employee hub including report management, built to consolidate five internal modules into one platform.",
    tech: ["Node.js", "React", "Meteor", "MongoDB"],
  },
  {
    title: "Vaccine Management System",
    description:
      "Appointment scheduling, inventory management, requisition workflows, and batch tracking for vaccine administration.",
    tech: ["Full Stack Web"],
  },
  {
    title: "Oncology Drug Management",
    description:
      "Patient drug requisition, supply tracking, and cycle alert system for the oncology department.",
    tech: ["Full Stack Web"],
  },
  {
    title: "Corporate Websites",
    description:
      "Developed and maintained beximcopharma.com, synoviapharma.com, and bapi-bd.com — public-facing pharmaceutical brand websites.",
    tech: ["HTML", "CSS", "JavaScript", "CMS"],
  },
];
