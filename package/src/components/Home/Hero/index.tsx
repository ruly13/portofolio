'use client'

import React from 'react'
import Image from 'next/image'
import { useResumeData } from '@/hooks/useResumeData'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

const Hero = () => {
  const resumeData = useResumeData();
  const imageUrl = resumeData.hero.image;

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { duration: 0.8, ease: "backOut" }
    }
  };

  return (
    <section id='home' className='relative bg-gradient-to-br from-slate-50 to-slate-100 dark:bg-slate-900 dark:from-slate-900 dark:to-slate-800 py-20 lg:py-32 overflow-hidden transition-colors duration-300'>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-400/10 dark:bg-blue-400/5 blur-3xl animate-pulse delay-1000"></div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20'>
          
          {/* Text Content */}
          <motion.div 
            className='flex-1 text-center lg:text-left space-y-6'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status Badge with Pulsing Dot */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 font-medium text-sm mb-4 backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              {resumeData.labels.hero.status}
            </motion.div>

            <motion.h1 variants={itemVariants} className='text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4'>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-slate-200 dark:to-slate-400">
                {resumeData.hero.name}
              </span>
            </motion.h1>
            <motion.h2 variants={itemVariants} className='text-2xl md:text-3xl text-secondary dark:text-slate-400 font-medium'>
              {resumeData.hero.title}
            </motion.h2>
            <motion.p variants={itemVariants} className='text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-justify'>
              {resumeData.hero.description}
            </motion.p>
            
            <motion.div variants={itemVariants} className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4'>
              <a href={`mailto:${resumeData.hero.contact.email}`} className="btn-primary rounded-full px-8 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                {resumeData.labels.hero.contact}
              </a>
              <button className="px-8 py-3 rounded-full border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                {resumeData.labels.hero.download}
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className='flex flex-wrap gap-x-8 gap-y-6 pt-8 border-t border-slate-200 dark:border-slate-700 mt-8'>
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
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            className='flex-1 relative'
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] rotate-6 opacity-20 blur-lg animate-pulse"></div>
              <motion.div 
                className="absolute inset-0 bg-white dark:bg-slate-800 rounded-[2rem] shadow-2xl overflow-hidden border-4 border-white dark:border-slate-700"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={imageUrl}
                  alt={resumeData.hero.name}
                  fill
                  sizes="(max-width: 768px) 288px, 384px"
                  className='object-cover'
                  priority
                />
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                  <Icon icon="heroicons:check-badge" width="24" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{resumeData.labels.hero.experience}</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">&lt; 1 {resumeData.labels.hero.years}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
