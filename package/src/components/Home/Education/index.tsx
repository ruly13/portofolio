'use client'

import { useRef } from 'react'
import { useResumeData } from '@/hooks/useResumeData'
import { Icon } from '@iconify/react';

const Education = () => {
    const resumeData = useResumeData();
    const resumeRef = useRef<HTMLDivElement>(null)

    return (
        <section id='education' ref={resumeRef} className='section-padding pt-0 sm:pt-0 lg:pt-0 bg-slate-50 dark:bg-slate-950 transition-colors duration-300'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className='text-3xl md:text-4xl font-bold text-midnight-text dark:text-white mb-4'>
                        {resumeData.labels.education.title}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {resumeData.education.map((item, index) => (
                        <div 
                            key={item.id} 
                            className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-card dark:shadow-none border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary dark:text-blue-400 flex-shrink-0">
                                    <Icon icon="heroicons:academic-cap" width="24" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-midnight-text dark:text-white mb-2">
                                        {item.degree}
                                    </h3>
                                    <p className="text-lg text-secondary dark:text-slate-400 font-medium mb-1">
                                        {item.institution}
                                    </p>
                                    <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-full">
                                        {item.period}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education