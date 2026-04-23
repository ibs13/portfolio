import { FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiTypescript } from 'react-icons/si'
import { personalInfo } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800 bg-slate-950 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()}{' '}
            <span className="text-slate-300 font-medium">{personalInfo.name}</span>
            {' '}· All rights reserved
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
            Built with
            <FaReact size={14} className="text-cyan-400" title="React" />
            <SiTypescript size={12} className="text-blue-400" title="TypeScript" />
            <SiTailwindcss size={14} className="text-cyan-500" title="Tailwind CSS" />
          </div>
        </div>
      </div>
    </footer>
  )
}
