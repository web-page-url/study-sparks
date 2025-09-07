'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

interface ScrollToTopProps {
  isDark?: boolean;
}

export default function ScrollToTop({ isDark = false }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-white/30"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 20px 40px rgba(139, 92, 246, 0.6), 0 0 20px rgba(236, 72, 153, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-violet-400 opacity-0 hover:opacity-30 rounded-full blur-md transition-opacity duration-300"></div>

          {/* Pulsing ring */}
          <motion.div
            className="absolute inset-0 border-2 border-violet-300 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <ChevronUp className="w-8 h-8 text-white mx-auto relative z-10" />

          {/* Notification dot */}
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full border border-white"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
