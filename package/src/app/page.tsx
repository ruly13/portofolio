import { Metadata } from 'next'
import Navbar from '@/components/sections/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import SkillsSection from '@/components/sections/SkillsSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import CertificatesSection from '@/components/sections/CertificatesSection'
import EducationSection from '@/components/sections/EducationSection'
import ContactFooter from '@/components/sections/ContactFooter'

export const metadata: Metadata = {
  title: 'Rohmat Choiruly Anwar | Frontend Developer',
  description:
    'Building interfaces that live at the intersection of logic and aesthetics. Frontend Developer specializing in Next.js, React, and TypeScript.',
}

export default function Home() {
  return (
    <main className="bg-bg-darkest min-h-screen relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <PortfolioSection />
      <CertificatesSection />
      <EducationSection />
      <ContactFooter />
    </main>
  )
}
