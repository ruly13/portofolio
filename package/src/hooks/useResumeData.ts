import { useLanguage } from '@/context/LanguageContext';
import { resumeDataEn, resumeDataId, ResumeData } from '@/services/mockData';

export const useResumeData = (): ResumeData => {
  const { language } = useLanguage();
  return language === 'en' ? resumeDataEn : resumeDataId;
};
