'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useResumeData } from '@/hooks/useResumeData'
import { Icon } from '@iconify/react'
import { marked } from 'marked'

const PortfolioDetail = () => {
  const params = useParams()
  const slug = params.id as string
  const resumeData = useResumeData();
  
  const project = resumeData.portfolio.find(item => item.slug === slug) || 
                  resumeData.certificates?.find(item => item.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Project Not Found</h1>
          <Link href="/" className="text-primary hover:underline">Back to Home</Link>
        </div>
      </div>
    )
  }

  const htmlContent = marked.parse(project.description || '')

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Back Button */}
        <Link href="/#portfolio" className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-blue-400 mb-8 transition-colors">
          <Icon icon="heroicons:arrow-left" width="20" />
          Back to Portfolio
        </Link>

        {/* Header Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-midnight-text dark:text-white mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                {project.info}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies?.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-primary dark:text-blue-400 text-sm font-medium rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2"
                  >
                    <Icon icon="heroicons:globe-alt" width="20" />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-md border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2"
                  >
                    <Icon icon="akar-icons:github-fill" width="20" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
            
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
          <div 
            className="prose prose-slate dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent as string }}
          />
        </div>

      </div>
    </div>
  )
}

export default PortfolioDetail
