'use client';

import { motion } from 'framer-motion';
import { Rocket, GitMerge, Layers, BarChart2, MessageSquare } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import GradientText from '@/components/ui/GradientText';

const reasons = [
  {
    icon: Rocket,
    headline: 'I ship. Fast.',
    body: 'Not just PRs — working features in production with real users. I\'ve taken projects from blank repo to live in under 2 weeks. Speed without cutting corners on reliability.',
    proof: '10+ production deployments',
    color: '#22D3EE',
    bg: 'rgba(34,211,238,0.06)',
    border: 'rgba(34,211,238,0.15)',
  },
  {
    icon: Layers,
    headline: 'I think in systems, not features.',
    body: 'Every decision — schema design, caching strategy, queue vs sync — is made with scale and maintenance in mind. I don\'t build things I\'d be embarrassed to hand off.',
    proof: 'Designed 3 systems still running 12+ months later',
    color: '#818CF8',
    bg: 'rgba(129,140,248,0.06)',
    border: 'rgba(129,140,248,0.15)',
  },
  {
    icon: GitMerge,
    headline: 'I own problems end-to-end.',
    body: 'Backend, frontend, deployment — I don\'t drop the ball at boundaries. When something breaks in production, I stay until it\'s fixed and the root cause is understood.',
    proof: '0 production incidents left unresolved',
    color: '#00FF88',
    bg: 'rgba(0,255,136,0.06)',
    border: 'rgba(0,255,136,0.15)',
  },
  {
    icon: BarChart2,
    headline: 'I communicate in impact, not jargon.',
    body: '"Latency dropped 13×" is more useful than "I added caching." I track the metrics that matter to the business and frame engineering wins in language that non-engineers can act on.',
    proof: 'Every project has a before/after metric',
    color: '#FFB700',
    bg: 'rgba(255,183,0,0.06)',
    border: 'rgba(255,183,0,0.15)',
  },
  {
    icon: MessageSquare,
    headline: 'I work well with others.',
    body: 'I\'ve mentored junior devs, written technical specs reviewed by PMs, and onboarded teammates onto codebases I built from scratch. I write code that humans can read.',
    proof: '2 junior devs mentored, 3 codebases handed off cleanly',
    color: '#F472B6',
    bg: 'rgba(244,114,182,0.06)',
    border: 'rgba(244,114,182,0.15)',
  },
];

export default function WhyHireMeSection() {
  return (
    <section id="why-me" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(129,140,248,0.05) 0%, transparent 60%)' }} />
      <div className="absolute inset-0 grid-fine opacity-30" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-14">
          <p className="section-label mb-3">// value proposition</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-h1 text-white font-bold">
              Why Hire{' '}
              <GradientText variant="hero">Me</GradientText>
            </h2>
            <p className="text-slate-400 max-w-xs text-sm leading-relaxed">
              The things that don&apos;t show up on a resume but matter in the first 90 days.
            </p>
          </div>
        </motion.div>

        {/* Cards — 2 col desktop, stacked mobile */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div key={r.headline}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}>
                <GlassCard hover delay={0} className="p-5 h-full">
                  {/* Icon + headline */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: r.bg, border: `1px solid ${r.border}` }}>
                      <Icon size={16} style={{ color: r.color }} />
                    </div>
                    <h3 className="text-base font-bold text-white leading-tight">{r.headline}</h3>
                  </div>

                  {/* Body */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{r.body}</p>

                  {/* Proof line */}
                  <div className="flex items-center gap-2 mt-auto">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: r.color }} />
                    <p className="text-xs font-mono font-semibold" style={{ color: r.color }}>
                      {r.proof}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}

          {/* Sixth card — CTA / recruiter shortcut */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.4 }}>
            <div className="holo-card p-5 h-full flex flex-col justify-between rounded-3xl">
              {/* Top shimmer */}
              <div className="absolute top-0 left-0 right-0 h-px rounded-t-3xl"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.6), transparent)' }} />
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="live-dot" />
                  <span className="text-xs font-mono font-semibold" style={{ color: '#00FF88', letterSpacing: '0.1em' }}>
                    ACTIVELY LOOKING
                  </span>
                </div>
                <p className="text-white font-bold text-lg leading-tight mb-2">
                  Ready to contribute from day one.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Available for full-time, contract, or consulting. I can start immediately.
                </p>
              </div>
              <a href="#contact"
                className="btn-glow mt-6 text-white text-sm font-bold px-5 py-3 rounded-xl flex items-center justify-center gap-2 w-full">
                Let&apos;s Talk →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
