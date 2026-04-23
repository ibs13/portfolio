import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiPhp, SiPython, SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiMysql,
  SiTailwindcss, SiBootstrap, SiJquery, SiDjango, SiLaravel,
  SiGit, SiGithub, SiBitbucket, SiCplusplus,
} from 'react-icons/si'
import { HiCode, HiExternalLink } from 'react-icons/hi'
import { skillCategories, onlineJudges, contests } from '../data/portfolio'

const techIcons = [
  { icon: SiReact, label: 'React', color: '#61DAFB' },
  { icon: SiNodedotjs, label: 'Node.js', color: '#339933' },
  { icon: SiNextdotjs, label: 'Next.js', color: '#ffffff' },
  { icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
  { icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
  { icon: SiPhp, label: 'PHP', color: '#777BB4' },
  { icon: SiPython, label: 'Python', color: '#3776AB' },
  { icon: SiCplusplus, label: 'C++', color: '#00599C' },
  { icon: SiHtml5, label: 'HTML5', color: '#E34F26' },
  { icon: SiCss, label: 'CSS3', color: '#1572B6' },
  { icon: SiTailwindcss, label: 'Tailwind', color: '#06B6D4' },
  { icon: SiBootstrap, label: 'Bootstrap', color: '#7952B3' },
  { icon: SiJquery, label: 'jQuery', color: '#0769AD' },
  { icon: SiDjango, label: 'Django', color: '#092E20' },
  { icon: SiLaravel, label: 'Laravel', color: '#FF2D20' },
  { icon: SiMysql, label: 'MySQL', color: '#4479A1' },
  { icon: SiMongodb, label: 'MongoDB', color: '#47A248' },
  { icon: SiGit, label: 'Git', color: '#F05032' },
  { icon: SiGithub, label: 'GitHub', color: '#ffffff' },
  { icon: SiBitbucket, label: 'Bitbucket', color: '#0052CC' },
]

const categoryColors: Record<string, string> = {
  'Programming Languages': 'blue',
  'Frontend': 'cyan',
  'Backend': 'violet',
  'Databases': 'green',
  'Tools & DevOps': 'orange',
  'CS Fundamentals': 'pink',
}

const colorMap: Record<string, { bg: string; border: string; text: string; chip: string }> = {
  blue:   { bg: 'bg-blue-500/10',   border: 'border-blue-500/20',   text: 'text-blue-400',   chip: 'bg-blue-500/10 text-blue-300 border-blue-500/20' },
  cyan:   { bg: 'bg-cyan-500/10',   border: 'border-cyan-500/20',   text: 'text-cyan-400',   chip: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20' },
  violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/20', text: 'text-violet-400', chip: 'bg-violet-500/10 text-violet-300 border-violet-500/20' },
  green:  { bg: 'bg-green-500/10',  border: 'border-green-500/20',  text: 'text-green-400',  chip: 'bg-green-500/10 text-green-300 border-green-500/20' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400', chip: 'bg-orange-500/10 text-orange-300 border-orange-500/20' },
  pink:   { bg: 'bg-pink-500/10',   border: 'border-pink-500/20',   text: 'text-pink-400',   chip: 'bg-pink-500/10 text-pink-300 border-pink-500/20' },
}

export default function Skills() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  return (
    <section id="skills" className="relative py-24 bg-slate-950">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-blue-400 font-mono text-sm mb-2">04. what I know</p>
          <h2 className="section-heading">Skills & Expertise</h2>
          <p className="section-subheading">Technologies and tools I work with</p>
        </motion.div>

        {/* Tech icon strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 mb-10"
        >
          <div className="flex flex-wrap justify-center gap-6">
            {techIcons.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="relative flex flex-col items-center gap-1.5 cursor-default"
                onMouseEnter={() => setHoveredIcon(label)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 hover:scale-110 transition-transform duration-200"
                  style={{ boxShadow: hoveredIcon === label ? `0 0 14px ${color}40` : undefined }}
                >
                  <Icon size={22} style={{ color: hoveredIcon === label ? color : '#64748b' }} className="transition-colors duration-200" />
                </div>
                <AnimatePresence>
                  {hoveredIcon === label && (
                    <motion.span
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="absolute -bottom-6 text-xs text-slate-400 whitespace-nowrap font-mono"
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skill category grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
        >
          {skillCategories.map((category) => {
            const colorKey = categoryColors[category.name] || 'blue'
            const colors = colorMap[colorKey]
            return (
              <motion.div
                key={category.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className={`glass rounded-2xl p-5 hover:${colors.border} transition-all duration-300 group`}
              >
                <div className={`inline-flex items-center gap-2 ${colors.bg} ${colors.border} border rounded-lg px-3 py-1.5 mb-4`}>
                  <HiCode className={colors.text} size={14} />
                  <span className={`text-xs font-mono font-medium ${colors.text}`}>{category.name}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span
                      key={skill}
                      className={`text-xs border rounded-full px-2.5 py-1 ${colors.chip}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Problem Solving Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
            <span className="text-green-400 font-mono text-sm">&gt;_</span>
            Competitive Programming
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {onlineJudges.map((judge, i) => (
              <motion.a
                key={judge.name}
                href={judge.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="glass rounded-2xl p-5 hover:border-green-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-slate-500 font-medium">{judge.name}</span>
                  <HiExternalLink size={14} className="text-slate-600 group-hover:text-green-400 transition-colors" />
                </div>
                <div className="text-3xl font-bold font-mono text-white">
                  {judge.solved}
                  <span className="text-green-400 text-lg">+</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">problems solved</div>
                {judge.contests && (
                  <div className="text-xs text-slate-600 mt-1">{judge.contests} contests</div>
                )}
              </motion.a>
            ))}
          </div>

          <div className="glass rounded-2xl p-6">
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">Contest Participation</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {contests.map((contest, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                  <span className="text-slate-300">{contest.name}</span>
                  <span className="ml-auto text-slate-500 font-mono text-xs">{contest.year}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
