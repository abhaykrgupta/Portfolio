import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Abhay Gupta — Full Stack Engineer',
  description: 'Full Stack Engineer specializing in Node.js, Next.js, and scalable backend systems. Building production-grade applications with measurable impact.',
  keywords: ['Full Stack Engineer', 'Node.js', 'Next.js', 'Backend Developer', 'React', 'TypeScript'],
  authors: [{ name: 'Abhay Gupta' }],
  openGraph: {
    title: 'Abhay Gupta — Full Stack Engineer',
    description: 'Building scalable systems and production-grade applications.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#0A0F1E" />
      </head>
      <body className="bg-[#0A0F1E] text-slate-300 antialiased">
        {children}
      </body>
    </html>
  );
}
