import { ResumeData } from '@/types/resume';
import { heroDataEn, heroDataId } from './data/hero';
import { experienceDataEn, experienceDataId } from './data/experience';
import { educationDataEn, educationDataId } from './data/education';
import { skillsData } from './data/skills';
import { portfolioDataEn, portfolioDataId } from './data/portfolio';
import { certificatesDataEn, certificatesDataId } from './data/certificates';

import { labelsEn, labelsId } from './data/labels';

export type { ResumeData } from '@/types/resume';

export const resumeDataEn: ResumeData = {
  hero: heroDataEn,
  experience: experienceDataEn,
  education: educationDataEn,
  skills: skillsData,
  portfolio: portfolioDataEn,
  certificates: certificatesDataEn,
  labels: labelsEn
};

export const resumeDataId: ResumeData = {
  hero: heroDataId,
  experience: experienceDataId,
  education: educationDataId,
  skills: skillsData,
  portfolio: portfolioDataId,
  certificates: certificatesDataId,
  labels: labelsId
};

// Default export for backward compatibility
export const resumeData = resumeDataEn;
