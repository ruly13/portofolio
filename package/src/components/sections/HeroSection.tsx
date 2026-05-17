'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const stackBadges = [
  { name: 'Next.js', icon: '/' },
  { name: 'React', icon: '/' },
  { name: 'TypeScript', icon: '/' },
  { name: 'TailwindCSS', icon: '/' },
]

const floatingStats = [
  { value: '<1yr', label: 'Experience' },
  { value: '10+', label: 'Certs' },
  { value: '3', label: 'Projects' },
]

const letterVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.05,
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  }),
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: 'easeOut' as const },
  }),
}

export default function HeroSection() {
  const name1 = 'ROHMAT'
  const name2 = 'CHOIRULY'

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden dot-grid-bg scanlines"
    >
      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-[15%] w-20 h-20 border border-accent-cyan/10 rotate-45 animate-float" />
      <div className="absolute bottom-32 left-[10%] w-14 h-14 border border-accent-amber/10 rounded-full animate-float-slow" />
      <div className="absolute top-[40%] right-[8%] w-8 h-8 bg-accent-cyan/5 rotate-12 animate-float" />

      <div className="section-container relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-16">
        {/* Left side */}
        <div className="flex-1 text-center lg:text-left">
          {/* Code label */}
          <motion.p
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-[var(--font-mono)] text-sm text-accent-cyan mb-6"
          >
            {'<frontend.developer />'}
          </motion.p>

          {/* Giant name */}
          <div className="overflow-hidden mb-2">
            <div className="flex flex-wrap justify-center lg:justify-start">
              {name1.split('').map((char, i) => (
                <motion.span
                  key={`n1-${i}`}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-text-primary tracking-tight"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="overflow-hidden mb-6">
            <div className="flex flex-wrap justify-center lg:justify-start">
              {name2.split('').map((char, i) => (
                <motion.span
                  key={`n2-${i}`}
                  custom={i + name1.length}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-text-primary tracking-tight"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Subtitle */}
          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg text-text-muted max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8 text-balance"
          >
            Building interfaces that live at the intersection of logic and aesthetics.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={1.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center gap-4 mb-8"
          >
            <a
              href="#contact"
              className="glow-btn inline-flex items-center gap-2 px-8 py-3.5 bg-accent-cyan text-bg-darkest font-semibold rounded-lg text-sm"
            >
              Contact Me
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-text-muted/30 text-text-primary rounded-lg text-sm font-medium hover:border-accent-cyan/50 transition-colors"
            >
              Download CV
            </a>
          </motion.div>

          {/* Stack badges */}
          <motion.div
            custom={1.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center lg:justify-start gap-3"
          >
            {stackBadges.map((badge) => (
              <span
                key={badge.name}
                className="glass-card px-4 py-2 rounded-full text-xs font-[var(--font-mono)] text-text-muted"
              >
                {badge.name}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right side — Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'backOut' }}
          className="flex-1 flex justify-center relative"
        >
          {/* Hexagonal frame */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
            {/* Rotating dashed border ring */}
            <div
              className="absolute inset-[-12px] rotate-border"
              style={{
                clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
                border: '2px dashed rgba(0,245,212,0.4)',
                background: 'transparent',
              }}
            />
            <svg
              className="absolute inset-[-16px] w-[calc(100%+32px)] h-[calc(100%+32px)] rotate-border"
              viewBox="0 0 200 200"
              fill="none"
            >
              <polygon
                points="100,5 185,30 185,170 100,195 15,170 15,30"
                stroke="rgba(0,245,212,0.3)"
                strokeWidth="1"
                strokeDasharray="8 6"
                fill="none"
              />
            </svg>

            {/* Profile image in hexagon clip */}
            <div
              className="relative w-full h-full overflow-hidden"
              style={{
                clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
              }}
            >
              <Image
                src="/images/hero/hero-image.png"
                alt="Rohmat Choiruly Anwar"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 256px, 320px"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080C10]/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Floating stat cards */}
          {floatingStats.map((stat, i) => {
            const positions = [
              'top-0 -right-4 sm:right-[-2rem]',
              '-bottom-2 -left-4 sm:left-[-2rem]',
              'bottom-4 -right-4 sm:right-[-3rem]',
            ]
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.2, duration: 0.5 }}
                className={`absolute ${positions[i]} glass-card rounded-lg px-4 py-3 z-20`}
              >
                <p className="text-lg font-bold text-accent-cyan font-[var(--font-display)]">{stat.value}</p>
                <p className="text-xs text-text-muted font-[var(--font-mono)]">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
