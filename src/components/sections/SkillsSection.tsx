'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import GradientText from '@/components/ui/GradientText';

interface SkillGroup {
  category: string;
  label: string;
  color: string;
  bg: string;
  border: string;
  skills: { name: string; level: number }[];
}

const skillGroups: SkillGroup[] = [
  {
    category: '01',
    label: 'Backend',
    color: '#22D3EE',
    bg: 'rgba(34,211,238,0.06)',
    border: 'rgba(34,211,238,0.18)',
    skills: [
      { name: 'Node.js',    level: 95 },
      { name: 'Express',    level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Redis',      level: 80 },
      { name: 'REST APIs',  level: 95 },
      { name: 'GraphQL',    level: 75 },
      { name: 'WebSockets', level: 78 },
    ],
  },
  {
    category: '02',
    label: 'Frontend',
    color: '#818CF8',
    bg: 'rgba(129,140,248,0.06)',
    border: 'rgba(129,140,248,0.18)',
    skills: [
      { name: 'React',      level: 88 },
      { name: 'Next.js',    level: 90 },
      { name: 'Tailwind',   level: 85 },
      { name: 'Framer Motion', level: 70 },
      { name: 'HTML/CSS',   level: 90 },
      { name: 'JavaScript', level: 92 },
    ],
  },
  {
    category: '03',
    label: 'Infrastructure',
    color: '#00FF88',
    bg: 'rgba(0,255,136,0.06)',
    border: 'rgba(0,255,136,0.18)',
    skills: [
      { name: 'Docker',    level: 80 },
      { name: 'Linux/CLI', level: 82 },
      { name: 'Git',       level: 90 },
      { name: 'Nginx',     level: 72 },
      { name: 'AWS S3/EC2', level: 70 },
      { name: 'CI/CD',     level: 72 },
    ],
  },
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: 'rgba(30,41,59,0.8)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: `0 0 8px ${color}44`,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 100% 50%, rgba(129,140,248,0.06) 0%, transparent 55%)' }} />
      <div className="absolute inset-0 grid-fine opacity-40" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-14">
          <p className="section-label mb-3">// tech stack</p>
          <h2 className="text-h1 text-white font-bold">
            Tools &{' '}
            <GradientText variant="hero">Technologies</GradientText>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl">
            Depth over breadth. Core stack mastered, always expanding.
          </p>
        </motion.div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <GlassCard key={group.label} delay={i * 0.1} hover className="p-6">
              {/* Group header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-mono text-xs font-bold"
                  style={{ background: group.bg, border: `1px solid ${group.border}`, color: group.color }}>
                  {group.category}
                </div>
                <h3 className="text-lg font-bold text-white">{group.label}</h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} color={group.color} />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Additional tools — neon badge cloud */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-10">
          <GlassCard hover={false} className="p-6">
            <p className="text-xs font-mono text-slate-600 mb-4 tracking-widest uppercase">Also comfortable with</p>
            <div className="flex flex-wrap gap-2">
              {[
                'BullMQ', 'JWT', 'OAuth 2.0', 'Prisma', 'MongoDB', 'Jest', 'Vitest',
                'Stripe API', 'Razorpay', 'Postman', 'Figma', 'VS Code', 'PM2', 'Zod',
              ].map((tag) => (
                <span key={tag} className="badge-cyan text-xs">{tag}</span>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
