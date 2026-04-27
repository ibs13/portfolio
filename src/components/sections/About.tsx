import { motion } from 'framer-motion'
import { Briefcase, MapPin, Code2, GraduationCap } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { profile } from '../../data/profile'

const facts = [
  { icon: Briefcase, label: 'Experience', value: '5+ years' },
  { icon: MapPin, label: 'Location', value: 'Copenhagen, DK' },
  { icon: Code2, label: 'Focus', value: '.NET · React · TypeScript' },
  { icon: GraduationCap, label: 'Degree', value: 'B.Sc. CSE, PUST' },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Background, experience, and what I'm looking for"
        />

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 flex justify-center"
          >
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden ring-4 ring-blue-100 dark:ring-blue-900/40 shadow-lg">
                <img
                  src="/profile.jpg"
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative dot grid */}
              <div
                aria-hidden
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-[radial-gradient(circle,#93c5fd_1px,transparent_1px)] bg-[size:8px_8px] opacity-40 dark:opacity-20"
              />
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
              {profile.summary}
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Most of my professional work has been backend-oriented — designing REST APIs,
              modelling data schemas, building authentication flows, and wiring up production
              deployments. I am equally comfortable on the frontend, particularly with React
              and TypeScript. What I enjoy most is owning the full pipeline: from database
              schema to a deployed, tested UI.
            </p>

            {/* Quick facts grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {facts.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1.5 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm"
                >
                  <Icon size={18} className="text-blue-600 dark:text-blue-400" />
                  <span className="text-xs text-slate-500 dark:text-slate-400">{label}</span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-white leading-tight">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
