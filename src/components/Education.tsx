import { motion } from 'framer-motion'
import { HiAcademicCap, HiStar, HiGlobe } from 'react-icons/hi'
import { education, achievements, languages } from '../data/portfolio'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Education() {
  return (
    <section id="education" className="relative py-24 bg-slate-950">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-blue-400 font-mono text-sm mb-2">03. where I've learned</p>
          <h2 className="section-heading">Education</h2>
          <p className="section-subheading">Academic background and key achievements</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Education cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="glass rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0 group-hover:bg-violet-500/20 transition-colors">
                    <HiAcademicCap className="text-violet-400" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <div>
                        <h3 className="font-semibold text-slate-100 group-hover:text-violet-400 transition-colors">
                          {edu.institution}
                        </h3>
                        <p className="text-slate-300 text-sm mt-0.5">{edu.degree}</p>
                        {edu.stream && (
                          <span className="text-xs text-slate-500">{edu.stream}</span>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-slate-400 text-sm">{edu.year}</div>
                        <div className="text-blue-400 text-xs font-mono font-medium mt-0.5">{edu.grade}</div>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-slate-500">{edu.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side: Languages + extra info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Languages card */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <HiGlobe className="text-cyan-400" size={18} />
                <h3 className="font-semibold text-slate-200 text-sm uppercase tracking-wider">Languages</h3>
              </div>
              <div className="space-y-3">
                {languages.map(lang => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <span className="text-slate-300 text-sm">{lang.name}</span>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-2 py-0.5">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Field of study tags */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-slate-200 text-sm uppercase tracking-wider mb-4">Focus Areas</h3>
              <div className="flex flex-wrap gap-2">
                {['Computer Science', 'Software Engineering', 'Algorithms', 'Database Systems', 'OOP'].map(tag => (
                  <span
                    key={tag}
                    className="text-xs text-slate-400 bg-slate-800 border border-slate-700 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
            <HiStar className="text-yellow-400" />
            Key Achievements
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass rounded-xl p-4 hover:border-yellow-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-0.5 shrink-0">★</span>
                  <p className="text-slate-300 text-sm leading-relaxed">{achievement}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
