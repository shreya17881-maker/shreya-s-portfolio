export const profile = {
  name: 'Shreya Dandare',
  email: 'dandareshreya06@gmail.com',
  phone: '+91 7720962506',
  linkedin: 'https://www.linkedin.com/in/shreya-dandare-330981322/',
  github: 'https://github.com/dandareshreya06',
  location: 'Mumbai, India',
}

export const skills = [
  { group: 'Languages', items: ['Java', 'Python', 'JavaScript', 'C', 'C++', 'SQL'] },
  { group: 'Web & Backend', items: ['Flask', 'REST APIs', 'HTML', 'CSS', 'JavaScript'] },
  { group: 'Databases & Tools', items: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'PythonAnywhere'] },
  { group: 'Core', items: ['DSA', 'OOP', 'Database Management', 'Machine Learning basics'] },
]

export const experience = [
  {
    org: 'Wohlig',
    role: 'GenAI Intern',
    when: 'Sep 2026 – Present',
    stack: ['Python', 'LLM APIs', 'Prompt Engineering', 'Backend'],
    points: [
      'Built LLM-powered features with Python and APIs.',
      'Designed and refined prompts and application logic to improve the accuracy and relevance of AI-generated output.',
      'Worked with the engineering team to integrate GenAI into backend workflows and ship working features.',
    ],
  },
]

export const education = [
  {
    org: 'Shah and Anchor Kutchhi Engineering College',
    role: 'B.Tech, Electronics and Computer Science',
    when: '2023 – 2027',
    points: ['CGPA 9/10 up to the 5th semester.', 'Chembur, Mumbai.'],
  },
  {
    org: 'Bhavans B.P. Vidya Mandir',
    role: 'HSC, Class XII',
    when: '2021 – 2023',
    points: ['77.4%'],
  },
  {
    org: 'Central India Public School',
    role: 'SSC, Class X',
    when: '',
    points: ['86.6%'],
  },
]

export const projects = [
  {
    title: 'StudySync',
    tag: 'Student productivity platform',
    stack: ['Python', 'Flask', 'MongoDB', 'JavaScript'],
    blurb:
      'A full-stack platform where students organise tasks, plan study schedules and track productivity from one dashboard. Includes subject-wise progress, weekly analytics, a Pomodoro timer and quick notes.',
    live: 'https://shreya17881-maker.github.io/studysync/',
  },
  {
    title: 'Online Exam Management System',
    tag: 'Admin and candidate portals',
    stack: ['Python', 'Flask', 'MySQL'],
    blurb:
      'Cross-platform exam system for creating, scheduling and evaluating tests. Separate admin and candidate modules, a MySQL layer for credentials and results, and automatic evaluation with instant feedback.',
  },
  {
    title: 'Queue Management System',
    tag: 'Real-time web app',
    stack: ['Flask', 'HTML', 'CSS', 'JavaScript'],
    blurb:
      'Organises and controls customer queues to reduce congestion. Shows live queue status and estimated waiting time to both administrators and customers.',
  },
  {
    title: 'AI-Based Recommendation System',
    tag: 'Machine learning',
    stack: ['Python', 'Similarity metrics'],
    blurb:
      'Suggests personalised items using custom similarity logic over user behaviour. Combines collaborative and content-based filtering, with preprocessing and accuracy/relevance evaluation.',
  },
]
