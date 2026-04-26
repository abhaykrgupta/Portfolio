'use client';

import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import GradientText from '@/components/ui/GradientText';
import { experience } from '@/data/experience';

const ACCENT: Record<string, { text: string; bg: string; border: string; dot: string }> = {
  cyan:   { text: '#22D3EE', bg: 'rgba(34,211,238,0.06)',   border: 'rgba(34,211,238,0.2)',  dot: '#22D3EE' },
  green:  { text: '#00FF88', bg: 'rgba(0,255,136,0.06)',    border: 'rgba(0,255,136,0.2)',   dot: '#00FF88' },
  violet: { text: '#818CF8', bg: 'rgba(129,140,248,0.06)',  border: 'rgba(129,140,248,0.2)', dot: '#818CF8' },
};

const TYPE_LABELS: Record<string, string> = {
  'full-time': 'Full-Time',
  'freelance': 'Freelance',
  'contract':  'Contract',
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 0% 50%, rgba(30,58,138,0.08) 0%, transparent 55%)' }} />
      <div className="absolute inset-0 grid-dots opacity-30" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-14">
          <p className="section-label mb-3">// experience</p>
          <h2 className="text-h1 text-white font-bold">
            Where I&apos;ve{' '}
            <GradientText variant="hero">Worked</GradientText>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(180deg, rgba(6,182,212,0.4), rgba(6,182,212,0.1), transparent)' }} />

          <div className="space-y-6">
            {experience.map((exp, i) => {
              const c = ACCENT[exp.accentColor];
              return (
                <motion.div key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative md:pl-16">

                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 hidden md:block"
                    style={{
                      background: c.bg,
                      borderColor: c.dot,
                      boxShadow: `0 0 12px ${c.dot}66`,
                    }}
                  />

                  <GlassCard hover delay={0} className="p-6">
                    {/* Role header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: c.bg, border: `1px solid ${c.border}` }}>
                          <Briefcase size={16} style={{ color: c.text }} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                          <p className="text-slate-400 text-sm">{exp.company}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}>
                          {TYPE_LABELS[exp.type]}
                        </span>
                        <span className="text-slate-500 text-sm font-mono">{exp.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((ach) => (
                        <li key={ach} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: c.text }} />
                          <span className="text-slate-300">{ach}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-1.5 pt-4"
                      style={{ borderTop: '1px solid rgba(51,65,85,0.4)' }}>
                      {exp.stack.map((tech) => (
                        <span key={tech} className="text-xs px-2.5 py-1 rounded-lg font-mono"
                          style={{ background: 'rgba(30,41,59,0.7)', color: '#64748B', border: '1px solid rgba(51,65,85,0.5)' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
