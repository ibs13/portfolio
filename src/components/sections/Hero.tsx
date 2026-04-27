import { motion } from 'framer-motion'
import { Github, Linkedin, MapPin, Download, ArrowRight } from 'lucide-react'
import { profile } from '../../data/profile'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f030_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f030_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b40_1px,transparent_1px),linear-gradient(to_bottom,#1e293b40_1px,transparent_1px)] bg-[size:48px_48px]"
      />
      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 dark:bg-blue-500/8 blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center"
      >
        {/* Status + location row */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-700/50">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to work
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            <MapPin size={13} className="text-blue-500" />
            {profile.location}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
        >
          {profile.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={item}
          className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6"
        >
          {profile.title}
        </motion.p>

        {/* Headline */}
        <motion.p
          variants={item}
          className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {profile.headline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium transition-colors"
          >
            View Projects
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors"
          >
            Contact Me
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white font-medium transition-colors"
          >
            <Download size={16} />
            Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex items-center justify-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Github size={18} />
            <span className="font-medium">GitHub</span>
          </a>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Linkedin size={18} />
            <span className="font-medium">LinkedIn</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-slate-400 dark:text-slate-500">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent dark:from-slate-600" />
      </motion.div>
    </section>
  )
}
