import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageShell({ children }: Props) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {children}
    </div>
  )
}
