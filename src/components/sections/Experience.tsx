import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { experiences } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey"
          align="left"
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            aria-hidden
            className="absolute left-5 top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div
                  aria-hidden
                  className="hidden sm:flex absolute left-0 top-5 w-10 h-10 rounded-full items-center justify-center bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-sm"
                >
                  <Briefcase size={14} className="text-blue-600 dark:text-blue-400" />
                </div>

                {/* Card */}
                <div className="bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 p-5 sm:p-6 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1">
                        <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                          {exp.company}
                        </span>
                        <span className="text-slate-400 dark:text-slate-500 text-sm">·</span>
                        <span className="text-slate-500 dark:text-slate-400 text-sm">
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 whitespace-nowrap">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-700/50">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
