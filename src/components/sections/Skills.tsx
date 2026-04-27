import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import SkillBadge from '../ui/SkillBadge'
import { skillCategories } from '../../data/skills'

const categoryIcons: Record<string, string> = {
  Frontend: '🖥',
  Backend: '⚙️',
  Database: '🗄',
  'DevOps & Tools': '🛠',
  Engineering: '🏗',
}

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and practices I work with"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 p-5 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl" aria-hidden>
                  {categoryIcons[cat.name] ?? '💡'}
                </span>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  {cat.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
