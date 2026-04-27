import { Github, ExternalLink, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import SkillBadge from './SkillBadge'
import type { Project } from '../../data/projects'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const { title, description, tech, github, demo, highlights, featured } = project

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-blue-200 dark:border-blue-700/50 bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-800/80 p-6 sm:p-8 shadow-sm"
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: title + description + highlights */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-3 mb-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-600 text-white">
                Featured
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{description}</p>

            {highlights.length > 0 && (
              <ul className="space-y-2 mb-6">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={15} className="text-blue-500 mt-0.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              {tech.map((t) => (
                <SkillBadge key={t} label={t} variant="accent" />
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <Github size={15} />
                GitHub
              </a>
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-sm font-medium text-white transition-colors"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 p-5 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200"
    >
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 flex-1">
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tech.map((t) => (
          <SkillBadge key={t} label={t} />
        ))}
      </div>
      <div className="flex gap-3 mt-auto">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <Github size={14} />
          GitHub
        </a>
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ExternalLink size={14} />
            Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}
