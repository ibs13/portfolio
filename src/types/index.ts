export interface ExperienceItem {
  title: string
  company: string
  companyUrl: string
  department: string
  period: string
  responsibilities: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  year: string
  grade: string
  stream?: string
  location: string
}

export interface Project {
  title: string
  type: string
  stack: string[]
  description: string
  features?: string[]
  image: string
  url?: string
}

export interface SkillCategory {
  name: string
  skills: string[]
}

export interface OnlineJudge {
  name: string
  url: string
  solved: number
  contests?: number
}

export interface Contest {
  name: string
  year: number
}
