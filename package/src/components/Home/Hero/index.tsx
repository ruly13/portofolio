'use client'

import React from 'react'
import Image from 'next/image'
import { useResumeData } from '@/hooks/useResumeData'
import { Icon } from '@iconify/react'

const Hero = () => {
  const resumeData = useResumeData();
  const imageUrl = resumeData.hero.image;

  return (
    <section className='relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-20 lg:py-32 overflow-hidden'>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-400/10 dark:bg-blue-400/5 blur-3xl"></div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20'>
          
          {/* Text Content */}
          <div className='flex-1 text-center lg:text-left space-y-6'>
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light font-medium text-sm mb-2">
              {resumeData.labels.hero.status}
            </div>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-midnight-text dark:text-white tracking-tight'>
              {resumeData.hero.name}
            </h1>
            <h2 className='text-2xl md:text-3xl text-secondary dark:text-slate-400 font-medium'>
              {resumeData.hero.title}
            </h2>
            <p className='text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0'>
              {resumeData.hero.description}
            </p>
            
            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4'>
              <a href={`mailto:${resumeData.hero.contact.email}`} className="btn-primary rounded-full px-8 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                {resumeData.labels.hero.contact}
              </a>
              <button className="px-8 py-3 rounded-full border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                {resumeData.labels.hero.download}
              </button>
            </div>

            <div className='flex flex-wrap gap-x-8 gap-y-6 pt-8 border-t border-slate-200 dark:border-slate-700 mt-8'>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary flex-shrink-0">
                  <Icon icon="heroicons:phone" width="20" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold tracking-wider">{resumeData.labels.hero.phone}</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{resumeData.hero.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary flex-shrink-0">
                  <Icon icon="heroicons:envelope" width="20" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold tracking-wider">{resumeData.labels.hero.email}</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100 break-all">{resumeData.hero.contact.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary flex-shrink-0">
                  <Icon icon="heroicons:map-pin" width="20" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold tracking-wider">{resumeData.labels.hero.location}</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{resumeData.hero.contact.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className='flex-1 relative'>
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] rotate-6 opacity-20 blur-lg"></div>
              <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-[2rem] shadow-2xl overflow-hidden border-4 border-white dark:border-slate-700 transform transition-transform hover:scale-[1.02] duration-500">
                <Image
                  src={imageUrl}
                  alt={resumeData.hero.name}
                  fill
                  className='object-cover'
                  priority
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                  <Icon icon="heroicons:check-badge" width="24" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{resumeData.labels.hero.experience}</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">5+ {resumeData.labels.hero.years}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
