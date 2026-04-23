const base = import.meta.env.BASE_URL

export const asset = (path: string): string => {
  const p = path.startsWith('/') ? path.slice(1) : path
  return `${base}${p}`
}
