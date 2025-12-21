import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import dynamic from 'next/dynamic';

const Education = dynamic(() => import('@/components/Home/Education'));
const WorkProgress = dynamic(() => import('@/components/Home/WorkProgress'));
const Experience = dynamic(() => import('@/components/Home/Experience'));
const Portfolio = dynamic(() => import('@/components/SharedComponent/portfollio'));
const Certificates = dynamic(() => import('@/components/Home/Certificates'));

export const metadata: Metadata = {
  title: "Rohmat Choiruly Anwar | Full Stack Developer",
  description: "Professional portfolio and CV of Rohmat Choiruly Anwar, a Full Stack Developer specializing in React, Next.js, and modern web technologies.",
};

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Hero />
      <Experience />
      <WorkProgress isColorMode={false} />
      <Education />
      <Certificates />
      <Portfolio />
    </main>
  )
}