'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import GlowButton from '@/components/ui/GlowButton';
import GradientText from '@/components/ui/GradientText';
import { useEffect, useState } from 'react';

const ROLES = [
  'Full Stack Engineer',
  'Backend Architect',
  'API Designer',
  'Systems Thinker',
];

const QUICK_FACTS = [
  { label: '10+ Products Shipped',    color: '#22D3EE' },
  { label: '15k RPS Handled',         color: '#00FF88' },
  { label: '3+ Years Production Exp', color: '#818CF8' },
  { label: 'Node.js · Next.js · TS',  color: '#FFB700' },
];

// Floating particle positions — static to avoid hydration mismatch
const PARTICLES = [
  { left: '8%',  top: '15%', delay: 0,   duration: 7 },
  { left: '15%', top: '70%', delay: 1.5, duration: 9 },
  { left: '25%', top: '40%', delay: 3,   duration: 6 },
  { left: '75%', top: '20%', delay: 0.5, duration: 8 },
  { left: '85%', top: '55%', delay: 2,   duration: 10 },
  { left: '92%', top: '80%', delay: 4,   duration: 7 },
  { left: '50%', top: '85%', delay: 1,   duration: 9 },
  { left: '60%', top: '10%', delay: 2.5, duration: 8 },
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const role = ROLES[roleIndex];
    let i = displayed.length;

    if (typing) {
      if (i < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, i + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(role.slice(0, i - 1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-command" />
      <div className="absolute inset-0 circuit-bg animate-grid-move opacity-60" />
      <div className="absolute inset-0 grid-dots" />

      {/* Floating scan beam */}
      <div className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.4), rgba(0,255,234,0.2), transparent)',
          animation: 'scan 5s linear infinite',
        }}
      />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(30,58,138,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <div key={i} className="absolute w-1 h-1 rounded-full pointer-events-none"
          style={{
            left: p.left, top: p.top,
            background: i % 3 === 0 ? '#00FFEA' : i % 3 === 1 ? '#818CF8' : '#06B6D4',
            opacity: 0.3,
            animation: `particle ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-4xl">

          {/* Status badge — recruiter magnet */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8">
            <div className="live-dot" />
            <span className="badge-neon text-xs tracking-widest">Available for Opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black text-white mb-4 leading-none"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', letterSpacing: '-0.04em' }}>
            Abhay{' '}
            <GradientText variant="hero">Gupta</GradientText>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="flex items-center gap-2 mb-6">
            <Terminal size={16} className="text-cyan-400 shrink-0" />
            <span className="font-mono text-lg text-cyan-300 tracking-tight">
              {displayed}
              <span className="inline-block w-0.5 h-5 bg-cyan-400 ml-0.5 align-middle"
                style={{ animation: 'typeCursor 1s step-end infinite' }} />
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl">
            I solve hard backend problems — <span className="text-slate-200 font-semibold">high-throughput APIs, data consistency, system design</span> — then ship a frontend that makes it usable.{' '}
            <span className="text-cyan-400 font-semibold">Everything I build handles real traffic, real load, and real users.</span>
          </motion.p>

          {/* Quick facts strip — 10-second scan */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-2 mb-10">
            {QUICK_FACTS.map((fact) => (
              <span key={fact.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold"
                style={{
                  background: `${fact.color}0D`,
                  border: `1px solid ${fact.color}33`,
                  color: fact.color,
                }}>
                {fact.label}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center gap-4 mb-12">
            <GlowButton href="#projects" size="lg">
              See My Work
            </GlowButton>
            <GlowButton href="#contact" variant="outline" size="lg">
              Hire Me
            </GlowButton>
            <a href="/resume.pdf" download
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors font-mono">
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>↓ RESUME PDF</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            className="flex items-center gap-6">
            {[
              { icon: Github,   href: 'https://github.com/abhaykrgupta', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/abhay-gupta08/', label: 'LinkedIn' },
              { icon: Mail,     href: 'mailto:you@email.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors group text-sm">
                <Icon size={18} className="group-hover:scale-110 transition-transform" />
                <span className="hidden sm:block">{label}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs font-mono text-slate-600 tracking-widest">SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={14} className="text-cyan-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
