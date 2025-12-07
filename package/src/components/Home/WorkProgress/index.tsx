'use client'
import React, { useEffect, useState } from 'react'
import { Progress as ProgressData } from '@/app/api/data'
import { toast } from 'react-hot-toast'

// Define the interface for ProgressItem
interface ProgressItem {
  title: string
  Progress: number
}

const WorkProgress = ({ isColorMode }: { isColorMode: Boolean }) => {
  const [progressValues, setProgressValues] = useState<ProgressItem[]>([])

  useEffect(() => {
    setProgressValues(ProgressData)
  }, [])

  return (
    <section className='section-padding bg-white dark:bg-slate-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="text-center mb-16">
          <h2 className='text-3xl md:text-4xl font-bold text-midnight-text dark:text-white mb-4'>
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 max-w-6xl mx-auto'>
          {progressValues.map((item, index) => (
            <div key={index} className='bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow duration-300'>
              <div className='flex justify-between items-end mb-2'>
                <div className='font-semibold text-midnight-text dark:text-white text-lg'>
                  {item.title}
                </div>
                <div className='text-primary dark:text-blue-400 font-bold'>
                  {`${item.Progress}%`}
                </div>
              </div>
              
              <div className='w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden'>
                <div
                  className='h-full bg-primary dark:bg-blue-500 rounded-full transition-all duration-1000 ease-out'
                  style={{ width: `${item.Progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkProgress

