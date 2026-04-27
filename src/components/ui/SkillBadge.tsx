interface Props {
  label: string
  variant?: 'default' | 'accent'
}

export default function SkillBadge({ label, variant = 'default' }: Props) {
  const styles =
    variant === 'accent'
      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50'
      : 'bg-slate-100 text-slate-700 dark:bg-slate-700/60 dark:text-slate-300 border border-slate-200 dark:border-slate-600/50'

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${styles} whitespace-nowrap`}
    >
      {label}
    </span>
  )
}
