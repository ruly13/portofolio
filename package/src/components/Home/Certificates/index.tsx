'use client'
import React from 'react'
import PortfolioCard from '@/components/SharedComponent/portfollio/Portfolio-card'
import { useResumeData } from '@/hooks/useResumeData'

const Certificates = () => {
  const resumeData = useResumeData();
  return (
    <section id="certificates" className='section-padding bg-slate-50 dark:bg-slate-950 transition-colors duration-300'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="text-center mb-16">
          <h2 className='text-3xl md:text-4xl font-bold text-midnight-text dark:text-white mb-4'>
            {resumeData.labels.certificates.title}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
            {resumeData.labels.certificates.subtitle}
          </p>
        </div>
        
        <PortfolioCard data={resumeData.certificates}/>
        
      </div>
    </section>
  )
}

export default Certificates
