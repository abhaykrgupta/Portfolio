'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Why Me',     href: '#why-me' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled
          ? 'rgba(10,15,30,0.92)'
          : 'rgba(10,15,30,0.5)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? '1px solid rgba(6,182,212,0.15)'
          : '1px solid transparent',
        transition: 'background 0.4s, border-color 0.4s',
      }}
    >
      {/* Neon top edge */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.5), rgba(0,255,234,0.3), rgba(6,182,212,0.5), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #06B6D4, #2563EB)', boxShadow: '0 0 16px rgba(6,182,212,0.4)' }}>
            <span className="text-white font-black text-sm">AG</span>
          </div>
          <span className="text-slate-200 font-semibold text-sm group-hover:text-cyan-400 transition-colors">
            Abhay Gupta
          </span>
        </a>

        {/* Nav links — desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '');
            const isActive = active === id;
            return (
              <a key={href} href={href} className="relative px-4 py-2 text-sm font-medium transition-colors"
                style={{ color: isActive ? '#22D3EE' : '#94A3B8' }}>
                {isActive && (
                  <motion.span layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </a>
            );
          })}
        </div>

        {/* Hire Me CTA */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="live-dot-cyan" />
            <span className="text-xs font-mono text-neon-cyan hidden sm:block" style={{ color: '#00FFEA', fontSize: '0.7rem' }}>
              OPEN TO WORK
            </span>
          </div>
          <a href="#contact"
            className="btn-glow text-white text-sm font-semibold px-5 py-2 rounded-xl hidden sm:inline-flex items-center gap-2">
            Hire Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
