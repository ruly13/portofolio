'use client'
import React from 'react'
import PortfolioCard from '@/components/SharedComponent/portfollio/Portfolio-card'
import { useResumeData } from '@/hooks/useResumeData'

const Portfolio = () => {
  const resumeData = useResumeData();
  return (
    <section className='section-padding bg-white dark:bg-slate-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="text-center mb-16">
          <h2 className='text-3xl md:text-4xl font-bold text-midnight-text dark:text-white mb-4'>
            {resumeData.labels.portfolio.title}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
            {resumeData.labels.portfolio.subtitle}
          </p>
        </div>
        
        <PortfolioCard data={resumeData.portfolio}/>
        
        <div className="mt-16 text-center">
          <p className='text-sm text-slate-500 dark:text-slate-400 font-medium'>
            {resumeData.labels.portfolio.disclaimer}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Portfolio