import { motion } from 'framer-motion'
import { HiBriefcase, HiCalendar, HiExternalLink } from 'react-icons/hi'
import { experiences } from '../data/portfolio'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-slate-950">
      {/* Subtle section divider gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-blue-400 font-mono text-sm mb-2">02. what I've done</p>
          <h2 className="section-heading">Work Experience</h2>
          <p className="section-subheading">My professional journey across software development roles</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-violet-500/30 to-transparent" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-10"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-6 top-6 w-4 h-4 -translate-x-1/2 rounded-full bg-blue-500 border-2 border-slate-950 ring-2 ring-blue-500/30" />

                <div className="glass rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100 group-hover:text-blue-400 transition-colors duration-200">
                        {exp.title}
                      </h3>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium text-sm mt-1 transition-colors"
                      >
                        {exp.company}
                        <HiExternalLink size={14} />
                      </a>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                      <div className="inline-flex items-center gap-1.5 text-slate-400 text-sm">
                        <HiCalendar size={14} className="text-blue-400" />
                        {exp.period}
                      </div>
                      <div className="inline-flex items-center gap-1.5 text-slate-500 text-xs">
                        <HiBriefcase size={12} />
                        {exp.department}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/60 shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
