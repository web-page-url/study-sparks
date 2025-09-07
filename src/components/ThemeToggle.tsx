'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
  return (
    <motion.button
      onClick={onToggle}
      className={`fixed top-6 right-6 z-50 w-14 h-14 rounded-full shadow-xl backdrop-blur-md border-2 transition-all duration-300 ${
        isDark
          ? 'bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 border-white/20 text-white shadow-violet-500/25'
          : 'bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 border-violet-200 text-white shadow-violet-300/50'
      }`}
      whileHover={{
        scale: 1.1,
        boxShadow: isDark
          ? "0 20px 40px rgba(139, 92, 246, 0.4), 0 0 20px rgba(236, 72, 153, 0.3)"
          : "0 20px 40px rgba(139, 92, 246, 0.3), 0 0 20px rgba(168, 85, 247, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      animate={{
        rotate: isDark ? 0 : 180,
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 360 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <motion.div
          animate={{
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.5,
            rotate: isDark ? 0 : 180
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <Moon className="w-6 h-6" />
        </motion.div>

        <motion.div
          animate={{
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.5 : 1,
            rotate: isDark ? -180 : 0
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <Sun className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Animated background particles */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <motion.div
          className={`absolute top-2 left-2 w-2 h-2 rounded-full ${
            isDark ? 'bg-pink-300' : 'bg-yellow-300'
          }`}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full ${
            isDark ? 'bg-purple-300' : 'bg-orange-300'
          }`}
          animate={{
            y: [0, 15, 0],
            x: [0, -8, 0],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div
          className={`absolute top-3 right-3 w-1 h-1 rounded-full ${
            isDark ? 'bg-violet-300' : 'bg-pink-300'
          }`}
          animate={{
            y: [0, -15, 0],
            x: [0, -12, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
