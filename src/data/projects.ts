export interface ProjectMetric {
  label: string;
  value: string;
  sub: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  stack: string[];
  impact: string;
  metrics: ProjectMetric[];
  accentColor: 'cyan' | 'violet' | 'green' | 'amber';
  featured?: boolean;
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 'api-gateway',
    title: 'High-Throughput API Gateway',
    tagline: 'Scaled a breaking monolith to 15k RPS without downtime.',
    problem: 'A legacy monolith was timing out under 10k concurrent requests — users were dropping, on-call was burning out.',
    solution: 'Rebuilt the ingestion layer as a Node.js API gateway with Redis caching, request queuing, and PM2 cluster-mode horizontal scaling behind Nginx. Zero downtime migration via traffic gradual shift.',
    stack: ['Node.js', 'Express', 'Redis', 'PM2', 'Docker', 'Nginx'],
    impact: 'P99 latency dropped from 2.4s → 180ms (13× faster). Sustained 15k RPS in load tests. Zero unplanned downtime during migration.',
    metrics: [
      { label: 'Latency', value: '13×',  sub: 'faster P99' },
      { label: 'Peak Load', value: '15k', sub: 'RPS sustained' },
      { label: 'Downtime', value: '0',    sub: 'during migration' },
    ],
    accentColor: 'cyan',
    featured: true,
    github: '#',
  },
  {
    id: 'realtime-dashboard',
    title: 'Real-Time Analytics Dashboard',
    tagline: 'Replaced 5 manual reports with a live dashboard used daily by 30+ ops staff.',
    problem: 'Operations team was running 5 spreadsheet reports manually — decisions lagged by hours, errors were common, and data was always stale.',
    solution: 'Built a WebSocket-powered dashboard: Node.js event aggregation layer, Postgres with indexed materialized views for time-series queries, live Next.js UI with chart streaming.',
    stack: ['Next.js', 'Node.js', 'WebSockets', 'PostgreSQL', 'Recharts', 'Tailwind'],
    impact: '5 manual reports eliminated. Decision latency cut from hours → seconds (60% faster). 99.9% uptime sustained over 8 months in production.',
    metrics: [
      { label: 'Reports Killed', value: '5',     sub: 'manual processes' },
      { label: 'Decision Speed', value: '60%',   sub: 'faster' },
      { label: 'Uptime', value: '99.9%',         sub: 'over 8 months' },
    ],
    accentColor: 'green',
    github: '#',
  },
  {
    id: 'auth-service',
    title: 'Centralized Auth Microservice',
    tagline: 'Eliminated duplicated auth code across 6 services in one extraction sprint.',
    problem: 'Auth logic was copy-pasted across 6 services — each had slightly different JWT validation, no audit trail, and a security bug required patching 6 codebases.',
    solution: 'Extracted auth into a typed standalone microservice: JWT + rotating refresh tokens, RBAC with permission matrices, structured audit logs, Redis token blacklisting. Containerized with a shared npm package for service integration.',
    stack: ['Node.js', 'TypeScript', 'JWT', 'PostgreSQL', 'Redis', 'Docker'],
    impact: 'Auth bugs now fixed in one place. 3 new services onboarded in days (vs weeks). Zero auth-related incidents in 12 months post-launch. Security audit passed first try.',
    metrics: [
      { label: 'Services Unified', value: '6',   sub: 'from fragmented' },
      { label: 'Auth Incidents', value: '0',     sub: 'in 12 months' },
      { label: 'Onboard Time', value: '3×',      sub: 'faster per service' },
    ],
    accentColor: 'violet',
    github: '#',
  },
  {
    id: 'ecom-backend',
    title: 'Flash Sale Order Processing Engine',
    tagline: '2,000 orders in 3 minutes. Zero oversells. Zero duplicate charges.',
    problem: 'Flash sale pipeline had race conditions — inventory oversold, duplicate charges hit customers, support tickets spiked every sale. The existing system couldn\'t handle burst traffic.',
    solution: 'Re-architected with Postgres advisory locks for inventory, idempotency keys on every charge, and BullMQ job queues for async fulfillment steps. Load-tested to 3× expected peak before launch.',
    stack: ['Node.js', 'BullMQ', 'PostgreSQL', 'Redis', 'Express', 'TypeScript'],
    impact: '2,000+ orders processed in a 3-minute window with zero oversells, zero duplicate charges, and zero support tickets related to ordering post-launch.',
    metrics: [
      { label: 'Orders/3min', value: '2k+', sub: 'burst processed' },
      { label: 'Oversells', value: '0',     sub: 'post-launch' },
      { label: 'Dup. Charges', value: '0',  sub: 'via idempotency' },
    ],
    accentColor: 'amber',
    github: '#',
  },
];
