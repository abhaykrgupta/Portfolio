'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { Boxes, Zap, TrendingUp, Server } from 'lucide-react';

const metrics = [
  {
    icon: Boxes,
    value: 10,
    suffix: '+',
    label: 'Projects Built',
    sublabel: 'End-to-end, production-ready',
    color: '#22D3EE',
    glow: 'rgba(34,211,238,0.15)',
  },
  {
    icon: Zap,
    value: 20,
    suffix: '+',
    label: 'APIs Designed',
    sublabel: 'REST, GraphQL & WebSocket',
    color: '#818CF8',
    glow: 'rgba(129,140,248,0.15)',
  },
  {
    icon: TrendingUp,
    value: 30,
    suffix: '%+',
    label: 'Performance Gains',
    sublabel: 'Avg. latency improvement',
    color: '#00FF88',
    glow: 'rgba(0,255,136,0.15)',
  },
  {
    icon: Server,
    value: 5,
    suffix: '+',
    label: 'Production Systems',
    sublabel: 'Live, scaled, monitored',
    color: '#FFB700',
    glow: 'rgba(255,183,0,0.15)',
  },
];

export default function MetricsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-dots opacity-50" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-12">
          <p className="section-label mb-3">// impact</p>
          <h2 className="text-h1 text-white font-bold">
            Measured in{' '}
            <span className="gradient-text">Results</span>
          </h2>
          <p className="text-slate-400 mt-3 text-body-lg">Numbers that matter to engineering teams and product orgs.</p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <GlassCard key={m.label} delay={i * 0.1} holo topGlow className="p-6 text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                  style={{ background: m.glow, border: `1px solid ${m.color}33` }}>
                  <Icon size={22} style={{ color: m.color }} />
                </div>

                {/* Counter */}
                <div className="text-4xl font-black mb-1 font-mono"
                  style={{ color: m.color, filter: `drop-shadow(0 0 12px ${m.color}66)` }}>
                  <AnimatedCounter value={m.value} suffix={m.suffix} duration={2.5} />
                </div>

                {/* Label */}
                <p className="text-slate-200 font-semibold text-sm mb-1">{m.label}</p>
                <p className="text-slate-500 text-xs">{m.sublabel}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
