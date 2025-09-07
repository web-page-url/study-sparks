'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  { text: "My child built her first app in just 3 months! The interactive classes made learning so much fun.", author: "Priya Sharma", role: "Parent", avatar: "👩‍👧" },
  { text: "The AI-powered learning adapts perfectly to my pace. I love competing with friends in coding challenges!", author: "Arjun, Age 12", role: "Student", avatar: "👦" },
  { text: "Finally found a platform that makes complex science concepts easy and exciting for my kids.", author: "Rajesh Kumar", role: "Parent", avatar: "👨‍👩‍👧‍👦" },
  { text: "The live classes with expert teachers are amazing. My math grades improved dramatically!", author: "Sneha, Age 10", role: "Student", avatar: "👧" }
];

interface TestimonialsProps {
  isDark?: boolean;
}

export default function Testimonials({ isDark = false }: TestimonialsProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
            What Our Community Says
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Real stories from students and parents who trust Study Sparks
          </p>
        </motion.div>

        <div className="relative">
          <div className="card-glass p-8 md:p-12 text-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className={`text-xl md:text-2xl mb-8 italic ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  "{testimonials[activeTestimonial].text}"
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-4xl">{testimonials[activeTestimonial].avatar}</div>
                  <div className="text-left">
                    <p className="text-white font-bold text-lg">{testimonials[activeTestimonial].author}</p>
                    <p className="text-gray-400">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Background decoration */}
            <motion.div
              className="absolute top-4 right-4 text-6xl opacity-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              💬
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <motion.button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeTestimonial ? 'bg-blue-500' : 'bg-gray-600'
                }`}
                onClick={() => setActiveTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
