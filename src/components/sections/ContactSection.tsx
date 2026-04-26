'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Instagram, Copy, CheckCheck, ArrowUp } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import GlowButton from '@/components/ui/GlowButton';
import GradientText from '@/components/ui/GradientText';
import { useState } from 'react';

const EMAIL = 'you@email.com'; // ← replace with your real email

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    handle: '@abhaykrgupta',
    href: 'https://github.com/abhaykrgupta',
    color: '#E2E8F0',
    bg: 'rgba(226,232,240,0.06)',
    border: 'rgba(226,232,240,0.12)',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'abhay-gupta08',
    href: 'https://www.linkedin.com/in/abhay-gupta08/',
    color: '#60A5FA',
    bg: 'rgba(96,165,250,0.06)',
    border: 'rgba(96,165,250,0.18)',
  },
  {
    icon: Twitter,
    label: 'Twitter / X',
    handle: '@Abhay91637463',
    href: 'https://x.com/Abhay91637463',
    color: '#22D3EE',
    bg: 'rgba(34,211,238,0.06)',
    border: 'rgba(34,211,238,0.18)',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    handle: '@abhays122',
    href: 'https://www.instagram.com/abhays122/',
    color: '#F472B6',
    bg: 'rgba(244,114,182,0.06)',
    border: 'rgba(244,114,182,0.18)',
  },
];

const footerNav = [
  { label: 'About',      href: '#about' },
  { label: 'Why Me',     href: '#why-me' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-command" />
        <div className="absolute inset-0 circuit-bg opacity-40" />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(6,182,212,0.08) 0%, transparent 60%)' }} />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-center mb-14">
            <p className="section-label mb-3">// contact</p>
            <h2 className="text-h1 text-white font-bold mb-4">
              Let&apos;s Build Something{' '}
              <GradientText variant="hero">Great</GradientText>
            </h2>
            <p className="text-slate-400 text-body-lg max-w-2xl mx-auto">
              Whether you need a backend engineer, a full-stack developer, or a technical co-founder —
              I&apos;m open to the right opportunity. Let&apos;s talk.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {/* Main contact card */}
            <GlassCard holo topGlow className="p-8 mb-6" hover={false}>
              {/* Availability banner */}
              <div className="flex items-center justify-between mb-8 pb-6"
                style={{ borderBottom: '1px solid rgba(6,182,212,0.12)' }}>
                <div className="flex items-center gap-3">
                  <div className="live-dot" />
                  <div>
                    <p className="text-white font-semibold">Available for work</p>
                    <p className="text-slate-500 text-xs">Full-time · Contract · Freelance</p>
                  </div>
                </div>
                <span className="badge-neon text-xs">Open to Roles</span>
              </div>

              {/* Email block */}
              <div className="mb-8">
                <p className="text-xs font-mono text-slate-600 mb-3 tracking-widest uppercase">Best way to reach me</p>
                <div className="flex items-center justify-between p-4 rounded-xl flex-wrap gap-3"
                  style={{ background: 'rgba(6,182,212,0.05)', border: '1px solid rgba(6,182,212,0.15)' }}>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-cyan-400" />
                    <span className="text-white font-mono">{EMAIL}</span>
                  </div>
                  <button onClick={copyEmail}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                    style={{
                      background: copied ? 'rgba(16,185,129,0.1)' : 'rgba(6,182,212,0.1)',
                      border: `1px solid ${copied ? 'rgba(16,185,129,0.3)' : 'rgba(6,182,212,0.25)'}`,
                      color: copied ? '#10B981' : '#22D3EE',
                    }}>
                    {copied ? <CheckCheck size={14} /> : <Copy size={14} />}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <GlowButton href={`mailto:${EMAIL}`} size="lg" className="flex-1 justify-center">
                  <Mail size={18} />
                  Send Email
                </GlowButton>
                <GlowButton href="https://www.linkedin.com/in/abhay-gupta08/" variant="outline" size="lg" className="flex-1 justify-center">
                  <Linkedin size={18} />
                  LinkedIn
                </GlowButton>
              </div>

              {/* Social links — all 4 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-3 rounded-xl transition-all hover:-translate-y-1 text-center"
                      style={{ background: s.bg, border: `1px solid ${s.border}` }}>
                      <Icon size={18} style={{ color: s.color }} />
                      <div>
                        <p className="text-xs font-semibold text-slate-200">{s.label}</p>
                        <p className="text-xs text-slate-600 font-mono">{s.handle}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </GlassCard>

            {/* Response time note */}
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="text-center text-slate-600 text-sm font-mono">
              Response time: usually within 24h · Timezone: IST (UTC+5:30)
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── EXPANDED FOOTER ── */}
      <footer className="relative overflow-hidden"
        style={{ borderTop: '1px solid rgba(6,182,212,0.12)' }}>

        {/* Neon top edge glow */}
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.5), rgba(0,255,234,0.3), rgba(6,182,212,0.5), transparent)' }} />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.04) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 grid-dots opacity-30" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-14 pb-8">

          {/* Top row — brand + nav + social */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

            {/* Brand column */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-white text-sm"
                  style={{ background: 'linear-gradient(135deg, #06B6D4, #2563EB)', boxShadow: '0 0 16px rgba(6,182,212,0.4)' }}>
                  AG
                </div>
                <span className="text-white font-bold text-lg">Abhay Gupta</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Full Stack Engineer building scalable systems and production-grade applications.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="live-dot" />
                <span className="text-xs font-mono" style={{ color: '#00FF88' }}>Open to opportunities</span>
              </div>
            </div>

            {/* Nav column */}
            <div>
              <p className="text-xs font-mono font-semibold tracking-widest text-slate-600 uppercase mb-4">Navigation</p>
              <ul className="space-y-2.5">
                {footerNav.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2 group">
                      <span className="w-3 h-px transition-all group-hover:w-5"
                        style={{ background: 'rgba(6,182,212,0.5)' }} />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social column */}
            <div>
              <p className="text-xs font-mono font-semibold tracking-widest text-slate-600 uppercase mb-4">Find Me Online</p>
              <ul className="space-y-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <li key={s.label}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-3 group transition-all">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all group-hover:-translate-y-0.5"
                          style={{ background: s.bg, border: `1px solid ${s.border}` }}>
                          <Icon size={14} style={{ color: s.color }} />
                        </div>
                        <div>
                          <p className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">{s.label}</p>
                          <p className="text-slate-600 text-xs font-mono">{s.handle}</p>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="divider-gradient mb-6" />

          {/* Bottom row — copyright + back to top */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()}{' '}
              <span className="text-slate-400 font-medium">Abhay Gupta</span>
              {' '}· Built with{' '}
              <span className="text-cyan-400">Next.js</span> &amp; Tailwind CSS
            </p>

            <button onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:-translate-y-1 group"
              style={{
                background: 'rgba(6,182,212,0.06)',
                border: '1px solid rgba(6,182,212,0.18)',
                color: '#22D3EE',
              }}>
              <ArrowUp size={14} className="group-hover:scale-110 transition-transform" />
              Back to top
            </button>
          </div>

        </div>
      </footer>
    </>
  );
}
