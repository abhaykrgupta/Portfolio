'use client';

const achievements = [
  '🚀 Deployed microservices handling 15k RPS',
  '⚡ Reduced API latency by 40% via Redis caching',
  '🏗️ Architected multi-tenant SaaS for 50+ enterprise clients',
  '📦 Shipped 10+ production applications',
  '🔧 Designed 20+ RESTful & GraphQL APIs',
  '📊 Built real-time dashboard replacing 5 manual reports',
  '🔒 Zero auth incidents across 3 production services',
  '💡 Led migration REST → GraphQL cutting over-fetching 35%',
  '🎯 Delivered 6 freelance projects with 100% on-time rate',
  '⚙️ Sole dev on an MVP that raised pre-seed funding',
];

// Duplicate for seamless infinite loop
const doubled = [...achievements, ...achievements];

export default function ActivityTicker() {
  return (
    <div className="relative overflow-hidden py-3"
      style={{
        background: 'rgba(6,182,212,0.04)',
        borderTop: '1px solid rgba(6,182,212,0.12)',
        borderBottom: '1px solid rgba(6,182,212,0.12)',
      }}>
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #0A0F1E, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, #0A0F1E, transparent)' }} />

      <div
        className="flex gap-12 whitespace-nowrap"
        style={{ animation: 'ticker 40s linear infinite' }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="text-sm font-medium flex items-center gap-2"
            style={{ color: 'rgba(203,213,225,0.7)' }}>
            {item}
            <span className="text-cyan-400 opacity-40 font-mono mx-2">|</span>
          </span>
        ))}
      </div>
    </div>
  );
}
