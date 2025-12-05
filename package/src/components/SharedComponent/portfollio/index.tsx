import React from 'react'
import PortfolioCard from '@/components/SharedComponent/portfollio/Portfolio-card'
import { resumeData } from '@/services/mockData'

const Portfolio = () => {
  return (
    <section className='section-padding bg-white dark:bg-slate-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="text-center mb-16">
          <h2 className='text-3xl md:text-4xl font-bold text-midnight-text dark:text-white mb-4'>
            Portfolio Showcase
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
            A selection of my recent projects and works.
          </p>
        </div>
        
        <PortfolioCard data={resumeData.portfolio}/>
        
        <div className="mt-16 text-center">
          <p className='text-sm text-slate-500 dark:text-slate-400 font-medium'>
            All information presented in this portfolio is accurate and verified
          </p>
        </div>
      </div>
    </section>
  )
}

export default Portfolio