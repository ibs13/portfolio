import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaYoutube, FaFacebook } from 'react-icons/fa'
import { HiMail, HiLocationMarker, HiExternalLink } from 'react-icons/hi'
import { personalInfo } from '../data/portfolio'

const socialLinks = [
  { icon: FaLinkedin, url: personalInfo.social.linkedin, label: 'LinkedIn', color: '#0A66C2', description: 'Connect professionally' },
  { icon: FaGithub, url: personalInfo.social.github, label: 'GitHub', color: '#ffffff', description: 'View my code' },
  { icon: FaYoutube, url: personalInfo.social.youtube, label: 'YouTube', color: '#FF0000', description: 'Lucky Duck Films' },
  { icon: FaFacebook, url: personalInfo.social.facebook, label: 'Facebook', color: '#1877F2', description: 'Stay connected' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-blue-400 font-mono text-sm mb-2">06. what's next</p>
          <h2 className="section-heading">Get in Touch</h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            I'm currently open to new opportunities. Whether you have a project in mind, a question,
            or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-4 mb-12 text-left"
        >
          <motion.a
            variants={itemVariants}
            href={`mailto:${personalInfo.email}`}
            className="glass rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <HiMail className="text-blue-400" size={22} />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Email me at</p>
                <p className="text-slate-200 font-medium group-hover:text-blue-400 transition-colors">
                  {personalInfo.email}
                </p>
              </div>
            </div>
          </motion.a>

          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                <HiLocationMarker className="text-violet-400" size={22} />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Based in</p>
                <p className="text-slate-200 font-medium">{personalInfo.location}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm text-slate-500 mb-6">Or find me on</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {socialLinks.map(link => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="glass rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-slate-500/50 transition-colors duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ backgroundColor: `${link.color}15` }}
                >
                  <link.icon size={20} style={{ color: link.color }} />
                </div>
                <div className="text-center">
                  <div className="text-slate-200 text-sm font-medium flex items-center gap-1 justify-center">
                    {link.label}
                    <HiExternalLink size={11} className="text-slate-500 group-hover:text-slate-400" />
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{link.description}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA email button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 border border-blue-500/50 hover:border-blue-400 text-blue-400 hover:text-blue-300 px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5"
          >
            <HiMail size={18} />
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  )
}
