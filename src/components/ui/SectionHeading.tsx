interface Props {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ title, subtitle, align = 'center' }: Props) {
  const alignment = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`mb-12 ${alignment}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-slate-500 dark:text-slate-400 text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-12 rounded-full bg-blue-600 dark:bg-blue-400 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  )
}
