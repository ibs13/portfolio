import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import SkillBadge from '../ui/SkillBadge'
import { projects, enterpriseProjects } from '../../data/projects'

export default function Projects() {
  const featured = projects.find((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="Personal and open-source work — all code on GitHub"
        />

        {/* Featured project */}
        {featured && (
          <div className="mb-8">
            <ProjectCard project={featured} />
          </div>
        )}

        {/* Other projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {others.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Enterprise Work */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Enterprise Work
            </h3>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-700/50">
              <Lock size={11} />
              Private / Proprietary
            </span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 max-w-2xl">
            Production applications contributed to at Beximco Pharmaceuticals Ltd. Source code is
            proprietary. See the{' '}
            <a
              href="https://github.com/ibs13/enterprise-project-case-studies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              case studies repository
            </a>{' '}
            for architecture and engineering write-ups.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {enterpriseProjects.map((ep, i) => (
              <motion.div
                key={ep.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 p-5 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200"
              >
                <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                  {ep.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  {ep.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {ep.tech.map((t) => (
                    <SkillBadge key={t} label={t} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
