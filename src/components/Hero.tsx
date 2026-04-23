import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaYoutube, FaFacebook } from 'react-icons/fa'
import { HiDownload, HiArrowRight, HiChevronDown } from 'react-icons/hi'
import { personalInfo, stats } from '../data/portfolio'
import { asset } from '../utils/asset'

const socialLinks = [
  { icon: FaLinkedin, url: personalInfo.social.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: FaGithub, url: personalInfo.social.github, label: 'GitHub', color: 'hover:text-slate-200' },
  { icon: FaYoutube, url: personalInfo.social.youtube, label: 'YouTube', color: 'hover:text-red-400' },
  { icon: FaFacebook, url: personalInfo.social.facebook, label: 'Facebook', color: 'hover:text-blue-500' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-slate-950">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Gradient blobs */}
        <div
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-3xl animate-blob"
        />
        <div
          className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-2/3 left-1/3 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-blue-400 text-sm font-mono mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Available for opportunities
              </div>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none mb-4">
              <span className="text-slate-100">Ibrahim</span>
              <br />
              <span className="gradient-text">Hossain</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="text-xl sm:text-2xl text-slate-300 font-light">
                Full Stack Developer
              </span>
              <span className="hidden sm:inline text-blue-400 font-mono text-sm bg-blue-500/10 border border-blue-500/20 rounded px-2 py-0.5">
                // Copenhagen
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
              {personalInfo.bio}
            </motion.p>

            {/* Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
              {stats.map(stat => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-white font-mono">
                    {stat.value}
                    <span className="text-blue-400">{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-8">
              <a
                href={asset(personalInfo.resumeUrl)}
                download
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                <HiDownload size={18} />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-blue-400 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:-translate-y-0.5"
              >
                Get in Touch
                <HiArrowRight size={18} />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeUp} className="flex gap-3">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center bg-slate-800/80 hover:bg-slate-700 text-slate-400 ${link.color} rounded-lg transition-all duration-200 hover:-translate-y-0.5`}
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full blur-2xl opacity-20 animate-pulse" />

              {/* Gradient border + photo */}
              <div className="relative p-[3px] rounded-full bg-gradient-to-br from-blue-400 via-violet-400 to-cyan-400 animate-float">
                <div className="p-[3px] rounded-full bg-slate-950">
                  <img
                    src={asset('/img/profile.jpg')}
                    alt="Ibrahim Hossain"
                    className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Floating badge: developer tag */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-2 -right-2 sm:-right-8 glass rounded-xl px-3 py-2 text-xs font-mono text-blue-400 shadow-xl"
              >
                &lt;/developer&gt;
              </motion.div>

              {/* Floating badge: stack */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-2 -left-2 sm:-left-8 glass rounded-xl px-3 py-2 text-xs font-mono text-violet-400 shadow-xl"
              >
                React · Node.js
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-slate-600"
        >
          <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
          <HiChevronDown size={20} />
        </motion.div>
      </div>
    </section>
  )
}
