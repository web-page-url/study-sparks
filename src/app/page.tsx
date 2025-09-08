

'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import MeetTeachers from '@/components/MeetTeachers';
import ThemeToggle from '@/components/ThemeToggle';
import Subjects from '@/components/Subjects';
import LiveClasses from '@/components/LiveClasses';
import Community from '@/components/Community';
import Testimonials from '@/components/Testimonials';
import DemoForm from '@/components/DemoForm';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  const [isDark, setIsDark] = useState(false); // Default to light mode

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleDemoClick = () => {
    setIsDemoFormOpen(true);
  };

  const handleThemeToggle = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className={`min-h-screen overflow-x-hidden transition-all duration-500 ${
      isDark
        ? 'bg-gray-900 text-white'
        : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Theme Toggle */}
      <ThemeToggle isDark={isDark} onToggle={handleThemeToggle} />

      {/* Demo Form Modal */}
      <DemoForm
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
        isDark={isDark}
      />

      {/* Page Sections */}
      <Hero onDemoClick={handleDemoClick} isDark={isDark} />
      <Features isDark={isDark} />
      {/* <About isDark={isDark} /> */}
      <MeetTeachers isDark={isDark} />
      <Subjects isDark={isDark} />
      <LiveClasses isDark={isDark} />
      <Community isDark={isDark} />
      <Testimonials isDark={isDark} />
      <CTA isDark={isDark} />
      <FAQ isDark={isDark} />
      <Footer isDark={isDark} />

      {/* Utility Components */}
      <ScrollToTop isDark={isDark} />
      <Chatbot isDark={isDark} />
    </div>
  );
}
