'use client'
import React, { useState } from 'react'
import { Skills } from '@/app/api/data'
import { Icon } from '@iconify/react'
import { motion, AnimatePresence } from 'framer-motion'

const getLevelBadge = (level: string) => {
  switch (level) {
    case 'Advanced': return { text: 'Expert', class: 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300 border-green-200 dark:border-green-500/30' };
    case 'Intermediate': return { text: 'Medium', class: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 border-blue-200 dark:border-blue-500/30' };
    case 'Basic': return { text: 'Basic', class: 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-600' };
    default: return { text: '', class: '' };
  }
}

const WorkProgress = ({ isColorMode }: { isColorMode?: Boolean }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id='skills' className='section-padding py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            Expertise
          </span>
          <h2 className='text-3xl md:text-4xl font-bold text-midnight-text dark:text-white mb-6'>
            Skills & <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Kompetensi teknis dan non-teknis yang saya miliki untuk mendukung pengembangan solusi digital.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-slate-900 p-1.5 rounded-full border border-slate-200 dark:border-slate-800 inline-flex shadow-sm">
            {Skills.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {/* Tab Content */}
        <div className="max-w-6xl mx-auto min-h-0">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Skills[activeTab].data.map((group, groupIndex) => (
                  <motion.div 
                    key={groupIndex} 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: groupIndex * 0.1 }}
                    className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow duration-300 h-full"
                  >
                    <h3 className="text-lg font-bold text-midnight-text dark:text-white mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                      <span className="w-8 h-1 bg-primary rounded-full"></span>
                      {group.title}
                    </h3>
                    
                    <div className="flex flex-col gap-3">
                      {group.skills.map((skill: any, skillIndex: number) => {
                        const badge = getLevelBadge(skill.level || 'Intermediate');
                        return (
                          <div 
                            key={skillIndex}
                            className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700/50 hover:border-primary/30 hover:bg-white dark:hover:bg-slate-800 group transition-all duration-300"
                          >
                            <div className="flex items-center gap-3">
                              <Icon icon={skill.icon} className="w-6 h-6 text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors" />
                              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-midnight-text dark:group-hover:text-white transition-colors">
                                {skill.name}
                              </span>
                            </div>
                            <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md border ${badge.class}`}>
                              {badge.text}
                            </span>
                          </div>
                      )})}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}

export default WorkProgress

