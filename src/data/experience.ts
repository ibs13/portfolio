export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: 'Folks ApS',
    role: 'IT Consultant – WordPress Website Maintenance',
    location: 'Copenhagen, Denmark',
    period: 'Apr 2024 – Aug 2024',
    current: false,
    bullets: [
      'Maintained and updated corporate WordPress websites, ensuring content accuracy and visual consistency.',
      'Diagnosed and resolved plugin conflicts, theme issues, and performance bottlenecks.',
      'Implemented on-page SEO improvements and page-speed optimisations.',
      'Coordinated with stakeholders to translate business requirements into concrete website changes.',
    ],
  },
  {
    company: 'Transparency International Bangladesh (TIB)',
    role: 'Assistant Coordinator (Software) – MIS',
    location: 'Dhaka, Bangladesh',
    period: 'Dec 2023 – Feb 2024',
    current: false,
    bullets: [
      'Delivered software modules for monitoring and evaluation workflows used across 45 field office locations (short-term contract engagement).',
      'Built web-based data collection tools and real-time reporting dashboards to support transparency and accountability programmes.',
      'Managed large datasets and generated analytical reports consumed by programme stakeholders.',
      'Provided technical training and ongoing support to field office staff during the rollout.',
    ],
  },
  {
    company: "Beximco Pharmaceuticals Limited",
    role: "Senior Full Stack Developer",
    location: "Dhaka, Bangladesh",
    period: "May 2019 – Nov 2023",
    current: false,
    bullets: [
      'Designed and delivered 7+ production web applications over 4.5 years, including an e-prescription system, a marketing portal, a knowledge management platform, a vaccine management system, and an oncology drug management tool.',
      'Owned end-to-end feature development — from requirements and architecture through testing, deployment, and post-launch support — with full SDLC responsibility.',
      'Worked directly with medical professionals and sales teams to define product requirements and validate clinical accuracy before release.',
      'Built and maintained three corporate pharmaceutical websites (beximcopharma.com, synoviapharma.com, bapi-bd.com) serving a broad external audience.',
      'Produced technical documentation and delivered cross-functional training and debugging support to non-technical stakeholders.',
    ],
  },
  {
    company: "Tegra Design",
    role: "Full Stack Developer",
    location: "Dhaka, Bangladesh",
    period: "Mar 2018 – May 2019",
    current: false,
    bullets: [
      "Built responsive client websites and web applications from design to production deployment.",
      "Gathered and translated client requirements into functional specifications and working software.",
      "Deployed applications to production servers and provided post-launch maintenance.",
      "Delivered technical training to junior team members on CMS workflows and web development practices.",
    ],
  },
];
