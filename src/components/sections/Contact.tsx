import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin, ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { profile } from '../../data/profile'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: profile.location,
    href: null,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/ibs13',
    href: profile.github,
    external: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ibrahimhs13',
    href: profile.linkedin,
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Open to full-time software engineering roles in Denmark"
        />

        <div className="max-w-2xl mx-auto">
          {/* CTA text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              I am currently open to new opportunities. Whether you have a role in mind, want
              to discuss a project, or simply want to connect — feel free to reach out.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium transition-colors text-base"
            >
              Say Hello
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {contactItems.map(({ icon: Icon, label, value, href, external }) => {
              const inner = (
                <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-sm transition-all duration-200 group">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">{label}</p>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                      {value}
                    </p>
                  </div>
                </div>
              )

              if (href) {
                return (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                  >
                    {inner}
                  </a>
                )
              }

              return <div key={label}>{inner}</div>
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
