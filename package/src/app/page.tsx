import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Education from '@/components/Home/Education';
import WorkProgress from '@/components/Home/WorkProgress';
import Experience from '@/components/Home/Experience';
import Portfolio from '@/components/SharedComponent/portfollio'
import Certificates from '@/components/Home/Certificates';

export const metadata: Metadata = {
  title: "Alex Morgan | Senior Full Stack Developer",
  description: "Professional portfolio and CV of Alex Morgan, a Senior Full Stack Developer specializing in React, Next.js, and modern web technologies.",
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