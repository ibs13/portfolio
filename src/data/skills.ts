export type SkillCategory = {
  name: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite', 'Next.js'],
  },
  {
    name: 'Backend',
    skills: [
      'ASP.NET Core Web API',
      'C#',
      'Node.js',
      'PHP',
      'Laravel',
      'REST APIs',
      'JWT Authentication',
    ],
  },
  {
    name: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Entity Framework Core'],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      'Git',
      'GitHub',
      'GitHub Actions',
      'Docker',
      'Railway',
      'Netlify',
      'Vercel',
      'Postman',
    ],
  },
  {
    name: 'Engineering',
    skills: [
      'Clean Architecture',
      'API Design',
      'Role-Based Access Control',
      'Authentication & Security',
      'CI/CD',
      'Deployment',
      'Debugging',
      'Technical Documentation',
    ],
  },
]

export const competitiveProgramming = {
  summary:
    'Competitive programming background with ACM-ICPC participation and 300+ combined problems solved across major platforms.',
  contests: [
    'ACM-ICPC Dhaka Regional Site 2015',
    'IUT 7th National ICT Fest 2015',
    'NSU Cybernauts National Programming Contest 2016',
    'Intra University Programming Contest, PUST 2014',
  ],
  profiles: [
    { label: 'UVA Online Judge', url: 'https://uhunt.onlinejudge.org/id/666106', solved: '107 problems' },
    { label: 'Codeforces', url: 'https://codeforces.com/profile/Ibrahim.Sabbir', solved: '98 problems, 54 contests' },
    { label: 'HackerRank', url: 'https://www.hackerrank.com/ibrahim_sabbir', solved: '80 problems' },
    { label: 'LeetCode', url: 'https://leetcode.com/ibs13/', solved: '52 problems' },
  ],
}
