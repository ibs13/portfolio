import type { ExperienceItem, EducationItem, Project, SkillCategory, OnlineJudge, Contest } from '../types'

export const personalInfo = {
  name: 'Ibrahim Hossain',
  alias: 'Ibrahim Sabbir',
  title: 'Full Stack Developer',
  location: 'Copenhagen, Denmark',
  email: 'ibm.sabbir@gmail.com',
  bio: 'Experienced software developer with a solid background in programming, database design, and system design. Passionate about building scalable web solutions and mobile applications.',
  resumeUrl: '/ibrahim-hossain.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/ibs13/',
    github: 'https://github.com/ibs13/',
    youtube: 'https://www.youtube.com/@luckyduckfilmsanimations7977',
    facebook: 'https://www.facebook.com/ibsthe13',
  },
}

export const stats = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 3, suffix: '', label: 'Companies' },
  { value: 9, suffix: '+', label: 'Projects Built' },
  { value: 330, suffix: '+', label: 'Problems Solved' },
]

export const experiences: ExperienceItem[] = [
  {
    title: 'Assistant Coordinator (Software) - MIS',
    company: 'Transparency International Bangladesh (TIB)',
    companyUrl: 'https://www.ti-bangladesh.org/',
    department: 'Management Information System',
    period: 'December 2023 – February 2024',
    responsibilities: [
      'Developed software modules and web-based solutions for internal MIS operations',
      'Managed large datasets across 45 field offices nationwide',
      'Created SOP documentation and conducted user training sessions',
      'Maintained and secured MIS databases and access controls',
    ],
  },
  {
    title: 'Senior Full Stack Developer',
    company: 'Beximco Pharmaceuticals Limited',
    companyUrl: 'https://beximcopharma.com/',
    department: 'Multimedia',
    period: 'May 2019 – November 2023',
    responsibilities: [
      'Built and maintained web and mobile solutions across the pharmaceutical ecosystem',
      'Collaborated with UX/UI teams for end-to-end product development',
      'Led full-lifecycle Android app development from requirement gathering to deployment',
      'Performed system analysis, data modeling, and email newsletter campaigns',
      'Developed 5+ internal management modules used by hundreds of employees',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Tegra Design',
    companyUrl: 'http://tegradesign.com/',
    department: 'Development',
    period: 'March 2018 – May 2019',
    responsibilities: [
      'Developed responsive websites and web applications for various clients',
      'Handled client training, deployment, and post-launch support',
      'Conducted requirement gathering and translated business needs into technical solutions',
    ],
  },
]

export const education: EducationItem[] = [
  {
    institution: 'Pabna University of Science And Technology',
    degree: 'B.Sc Engineering in Computer Science & Engineering',
    year: '2013 – 2018',
    grade: 'CGPA: 3.0 / 4.0',
    location: 'Pabna, Bangladesh',
  },
  {
    institution: 'Govt. Shaheed Bulbul College',
    degree: 'Higher Secondary Certificate',
    year: '2012',
    grade: 'GPA: 5.0 / 5.0',
    stream: 'Science',
    location: 'Pabna, Bangladesh',
  },
  {
    institution: 'Pabna Zilla School',
    degree: 'Secondary School Certificate',
    year: '2010',
    grade: 'GPA: 5.0 / 5.0',
    stream: 'Science',
    location: 'Pabna, Bangladesh',
  },
]

export const achievements = [
  'Participated at ACM-ICPC Dhaka Regional Site — 2015',
  'Founding President at PUST Debating Society — 2017–2018',
  'Founder & Director, Lucky Duck Films & Animations — 2017–Present',
]

export const languages = [
  { name: 'Bengali', level: 'Native' },
  { name: 'English', level: 'Professional' },
]

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'C', 'C++'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'jQuery'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Meteor', 'Django', 'Laravel', 'RESTful API', 'AJAX'],
  },
  {
    name: 'Databases',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    name: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'Bitbucket', 'npm'],
  },
  {
    name: 'CS Fundamentals',
    skills: ['Data Structures', 'Algorithms', 'OOP', 'SDLC', 'Agile', 'UML'],
  },
]

export const onlineJudges: OnlineJudge[] = [
  {
    name: 'UVA Online Judge',
    url: 'https://uhunt.onlinejudge.org/id/666106',
    solved: 107,
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/Ibrahim.Sabbir',
    solved: 98,
    contests: 54,
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/ibrahim_sabbir',
    solved: 80,
    contests: 16,
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/ibs13/',
    solved: 52,
  },
]

export const contests: Contest[] = [
  { name: 'ACM-ICPC Dhaka Regional Site', year: 2015 },
  { name: 'IUT 7th National ICT Fest', year: 2015 },
  { name: 'NSU Cybernauts National Programming Contest', year: 2016 },
  { name: 'Intra University Programming Contest — PUST', year: 2014 },
]

export const projects: Project[] = [
  {
    title: 'Beximco Pharma Corporate Website',
    type: 'Corporate Website',
    stack: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL'],
    description: 'Official corporate website for Beximco Pharmaceuticals, one of the largest pharma companies in Bangladesh.',
    image: '/images/bpl.jpg',
    url: 'https://beximcopharma.com/',
  },
  {
    title: 'Synovia Pharma Corporate Website',
    type: 'Corporate Website',
    stack: ['PHP', 'HTML5', 'CSS3', 'JavaScript'],
    description: 'Corporate website for Synovia Pharma, showcasing their pharmaceutical products and company information.',
    image: '/images/spp.jpg',
    url: 'https://synoviapharma.com/',
  },
  {
    title: 'Knowledge Center',
    type: 'Web Application',
    stack: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    description: 'e-Library and Room Reservation module. Worked on the Room Reservation module enabling seamless booking and management.',
    features: ['e-Library with digital resources', 'Room Reservation system', 'User management'],
    image: '/images/knowledge-center.jpg',
  },
  {
    title: 'Marketing Portal',
    type: 'Web & Mobile Application',
    stack: ['Node.js', 'Meteor', 'MongoDB'],
    description: 'Platform helping sales force and marketing teams collaborate effectively. Focused on the Rx Competition module development.',
    features: ['Action Plan management', 'e-Learning modules', 'Rx Competition tracking', 'Cancer Drug management'],
    image: '/images/markeing-portal.jpg',
  },
  {
    title: 'My BPL Hub',
    type: 'Web Application',
    stack: ['Node.js', 'React', 'Meteor', 'MongoDB'],
    description: 'Enterprise management system with 5 integrated modules. Developed the Report Management Application module.',
    features: [
      'Report Management Application',
      'Management Committee Meeting',
      'Performance Appraisal',
      'Legal Affairs Task Management',
      'Budget Control System',
    ],
    image: '/images/mybplhub.jpg',
  },
  {
    title: 'Vaccine Management System',
    type: 'Web Application',
    stack: ['Node.js', 'Meteor', 'MongoDB'],
    description: 'Comprehensive vaccine distribution and management platform with appointment scheduling and inventory tracking.',
    features: [
      'Appointment scheduling (10 persons/vial)',
      'Booth assignment system',
      'Inventory & requisition management',
      'Batch tracking & priority scaling',
    ],
    image: '/images/vms.jpg',
  },
  {
    title: 'e-Prescription System',
    type: 'Web Application',
    stack: ['Node.js', 'Meteor', 'MongoDB', 'PHP', 'MySQL'],
    description: 'Digital prescription platform for healthcare professionals with intelligent suggestion engine and patient history tracking.',
    features: [
      'Write and print prescriptions digitally',
      'Medicine/dose/symptom suggestions',
      'Patient history tracking',
    ],
    image: '/images/e-prescription.jpg',
  },
  {
    title: 'Oncology Drug Management',
    type: 'Web & Mobile Application',
    stack: ['Node.js', 'Meteor', 'MongoDB'],
    description: 'Specialized system for managing oncology drug requisitions and supply chain across hospital networks.',
    features: [
      'Patient requisition collection',
      'Sales team assignment',
      'Supply chain tracking',
      'Cycle date alerts & improvement records',
    ],
    image: '/images/oncology.jpg',
  },
  {
    title: 'BAPI Website',
    type: 'Corporate Website',
    stack: ['PHP', 'HTML5', 'CSS3', 'JavaScript'],
    description: 'Corporate website for BAPI (Bangladesh Association of Pharmaceutical Industries) providing industry information and resources.',
    image: '/images/bapi.jpg',
    url: 'http://www.bapi-bd.com/',
  },
]
