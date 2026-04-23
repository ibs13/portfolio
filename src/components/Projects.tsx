import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiExternalLink, HiCode, HiX } from 'react-icons/hi'
import { projects } from '../data/portfolio'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null)

  const selectedProject = selected !== null ? projects[selected] : null

  return (
    <section id="projects" className="relative py-24 bg-slate-950">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-blue-400 font-mono text-sm mb-2">05. what I've built</p>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading">A selection of applications and platforms I've developed</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              onClick={() => setSelected(index)}
              className="glass rounded-2xl overflow-hidden cursor-pointer group hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.classList.add('flex', 'items-center', 'justify-center')
                      const fallback = document.createElement('div')
                      fallback.className = 'text-slate-600 text-4xl'
                      fallback.textContent = '⬜'
                      parent.appendChild(fallback)
                    }
                  }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs text-white font-medium">Click to view details →</span>
                </div>
                {/* Type badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-xs bg-slate-950/70 backdrop-blur-sm text-slate-300 border border-slate-700/50 rounded-full px-2 py-0.5">
                    {project.type}
                  </span>
                </div>
                {project.url && (
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="w-7 h-7 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm rounded-lg text-slate-300 hover:text-blue-400 transition-colors"
                    >
                      <HiExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map(tech => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-xs font-mono text-slate-500 bg-slate-800 rounded-full px-2 py-0.5">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-x-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 top-1/2 -translate-y-1/2 sm:w-[600px] max-h-[85vh] overflow-y-auto glass rounded-2xl z-50"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden rounded-t-2xl bg-slate-800">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs text-slate-500 font-mono">{selectedProject.type}</span>
                    <h3 className="text-xl font-bold text-slate-100 mt-0.5">{selectedProject.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    {selectedProject.url && (
                      <a
                        href={selectedProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 glass rounded-lg text-slate-400 hover:text-blue-400 transition-colors"
                      >
                        <HiExternalLink size={16} />
                      </a>
                    )}
                    <button
                      onClick={() => setSelected(null)}
                      className="p-2 glass rounded-lg text-slate-400 hover:text-slate-200 transition-colors"
                    >
                      <HiX size={16} />
                    </button>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-5">{selectedProject.description}</p>

                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <HiCode size={14} /> Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map(tech => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
