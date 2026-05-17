'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const certificates = [
  { name: 'Concept of Programming', issuer: 'Dicoding', category: 'Programming' },
  { name: 'AI Product Development Aspects', issuer: 'Dicoding', category: 'AI' },
  { name: 'TOEFL Certificate', issuer: 'Elfast Indonesia', category: 'English' },
  { name: 'English Proficiency Test', issuer: 'Elfast Indonesia', category: 'English' },
  { name: 'Organizational Leadership', issuer: 'UKM Musik Musicien', category: 'Leadership' },
  { name: 'Internship Certificate', issuer: 'PT Elecomp Indonesia', category: 'Professional' },
  { name: 'AI Engineer for Millennials', issuer: 'Dicoding', category: 'AI' },
  { name: 'Fundamental Junior Web Developer', issuer: 'Dicoding', category: 'Web Dev' },
  { name: 'Intermediate Junior Web Developer', issuer: 'Dicoding', category: 'Web Dev' },
  { name: 'Junior Web Developer BNSP', issuer: 'National Certification', category: 'Certification' },
]

const categoryColors: Record<string, string> = {
  Programming: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20',
  AI: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  English: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Leadership: 'bg-accent-amber/10 text-accent-amber border-accent-amber/20',
  Professional: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Web Dev': 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20',
  Certification: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
}

function CertCard({ cert }: { cert: (typeof certificates)[0] }) {
  return (
    <div className="glass-card rounded-xl p-5 min-w-[280px] max-w-[280px] shrink-0 flex flex-col gap-3">
      {/* Certificate icon */}
      <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="14" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
        </svg>
      </div>

      <h4 className="font-[var(--font-display)] text-sm font-semibold text-text-primary leading-tight line-clamp-2">
        {cert.name}
      </h4>
      <p className="text-xs text-text-muted">{cert.issuer}</p>
      <span
        className={`self-start px-2.5 py-0.5 text-[10px] font-[var(--font-mono)] rounded-full border ${
          categoryColors[cert.category] || categoryColors['Programming']
        }`}
      >
        {cert.category}
      </span>
    </div>
  )
}

export default function CertificatesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const doubled = [...certificates, ...certificates]

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      <div className="section-container mb-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-48 shrink-0"
          >
            <span className="font-[var(--font-display)] text-8xl lg:text-9xl font-black text-accent-cyan/10 select-none leading-none">
              05
            </span>
            <p className="font-[var(--font-mono)] text-xs text-text-muted mt-2 tracking-widest uppercase">
              Certs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-[var(--font-display)] text-3xl lg:text-4xl font-bold text-text-primary">
              Certifications & Awards
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Infinite marquee */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bg-darkest to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bg-darkest to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div className="marquee-track flex gap-4 w-max">
            {doubled.map((cert, i) => (
              <CertCard key={`${cert.name}-${i}`} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
