'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface TimelineEntry {
  date: string
  role: string
  company: string
  description: string
  tags: string[]
  side: 'left' | 'right'
}

const experiences: TimelineEntry[] = [
  {
    date: 'Jan \u2013 Jul 2024',
    role: 'Web Developer Intern',
    company: 'PT Elecomp Indonesia \u00B7 Malang',
    description:
      'Built 25+ company profile websites for Indonesian export companies. Handled testing, debugging, and cross-browser compatibility.',
    tags: ['HTML', 'CSS', 'PHP'],
    side: 'left',
  },
  {
    date: 'Oct \u2013 Dec 2025',
    role: 'Frontend Developer',
    company: 'PT AZLogistik \u00B7 Surabaya (Project-Based)',
    description:
      'Developed scalable logistics platform using Next.js 15 + React 19 in Turbo Monorepo. State management with Zustand, UI with TailwindCSS, REST API integration.',
    tags: ['Next.js 15', 'React 19', 'Zustand', 'TailwindCSS', 'Monorepo'],
    side: 'right',
  },
]

function TimelineCard({ entry, index }: { entry: TimelineEntry; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div
      ref={ref}
      className={`relative flex items-center w-full ${
        entry.side === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } flex-col lg:gap-0 gap-4`}
    >
      {/* Card */}
      <motion.div
        initial={{
          opacity: 0,
          x: entry.side === 'left' ? -60 : 60,
        }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="lg:w-[calc(50%-2rem)] w-full glass-card-hover rounded-xl p-6"
      >
        <span className="font-[var(--font-mono)] text-xs text-accent-amber">{entry.date}</span>
        <h3 className="font-[var(--font-display)] text-xl font-bold text-text-primary mt-2">
          {entry.role}
        </h3>
        <p className="text-sm text-accent-cyan mt-1">{entry.company}</p>
        <p className="text-sm text-text-muted leading-relaxed mt-3">{entry.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-[var(--font-mono)] bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Center dot — visible only on desktop */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-cyan border-4 border-bg-darkest z-10" />

      {/* Spacer for the other side */}
      <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
    </div>
  )
}

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 lg:py-32 relative" ref={ref}>
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
              02
            </span>
            <p className="font-[var(--font-mono)] text-xs text-text-muted mt-2 tracking-widest uppercase">
              Experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-[var(--font-display)] text-3xl lg:text-4xl font-bold text-text-primary">
              Work Experience
            </h2>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/40 via-accent-cyan/20 to-transparent" />

          <div className="flex flex-col gap-12">
            {experiences.map((entry, index) => (
              <TimelineCard key={entry.role} entry={entry} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
