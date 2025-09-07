'use client';

import { motion } from 'framer-motion';
import { Code, Calculator, Atom, BookOpen, Brain, Rocket, Target } from 'lucide-react';

const subjects = [
  {
    name: 'Coding',
    icon: Code,
    color: 'from-violet-500 to-purple-500',
    emoji: '💻',
    description: 'Build apps & games',
    bgPattern: 'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
    stats: '25+ Projects'
  },
  {
    name: 'Math',
    icon: Calculator,
    color: 'from-purple-500 to-violet-500',
    emoji: '🔢',
    description: 'Master numbers & logic',
    bgPattern: 'radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)',
    stats: '100+ Concepts'
  },
  {
    name: 'Science',
    icon: Atom,
    color: 'from-indigo-500 to-violet-500',
    emoji: '⚛️',
    description: 'Explore the universe',
    bgPattern: 'radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)',
    stats: '50+ Experiments'
  },
  {
    name: 'English',
    icon: BookOpen,
    color: 'from-violet-500 to-indigo-500',
    emoji: '📖',
    description: 'Read & communicate',
    bgPattern: 'radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
    stats: '1000+ Words'
  },
  {
    name: 'AI',
    icon: Brain,
    color: 'from-purple-500 to-indigo-500',
    emoji: '🤖',
    description: 'Future of learning',
    bgPattern: 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)',
    stats: 'AI Assistant'
  }
];

export default function Subjects() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Enhanced Background - Violet Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/30 via-gray-900/50 to-black" />
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            suppressHydrationWarning
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-white/10 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Rocket className="w-5 h-5 text-violet-400" />
            <span className="text-sm font-medium text-gray-300">5 Comprehensive Subjects</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-purple-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Explore All Subjects
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Master the skills that shape the future across our comprehensive curriculum
          </motion.p>
        </motion.div>

        {/* Enhanced Subject Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.name}
              className="group relative"
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Card Container */}
              <motion.div
                className="card-glass p-8 text-center relative overflow-hidden h-full cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: `0 25px 50px rgba(59, 130, 246, 0.2), 0 0 40px rgba(147, 51, 234, 0.1)`
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Pattern */}
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ background: subject.bgPattern }}
                />

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 left-4 text-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  ✨
                </motion.div>

                <motion.div
                  className="absolute bottom-4 right-4 text-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  animate={{
                    y: [0, -8, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🎯
                </motion.div>

                {/* Enhanced Emoji/Icon */}
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-7xl mb-2"
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {subject.emoji}
                  </motion.div>

                  {/* Icon container */}
                  <motion.div
                    className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${subject.color} flex items-center justify-center shadow-lg`}
                    whileHover={{
                      rotate: [0, -15, 15, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <subject.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-0 w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${subject.color} opacity-0 blur-lg`}
                    whileHover={{ opacity: 0.4 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Content */}
                <motion.h3
                  className="text-3xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 group-hover:bg-clip-text transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {subject.name}
                </motion.h3>

                <motion.p
                  className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {subject.description}
                </motion.p>

                {/* Stats */}
                <motion.div
                  className="flex items-center justify-center gap-2 mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Target className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-medium text-cyan-400">{subject.stats}</span>
                </motion.div>

                {/* Enhanced Button */}
                <motion.button
                  className={`px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${subject.color} hover:shadow-lg transition-all duration-300 relative overflow-hidden`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 10px 30px rgba(59, 130, 246, 0.3)`
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="relative z-10">Explore {subject.name}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                {/* Bottom accent line */}
                <motion.div
                  className={`w-0 h-1 bg-gradient-to-r ${subject.color} mx-auto mt-6 rounded-full group-hover:w-full transition-all duration-500`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-white/10"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-3 h-3 bg-violet-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-gray-300 font-medium">Choose your learning path and start your journey</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
