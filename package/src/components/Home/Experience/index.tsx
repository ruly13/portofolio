'use client'

import React from 'react'
import { useResumeData } from '@/hooks/useResumeData'
import { Icon } from '@iconify/react';

const Experience = () => {
  const resumeData = useResumeData();
  return (
    <section className='section-padding bg-white dark:bg-slate-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="text-center mb-16">
          <h2 className='text-3xl md:text-4xl font-bold text-midnight-text dark:text-white mb-4'>
            {resumeData.labels.experience.title}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className='relative max-w-4xl mx-auto'>
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {resumeData.experience.map((item, index) => (
              <div key={item.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-900 shadow-md transform -translate-x-[7px] md:-translate-x-1/2 mt-1.5 z-10"></div>

                {/* Content */}
                <div className="flex-1 ml-8 md:ml-0">
                  <div className={`bg-white dark:bg-slate-800 p-6 rounded-xl shadow-card dark:shadow-none border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} mb-4`}>
                      <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-primary dark:text-blue-400 text-xs font-semibold rounded-full mb-2">
                        {item.period}
                      </span>
                      <h3 className="text-xl font-bold text-midnight-text dark:text-white">{item.role}</h3>
                      <h4 className="text-lg text-secondary dark:text-slate-400 font-medium">{item.company}</h4>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Empty Space for alternate side */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
