'use client'
import React from 'react'
import Image from 'next/image'
import { portfolioinfo } from '@/app/api/data'
import Link from 'next/link'
import { Icon } from '@iconify/react'

import { PortfolioItem } from '@/types/resume'

const PortfolioCard = ({ data }: { data?: PortfolioItem[] }) => {
  const portfolioItems = data || portfolioinfo


  return (
    <div id='portfolio'>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <div 
            key={index} 
            className='group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-card dark:shadow-none border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300 flex flex-col'
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            
            {/* Image Container */}
            <div className='relative overflow-hidden aspect-video'>
              <Link 
                href={`/portfolio/${item.slug}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className='object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500'
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-midnight-text rounded-full font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details <Icon icon="heroicons:arrow-right" />
                  </span>
                </div>
              </Link>
            </div>

            {/* Content Container */}
            <div className="p-6 flex-1 flex flex-col">
                <>
                  <Link 
                    href={`/portfolio/${item.slug}`}
                    className='block'
                  >
                    <h3 className='text-xl font-bold text-midnight-text dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors'>
                      {item.title}
                    </h3>
                  </Link>
                  <p className='text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 flex-1'>
                    {item.info}
                  </p>
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                    <Link 
                      href={`/portfolio/${item.slug}`}
                      className="text-sm font-medium text-primary dark:text-blue-400 hover:text-primary-dark dark:hover:text-blue-300 flex items-center gap-1"
                    >
                      Details <Icon icon="heroicons:chevron-right" width="16" />
                    </Link>
                  </div>
                </>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PortfolioCard

