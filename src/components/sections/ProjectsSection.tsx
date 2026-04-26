'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Zap } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import GradientText from '@/components/ui/GradientText';
import { projects, type Project } from '@/data/projects';

const ACCENT_COLORS: Record<Project['accentColor'], { text: string; bg: string; border: string }> = {
  cyan:   { text: '#22D3EE', bg: 'rgba(34,211,238,0.08)',  border: 'rgba(34,211,238,0.22)' },
  violet: { text: '#818CF8', bg: 'rgba(129,140,248,0.08)', border: 'rgba(129,140,248,0.22)' },
  green:  { text: '#00FF88', bg: 'rgba(0,255,136,0.08)',   border: 'rgba(0,255,136,0.22)' },
  amber:  { text: '#FFB700', bg: 'rgba(255,183,0,0.08)',   border: 'rgba(255,183,0,0.22)' },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const c = ACCENT_COLORS[project.accentColor];

  return (
    <GlassCard delay={index * 0.1} neon hover className="flex flex-col h-full group overflow-hidden">
      {/* Featured banner */}
      {project.featured && (
        <div className="flex items-center gap-2 px-6 py-2.5"
          style={{ background: `${c.bg}`, borderBottom: `1px solid ${c.border}` }}>
          <Zap size={12} style={{ color: c.text }} />
          <span className="text-xs font-bold tracking-widest uppercase font-mono" style={{ color: c.text }}>
            Featured Project
          </span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 pr-3">
            <span className="cmd-tag mb-1.5 block">
              {project.featured ? '★ Top Pick' : `Project ${String(index + 1).padStart(2, '0')}`}
            </span>
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
              {project.title}
            </h3>
            <p className="text-slate-500 text-xs mt-1 leading-relaxed">{project.tagline}</p>
          </div>
          <div className="flex gap-1 shrink-0">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all hover:bg-slate-800/60 hover:text-cyan-400"
                style={{ color: 'rgba(148,163,184,0.5)' }}
                title="View source">
                <Github size={15} />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg transition-all hover:bg-slate-800/60 hover:text-cyan-400"
                style={{ color: 'rgba(148,163,184,0.5)' }}
                title="Live demo">
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        {/* ── METRICS STRIP — the first thing a recruiter sees ── */}
        <div className="grid grid-cols-3 gap-2 mb-5 mt-1">
          {project.metrics.map((m) => (
            <div key={m.label} className="rounded-xl p-3 text-center"
              style={{ background: c.bg, border: `1px solid ${c.border}` }}>
              <p className="font-black font-mono text-lg leading-none mb-0.5" style={{ color: c.text }}>{m.value}</p>
              <p className="text-slate-400 text-xs leading-tight">{m.sub}</p>
              <p className="text-slate-600 text-xs font-mono mt-0.5" style={{ fontSize: '0.6rem', letterSpacing: '0.05em' }}>{m.label.toUpperCase()}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-gradient mb-4" />

        {/* Problem */}
        <div className="mb-3">
          <p className="text-xs font-mono font-semibold tracking-widest text-slate-600 mb-1 uppercase">Problem</p>
          <p className="text-slate-400 text-sm leading-relaxed">{project.problem}</p>
        </div>

        {/* Solution */}
        <div className="mb-5">
          <p className="text-xs font-mono font-semibold tracking-widest text-slate-600 mb-1 uppercase">What I Built</p>
          <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
        </div>

        {/* Tech stack — pushed to bottom */}
        <div className="mt-auto flex flex-wrap gap-1.5 pt-4"
          style={{ borderTop: '1px solid rgba(51,65,85,0.35)' }}>
          {project.stack.map((tech) => (
            <span key={tech} className="text-xs px-2.5 py-1 rounded-lg font-mono"
              style={{ background: 'rgba(30,41,59,0.7)', color: '#64748B', border: '1px solid rgba(51,65,85,0.5)' }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.05) 0%, transparent 60%)' }} />
      <div className="absolute inset-0 grid-fine opacity-40" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-14">
          <p className="section-label mb-3">// selected work</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-h1 text-white font-bold">
              Things I&apos;ve{' '}
              <GradientText variant="hero">Built</GradientText>
            </h2>
            <p className="text-slate-400 max-w-xs text-sm leading-relaxed">
              Each project has a real problem, a real solution, and measurable impact.
            </p>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* More projects CTA */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="mt-10 text-center">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline text-sm px-6 py-3 rounded-xl font-semibold">
            <Github size={16} />
            More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
