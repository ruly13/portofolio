'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { portfolioinfo } from '@/app/api/data'
import Link from 'next/link'
import { useEdit } from '@/app/api/contex/EditContext'
import { Icon } from '@iconify/react'

interface PortfolioItem {
  image: string
  alt: string
  title: string
  info: string
  slug: string
  pdf?: string
}

const PortfolioCard = ({ data }: { data?: PortfolioItem[] }) => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(data || portfolioinfo)
  const { isEditing } = useEdit()

  const handleEdit = (index: number, field: keyof PortfolioItem, value: string) => {
    const newItems = [...portfolioItems]
    newItems[index] = {
      ...newItems[index],
      [field]: value
    }
    setPortfolioItems(newItems)
  }

  return (
    <div id='portfolio'>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <div key={index} className='group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-card dark:shadow-none border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300 flex flex-col'>
            
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
                  className='object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500'
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-midnight-text rounded-full font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details <Icon icon="heroicons:arrow-right" />
                  </span>
                </div>
              </Link>
              
              {isEditing && (
                <div className='absolute top-2 right-2 left-2 bg-white/95 dark:bg-slate-800/95 p-3 rounded-lg shadow-lg z-20'>
                  <label className="text-xs font-semibold text-slate-500 uppercase mb-1 block">Image URL</label>
                  <input
                    type="text"
                    value={item.image}
                    onChange={(e) => handleEdit(index, 'image', e.target.value)}
                    className='w-full p-1.5 border border-slate-300 dark:border-slate-600 rounded text-sm dark:bg-slate-700 dark:text-white'
                  />
                </div>
              )}
            </div>

            {/* Content Container */}
            <div className="p-6 flex-1 flex flex-col">
              {isEditing ? (
                <div className='space-y-3'>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase mb-1 block">Title</label>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => handleEdit(index, 'title', e.target.value)}
                      className='w-full p-1.5 border border-slate-300 dark:border-slate-600 rounded text-sm dark:bg-slate-700 dark:text-white'
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase mb-1 block">Description</label>
                    <input
                      type="text"
                      value={item.info}
                      onChange={(e) => handleEdit(index, 'info', e.target.value)}
                      className='w-full p-1.5 border border-slate-300 dark:border-slate-600 rounded text-sm dark:bg-slate-700 dark:text-white'
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase mb-1 block">Link</label>
                    <input
                      type="text"
                      value={item.slug}
                      onChange={(e) => handleEdit(index, 'slug', e.target.value)}
                      className='w-full p-1.5 border border-slate-300 dark:border-slate-600 rounded text-sm dark:bg-slate-700 dark:text-white'
                    />
                  </div>
                </div>
              ) : (
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
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PortfolioCard

