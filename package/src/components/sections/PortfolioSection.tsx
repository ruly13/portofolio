'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Project {
  title: string
  type: string
  description: string
  tags: string[]
  gradient: string
  span: boolean
}

const projects: Project[] = [
  {
    title: 'HeatWafe',
    type: 'IoT System',
    description:
      'IoT-Based Rhizome Drying System using ESP32, DHT22 sensors, and relay control. Monitors and automates temperature for optimal drying process.',
    tags: ['ESP32', 'IoT', 'Sensors', 'Arduino'],
    gradient: 'from-emerald-900/60 to-cyan-900/60',
    span: true,
  },
  {
    title: 'Digital Event Guestbook',
    type: 'Web App',
    description:
      'Digital guest recording system for events — streamlines attendance, data collection, and real-time guest management.',
    tags: ['Web App', 'Database', 'UI/UX'],
    gradient: 'from-indigo-900/60 to-violet-900/60',
    span: false,
  },
  {
    title: 'FilmHunt',
    type: 'Web Platform',
    description:
      'Dynamic movie discovery and review platform with search, filtering, and detailed film information.',
    tags: ['React', 'API', 'JavaScript'],
    gradient: 'from-amber-900/60 to-orange-900/60',
    span: false,
  },
]

export default function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-48 shrink-0"
          >
            <span className="font-[var(--font-display)] text-8xl lg:text-9xl font-black text-accent-cyan/10 select-none leading-none">
              04
            </span>
            <p className="font-[var(--font-mono)] text-xs text-text-muted mt-2 tracking-widest uppercase">
              Portfolio
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-[var(--font-display)] text-3xl lg:text-4xl font-bold text-text-primary">
              Selected Works
            </h2>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className={`group relative overflow-hidden rounded-2xl ${
                project.span ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-105`}
              />

              {/* Pattern overlay */}
              <div className="absolute inset-0 dot-grid-bg opacity-30" />

              {/* Content */}
              <div className="relative z-10 p-8 lg:p-10 flex flex-col min-h-[280px] lg:min-h-[320px]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-[var(--font-mono)] text-xs text-accent-cyan/80 uppercase tracking-wider">
                    {project.type}
                  </span>
                </div>
                <h3 className="font-[var(--font-display)] text-2xl lg:text-3xl font-bold text-text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed max-w-xl mb-6">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-[var(--font-mono)] bg-white/5 text-text-muted border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-end justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-2 text-sm font-[var(--font-mono)] text-accent-cyan">
                    View Details
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Glow border on hover */}
              <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-accent-cyan/30 group-hover:shadow-[0_0_30px_rgba(0,245,212,0.1)] transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
