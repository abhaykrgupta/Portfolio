import NavBar from '@/components/shared/NavBar';
import ActivityTicker from '@/components/shared/ActivityTicker';
import HeroSection from '@/components/sections/HeroSection';
import MetricsSection from '@/components/sections/MetricsSection';
import WhyHireMeSection from '@/components/sections/WhyHireMeSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A0F1E] text-slate-300">
      <NavBar />
      <HeroSection />
      <ActivityTicker />
      <MetricsSection />
      <WhyHireMeSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
