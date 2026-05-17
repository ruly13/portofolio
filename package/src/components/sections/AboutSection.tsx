'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const highlights = [
  { icon: 'pin', text: 'Madiun, Indonesia' },
  { icon: 'globe', text: 'Open to Remote' },
  { icon: 'mail', text: 'rohmatchoirulyanwar@gmail.com' },
]

const iconSvgs: Record<string, React.ReactNode> = {
  pin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  globe: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  ),
  mail: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
}

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left — Chapter number */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-48 shrink-0"
          >
            <span className="font-[var(--font-display)] text-8xl lg:text-9xl font-black text-accent-cyan/10 select-none leading-none">
              01
            </span>
            <p className="font-[var(--font-mono)] text-xs text-text-muted mt-2 tracking-widest uppercase">
              About
            </p>
          </motion.div>

          {/* Right — Bio */}
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-[var(--font-display)] text-3xl lg:text-4xl font-bold mb-8 text-text-primary"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-relaxed text-text-muted mb-10 max-w-2xl"
            >
              Recent D3 graduate in Information Technology from{' '}
              <span className="text-accent-cyan">Politeknik Negeri Madiun</span>. Deep passion for
              technological innovation — from building scalable logistics systems with{' '}
              <span className="text-accent-cyan">Next.js 15 + Turbo Monorepo</span>, to implementing
              IoT solutions with <span className="text-accent-cyan">ESP32</span>. I leverage AI to
              accelerate development without sacrificing quality.
            </motion.p>

            {/* Highlight cards */}
            <div className="flex flex-col sm:flex-row gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass-card-hover rounded-lg px-5 py-4 flex items-center gap-3 flex-1"
                >
                  <span className="text-accent-cyan shrink-0">{iconSvgs[item.icon]}</span>
                  <span className="text-sm text-text-primary">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
