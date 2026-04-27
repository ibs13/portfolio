import { motion } from "framer-motion";
import { GraduationCap, Trophy, ExternalLink } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { competitiveProgramming } from "../../data/skills";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education &amp; Problem Solving" />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Degree */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                <GraduationCap
                  size={18}
                  className="text-blue-600 dark:text-blue-400"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-1">
              <p className="text-base font-semibold text-slate-900 dark:text-white">
                B.Sc. Engineering in Computer Science &amp; Engineering
              </p>
              <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                Pabna University of Science and Technology
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">2018</p>
            </div>
          </motion.div>

          {/* Competitive programming */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center">
                <Trophy
                  size={18}
                  className="text-amber-600 dark:text-amber-400"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Competitive Programming
              </h3>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
              {competitiveProgramming.summary}
            </p>

            {/* Contest list */}
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500 mb-2">
                Contests
              </p>
              <ul className="space-y-1">
                {competitiveProgramming.contests.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Profile links 
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500 mb-2">
                Profiles
              </p>
              <div className="grid grid-cols-2 gap-2">
                {competitiveProgramming.profiles.map((p) => (
                  <a
                    key={p.label}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-1 px-3 py-2 rounded-lg text-xs border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span className="font-medium truncate">{p.label}</span>
                    <ExternalLink size={11} className="shrink-0 opacity-60" />
                  </a>
                ))}
              </div>
            <div>*/}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
