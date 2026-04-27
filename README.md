# Ibrahim Hossain – Portfolio

[![Deploy Portfolio](https://github.com/ibs13/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/ibs13/portfolio/actions/workflows/deploy.yml)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwind-css&logoColor=white)

A modern personal portfolio website for **Ibrahim Hossain**, a Full-Stack Software Engineer based in Copenhagen, Denmark. The site presents my software engineering experience, featured projects, technical skills, professional background, resume, and contact links in a clean recruiter-friendly format.

**Live Site:** https://ibs13.github.io/portfolio/

## About

This portfolio was rebuilt from an older static HTML/CSS/JavaScript website into a modern React, TypeScript, Vite, and Tailwind CSS application. It is designed to support my software engineering job search and highlight my current focus on full-stack web development, backend architecture, production-ready UI, authentication flows, deployment, and CI/CD.

The content focuses on:

- Full-stack software engineering experience
- ASP.NET Core, React, TypeScript, PostgreSQL, and clean API development
- Enterprise application experience from Beximco Pharmaceuticals Ltd.
- Public portfolio projects, especially the Voting Platform
- Professional case studies for private enterprise projects
- Resume, GitHub, LinkedIn, and contact information

## Featured Project Focus

The portfolio highlights the **Voting Platform** as the main featured project. It is a full-stack election management platform built with ASP.NET Core Web API, React, TypeScript, PostgreSQL, JWT authentication, email OTP, Docker, GitHub Actions, Railway, and Netlify.

Voting Platform links:

- **Live Demo:** https://votingplatform2026.netlify.app/
- **Repository:** https://github.com/ibs13/voting-platform
- **Backend:** https://voting-platform-production.up.railway.app/

## Tech Stack

- **React 18** – component-based frontend UI
- **TypeScript** – typed JavaScript for safer development
- **Vite** – fast development server and production build tooling
- **Tailwind CSS** – utility-first styling with responsive design and dark mode support
- **Framer Motion** – subtle UI animations
- **Lucide React** – clean icon system
- **GitHub Actions** – automated GitHub Pages deployment
- **GitHub Pages** – static hosting

## Features

- Modern responsive portfolio layout
- Dark/light theme support
- Recruiter-friendly hero section
- About, experience, projects, skills, education, and contact sections
- Featured project cards with live and GitHub links
- Resume PDF link from the public folder
- Data-driven content structure
- SEO and Open Graph support
- GitHub Pages deployment workflow

## Getting Started

Clone the repository:

```bash
git clone https://github.com/ibs13/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The production output is generated in the `dist/` folder.

## Deployment

This project is deployed to GitHub Pages using GitHub Actions.

Deployment workflow:

```text
.github/workflows/deploy.yml
```

The workflow runs automatically when changes are pushed to the `main` branch. It installs dependencies, builds the Vite project, uploads the `dist/` folder as a GitHub Pages artifact, and deploys it.

Because this portfolio is hosted under a repository sub-path, the Vite config must include:

```ts
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
});
```

Live URL:

```text
https://ibs13.github.io/portfolio/
```

## Project Structure

```text
src/
  components/
    layout/
      Navbar.tsx
      Footer.tsx
      PageShell.tsx
    sections/
      Hero.tsx
      About.tsx
      Experience.tsx
      Projects.tsx
      Skills.tsx
      Education.tsx
      Contact.tsx
    ui/
      Button.tsx
      SectionHeading.tsx
      ProjectCard.tsx
      SkillBadge.tsx
      ThemeToggle.tsx
  data/
    profile.ts
    experience.ts
    projects.ts
    skills.ts
  App.tsx
  main.tsx
  index.css
public/
  favicon.svg
  profile.jpg
  ibrahim-hossain.pdf
```

## Content Management

Most personal content is stored inside `src/data/` so copy can be updated without changing component logic.

Important files:

- `src/data/profile.ts` – name, title, summary, contact links, resume path
- `src/data/experience.ts` – professional experience
- `src/data/projects.ts` – featured projects and enterprise work
- `src/data/skills.ts` – technical skills and categories

## Public Assets

Public assets are stored in the `public/` folder:

- `profile.jpg` – profile image
- `ibrahim-hossain.pdf` – resume PDF
- `favicon.svg` – site favicon

For GitHub Pages compatibility, public asset links should use Vite's base URL handling, for example:

```ts
`${import.meta.env.BASE_URL}profile.jpg`
```

## Useful Commands

```bash
npm run dev       # Start local development server
npm run build     # Build for production
npm run preview   # Preview production build locally
```

## Links

- **Portfolio:** https://ibs13.github.io/portfolio/
- **GitHub:** https://github.com/ibs13
- **LinkedIn:** https://www.linkedin.com/in/ibrahimhs13
- **Voting Platform:** https://github.com/ibs13/voting-platform

## License

This portfolio is a personal project. Reuse of the structure is allowed for learning purposes, but the personal content, resume, profile image, and project descriptions belong to Ibrahim Hossain.
