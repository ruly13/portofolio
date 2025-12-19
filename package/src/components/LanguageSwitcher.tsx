"use client";
import React from 'react';
import { useLanguage } from "@/context/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-medium transition-colors border border-white/10 backdrop-blur-sm"
      aria-label="Toggle Language"
    >
      {language === 'en' ? 'ID' : 'EN'}
    </button>
  );
};
