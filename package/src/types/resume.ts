export interface HeroData {
  name: string;
  title: string;
  description: string;
  image: string;
  contact: {
    phone: string;
    email: string;
    location: string;
  };
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
}

export interface PortfolioItem {
  id: number;
  image: string;
  alt: string;
  title: string;
  slug: string;
  info: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

// Certificates share the same structure as Portfolio items in the current implementation
export interface CertificateItem extends PortfolioItem {}

export interface ResumeData {
  hero: HeroData;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: string[];
  portfolio: PortfolioItem[];
  certificates: CertificateItem[];
  labels: {
    hero: {
      status: string;
      contact: string;
      download: string;
      phone: string;
      email: string;
      location: string;
      experience: string;
      years: string;
    };
    experience: {
      title: string;
    };
    education: {
      title: string;
    };
    portfolio: {
      title: string;
      subtitle: string;
      disclaimer: string;
    };
    certificates: {
      title: string;
      subtitle: string;
    };
  };
}
