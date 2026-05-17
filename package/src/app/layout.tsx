import type { Metadata } from 'next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Syne, JetBrains_Mono, Outfit } from "next/font/google"
import "./globals.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: 'Rohmat Choiruly Anwar | Frontend Developer',
  description: 'Building interfaces that live at the intersection of logic and aesthetics. Frontend Developer specializing in Next.js, React, and TypeScript.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jetbrainsMono.variable} ${outfit.variable} bg-[#080C10]`}
    >
      <body className="bg-bg-darkest text-text-primary font-[var(--font-body)] antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
