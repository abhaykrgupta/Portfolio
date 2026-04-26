export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'full-time' | 'freelance' | 'contract';
  description: string;
  achievements: string[];
  stack: string[];
  accentColor: 'cyan' | 'violet' | 'green';
}

export const experience: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Full Stack Engineer',
    company: 'Tech Startup',
    period: '2023 – Present',
    type: 'full-time',
    description: 'Core engineer on a SaaS platform serving 10k+ users. Own the backend architecture and contribute heavily to the Next.js frontend.',
    achievements: [
      'Reduced API response time by 40% via Redis caching layer',
      'Designed multi-tenant architecture supporting 50+ enterprise clients',
      'Led migration from REST to GraphQL — cut over-fetching by 35%',
      'Mentored 2 junior developers on system design and code quality',
    ],
    stack: ['Node.js', 'Next.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    accentColor: 'cyan',
  },
  {
    id: 'exp-2',
    role: 'Backend Developer',
    company: 'Product Company',
    period: '2022 – 2023',
    type: 'full-time',
    description: 'Built and scaled backend services for a B2C mobile application with 100k+ active users.',
    achievements: [
      'Architected event-driven notification system handling 500k daily events',
      'Optimized critical database queries — 10x performance improvement',
      'Built admin dashboard used daily by 30+ operations staff',
      'Implemented robust error tracking and alerting from scratch',
    ],
    stack: ['Node.js', 'Express', 'MongoDB', 'BullMQ', 'React', 'TypeScript'],
    accentColor: 'green',
  },
  {
    id: 'exp-3',
    role: 'Freelance Developer',
    company: 'Multiple Clients',
    period: '2021 – 2022',
    type: 'freelance',
    description: 'Delivered full-stack web applications for clients across fintech, e-commerce, and SaaS verticals.',
    achievements: [
      'Delivered 6 production projects with 100% on-time rate',
      'Built custom CMS and inventory management tools',
      'Integrated payment gateways (Stripe, Razorpay) across 3 projects',
      'Sole developer on an MVP that raised pre-seed funding',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Next.js'],
    accentColor: 'violet',
  },
];
