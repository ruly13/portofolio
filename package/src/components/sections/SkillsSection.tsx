'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

type SkillLevel = 'Basic' | 'Medium'

interface Skill {
  name: string
  level: SkillLevel
  percent: number
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const technicalSkills: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', level: 'Medium', percent: 65 },
      { name: 'HTML', level: 'Medium', percent: 75 },
      { name: 'CSS', level: 'Medium', percent: 70 },
      { name: 'PHP', level: 'Basic', percent: 40 },
      { name: 'TypeScript', level: 'Basic', percent: 45 },
      { name: 'Python', level: 'Basic', percent: 30 },
      { name: 'Kotlin', level: 'Basic', percent: 25 },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Next.js 15', level: 'Medium', percent: 65 },
      { name: 'React 19', level: 'Medium', percent: 65 },
      { name: 'TailwindCSS', level: 'Medium', percent: 75 },
      { name: 'Zustand', level: 'Medium', percent: 55 },
      { name: 'CodeIgniter', level: 'Basic', percent: 35 },
      { name: 'Bootstrap', level: 'Medium', percent: 60 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', level: 'Medium', percent: 55 },
      { name: 'Firebase', level: 'Basic', percent: 40 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 'Medium', percent: 65 },
      { name: 'GitHub', level: 'Medium', percent: 70 },
      { name: 'VS Code', level: 'Medium', percent: 80 },
      { name: 'Postman', level: 'Medium', percent: 60 },
      { name: 'Turbo Monorepo', level: 'Basic', percent: 45 },
    ],
  },
  {
    title: 'IoT',
    skills: [
      { name: 'ESP32', level: 'Medium', percent: 55 },
      { name: 'Arduino', level: 'Medium', percent: 55 },
      { name: 'DHT22 Sensor', level: 'Medium', percent: 50 },
      { name: 'Relay', level: 'Basic', percent: 40 },
      { name: 'Raspberry Pi', level: 'Basic', percent: 30 },
    ],
  },
]

const softSkills = [
  { name: 'Communication', icon: 'chat' },
  { name: 'Teamwork', icon: 'users' },
  { name: 'Problem Solving', icon: 'puzzle' },
  { name: 'Fast Learner', icon: 'zap' },
  { name: 'Adaptability', icon: 'refresh' },
]

const softSkillIcons: Record<string, React.ReactNode> = {
  chat: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  ),
  users: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  puzzle: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.611a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.315 8.685a.98.98 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.611-1.611a2.404 2.404 0 0 1 1.704-.706c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.969a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  ),
  zap: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  ),
  refresh: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  ),
}

function SkillBar({ skill, inView }: { skill: Skill; inView: boolean }) {
  const levelColor =
    skill.level === 'Medium' ? 'text-accent-cyan bg-accent-cyan' : 'text-accent-amber bg-accent-amber'
  const badgeColor =
    skill.level === 'Medium'
      ? 'border-accent-cyan/30 text-accent-cyan'
      : 'border-accent-amber/30 text-accent-amber'

  return (
    <div className="glass-card rounded-lg p-3 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-text-primary">{skill.name}</span>
        <span
          className={`text-[10px] font-[var(--font-mono)] px-2 py-0.5 rounded-full border ${badgeColor}`}
        >
          {skill.level}
        </span>
      </div>
      <div className="h-1 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.percent}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className={`h-full rounded-full ${levelColor}`}
          style={{ opacity: 0.7 }}
        />
      </div>
    </div>
  )
}

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState<'technical' | 'soft'>('technical')

  return (
    <section id="skills" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-48 shrink-0"
          >
            <span className="font-[var(--font-display)] text-8xl lg:text-9xl font-black text-accent-cyan/10 select-none leading-none">
              03
            </span>
            <p className="font-[var(--font-mono)] text-xs text-text-muted mt-2 tracking-widest uppercase">
              Skills
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-[var(--font-display)] text-3xl lg:text-4xl font-bold text-text-primary mb-2">
              Skills & Capabilities
            </h2>
            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-accent-cyan to-accent-amber" />
          </motion.div>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-0 mb-10 border-b border-white/10"
        >
          {(['technical', 'soft'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-[var(--font-mono)] transition-colors relative ${
                activeTab === tab
                  ? 'text-accent-cyan'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {tab === 'technical' ? 'Technical' : 'Soft Skills'}
              {activeTab === tab && (
                <motion.div
                  layoutId="skills-tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-cyan"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Technical skills grid */}
        {activeTab === 'technical' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-10"
          >
            {technicalSkills.map((category) => (
              <div key={category.title}>
                <h3 className="font-[var(--font-mono)] text-xs text-accent-amber uppercase tracking-widest mb-4">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} inView={isInView} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Soft skills */}
        {activeTab === 'soft' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-hover rounded-xl p-8 flex flex-col items-center text-center gap-4"
              >
                <span className="text-accent-cyan">{softSkillIcons[skill.icon]}</span>
                <h4 className="font-[var(--font-display)] text-lg font-semibold text-text-primary">
                  {skill.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
