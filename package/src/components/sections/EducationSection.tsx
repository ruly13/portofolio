'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const schools = [
  {
    name: 'Politeknik Negeri Madiun',
    degree: 'D3 Informatics Engineering',
    years: '2022 \u2013 2025',
    icon: 'graduation',
  },
  {
    name: 'SMK Negeri 1 Madiun',
    degree: 'Vocational High School',
    years: '2018 \u2013 2021',
    icon: 'school',
  },
]

const iconSvgs: Record<string, React.ReactNode> = {
  graduation: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  ),
  school: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 22V6l10-4 10 4v16" />
      <path d="M6 12h0" />
      <path d="M6 16h0" />
      <path d="M10 12h0" />
      <path d="M10 16h0" />
      <path d="M14 12h0" />
      <path d="M14 16h0" />
      <path d="M18 12h0" />
      <path d="M18 16h0" />
    </svg>
  ),
}

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 lg:py-32 relative" ref={ref}>
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
              06
            </span>
            <p className="font-[var(--font-mono)] text-xs text-text-muted mt-2 tracking-widest uppercase">
              Education
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-[var(--font-display)] text-3xl lg:text-4xl font-bold text-text-primary">
              Education
            </h2>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schools.map((school, i) => (
            <motion.div
              key={school.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="relative glass-card-hover rounded-xl p-8 overflow-hidden"
            >
              {/* Top gradient border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan via-accent-cyan/50 to-transparent" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan shrink-0">
                  {iconSvgs[school.icon]}
                </div>
                <div className="flex-1">
                  <h3 className="font-[var(--font-display)] text-lg font-bold text-text-primary mb-1">
                    {school.name}
                  </h3>
                  <p className="text-sm text-text-muted mb-3">{school.degree}</p>
                  {/* Year timeline bar */}
                  <div className="flex items-center gap-3">
                    <div className="h-1 flex-1 rounded-full bg-white/5">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-accent-cyan/60 to-accent-cyan/20" />
                    </div>
                    <span className="font-[var(--font-mono)] text-xs text-accent-amber shrink-0">
                      {school.years}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
