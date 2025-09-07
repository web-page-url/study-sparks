

'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
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

  const handleDemoClick = () => {
    setIsDemoFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Demo Form Modal */}
      <DemoForm
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
      />

      {/* Page Sections */}
      <Hero onDemoClick={handleDemoClick} />
      <Features />
      <About />
      <Subjects />
      <LiveClasses />
      <Community />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />

      {/* Utility Components */}
      <ScrollToTop />
      <Chatbot />
    </div>
  );
}
