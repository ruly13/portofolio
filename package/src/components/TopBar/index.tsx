'use client'

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Icon } from '@iconify/react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"

// Asumsikan komponen ini ada di project Anda
import Logo from "../Home/Hero/Logo"
import { LanguageSwitcher } from "../LanguageSwitcher"

const TopBar = () => {
    const { theme, setTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Daftar Menu Navigasi (Edit di sini)
    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Experience", href: "#experience" },
        { name: "Education", href: "#education" },
        { name: "Portfolio", href: "#portfolio" },
    ];
    
    const { scrollY } = useScroll();

    useEffect(() => {
        setMounted(true);
    }, []);

    // Logic untuk mendeteksi scroll
    useMotionValueEvent(scrollY, "change", (latest) => {
        const isScrolled = latest > 20;
        setScrolled(isScrolled);
        // Opsional: Tutup menu mobile jika user scroll saat menu terbuka
        // if (isScrolled) setIsMobileMenuOpen(false); 
    });

    if (!mounted) return <div className="h-20" />;

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
                scrolled || isMobileMenuOpen
                ? 'bg-white/70 dark:bg-slate-950/80 backdrop-blur-xl backdrop-saturate-150 border-b border-white/50 dark:border-slate-800/50 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none' 
                : 'bg-transparent py-5 border-b border-transparent'
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    
                    {/* --- LOGO --- */}
                    <div className="flex-shrink-0 cursor-pointer z-50">
                        <Logo />
                    </div>

                    {/* --- DESKTOP NAVIGATION (Hidden di Mobile) --- */}
                    <nav className="hidden md:flex gap-8 items-center">
                        {navLinks.map((item) => (
                            <Link 
                                key={item.name} 
                                href={item.href} 
                                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 dark:hover:text-blue-400 transition-all duration-300 relative group"
                            >
                                {item.name}
                                {/* Underline Animation */}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* --- RIGHT ACTIONS (Lang + Theme + Hamburger) --- */}
                    <div className="flex items-center gap-3 z-50">
                        <div className="hidden sm:block">
                            <LanguageSwitcher />
                        </div>
                        
                        {/* Theme Toggle */}
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors ring-1 ring-slate-900/5 dark:ring-white/10"
                            aria-label="Toggle Theme"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={theme}
                                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {theme === 'dark' ? (
                                        <Icon icon="heroicons:sun" width="20" />
                                    ) : (
                                        <Icon icon="heroicons:moon" width="20" />
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </button>

                        {/* --- HAMBURGER BUTTON (Visible di Mobile) --- */}
                        <button 
                            className="md:hidden p-2 text-slate-600 dark:text-slate-300 focus:outline-none"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                             <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                    >
                                        <Icon icon="heroicons:x-mark" width="24" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }}
                                    >
                                        <Icon icon="heroicons:bars-3" width="24" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </div>

            {/* --- MOBILE MENU DROPDOWN --- */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                            {navLinks.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                >
                                    <Link 
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)} // Tutup menu saat diklik
                                        className="block text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 border-b border-slate-100 dark:border-slate-800/50"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            
                            {/* Mobile only elements (Language switcher duplicate if needed) */}
                            <div className="pt-4 sm:hidden">
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}

export default TopBar