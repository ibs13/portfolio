# Ibrahim Hossain – Portfolio

Personal portfolio website for Ibrahim Hossain, Full-Stack Software Engineer based in Copenhagen, Denmark.

**Live:** https://ibs13.github.io/portfolio/

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** – build tooling
- **Tailwind CSS** – utility-first styling with dark mode support
- **Framer Motion** – subtle scroll-triggered animations
- **Lucide React** – icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build    # TypeScript check + Vite production build
npm run preview  # Preview production build locally
```

Output goes to `dist/`.

## Deployment

### GitHub Pages

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your GitHub Pages branch.

Using `vite.config.ts`, set `base` to your repo name if deploying to a sub-path:

```ts
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
```

### Netlify / Vercel

Connect the repository and set:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

## Project Structure

```
src/
  components/
    layout/         Navbar, Footer, PageShell
    sections/       Hero, About, Experience, Projects, Skills, Education, Contact
    ui/             Button, SectionHeading, ProjectCard, SkillBadge, ThemeToggle
  data/
    profile.ts      Name, title, email, links, summary
    experience.ts   Work history
    projects.ts     Open-source and enterprise projects
    skills.ts       Skill categories + competitive programming
  App.tsx
  main.tsx
  index.css
public/
  profile.jpg       Profile photo
  ibrahim-hossain.pdf  Resume
  favicon.svg
```

## Customisation

All personal content lives in `src/data/`. Edit those files to update any copy without touching component logic.
