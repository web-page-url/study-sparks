'use client';

import { motion } from 'framer-motion';
import { Smartphone, Sparkles, Award, Brain, Users, Star } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: 'Learn Anywhere on Mobile',
    description: 'Access lessons anytime, anywhere with our mobile-first platform',
    gradient: 'from-violet-500 to-purple-500',
    emoji: '📱',
    bgPattern: 'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)'
  },
  {
    icon: Sparkles,
    title: 'Publish Projects & Apps',
    description: 'Build real projects and share them with the world',
    gradient: 'from-purple-500 to-violet-500',
    emoji: '🚀',
    bgPattern: 'radial-gradient(circle at 70% 30%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)'
  },
  {
    icon: Award,
    title: 'Play, Compete & Win',
    description: 'Gamified learning with challenges and rewards',
    gradient: 'from-indigo-500 to-violet-500',
    emoji: '🏆',
    bgPattern: 'radial-gradient(circle at 30% 70%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)'
  },
  {
    icon: Brain,
    title: 'Personalized AI Learning',
    description: 'Adaptive curriculum that grows with your child',
    gradient: 'from-violet-500 to-indigo-500',
    emoji: '🧠',
    bgPattern: 'radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)'
  },
  {
    icon: Users,
    title: 'Explore All Subjects',
    description: 'Comprehensive learning across Coding, Math, Science, English & AI',
    gradient: 'from-purple-500 to-indigo-500',
    emoji: '🌟',
    bgPattern: 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)'
  }
];

interface FeaturesProps {
  isDark?: boolean;
}

export default function Features({ isDark = false }: FeaturesProps) {
  return (
    <section className={`py-24 px-6 relative overflow-hidden ${
      isDark
        ? 'bg-gradient-to-b from-violet-900/20 via-gray-900/50 to-black'
        : 'bg-gradient-to-b from-violet-50/30 via-purple-50/20 to-gray-50'
    }`}>
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              isDark
                ? 'bg-gradient-to-r from-violet-400 to-purple-400'
                : 'bg-gradient-to-r from-violet-300 to-purple-300'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
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
            className={`inline-flex items-center gap-2 px-6 py-3 backdrop-blur-sm rounded-full border mb-6 ${
              isDark
                ? 'bg-white/5 border-white/10'
                : 'bg-violet-100/80 border-violet-200/50'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Star className="w-5 h-5 text-yellow-400" />
            <span className={`text-sm font-medium ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>Trusted by 50K+ Students</span>
          </motion.div>

          <motion.h2
            className={`text-5xl md:text-6xl font-bold mb-6 ${
              isDark
                ? 'bg-gradient-to-r from-white via-violet-200 to-purple-200 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-violet-800 via-purple-800 to-indigo-800 bg-clip-text text-transparent'
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Why Choose Study Sparks?
          </motion.h2>

          <motion.p
            className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Experience the future of education with our innovative learning platform designed for the next generation
          </motion.p>
        </motion.div>

        {/* Enhanced Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Card Container with Enhanced Effects */}
              <motion.div
                className={`p-8 text-center relative overflow-hidden h-full rounded-3xl border transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-800/80 backdrop-blur-lg border-gray-700/50'
                    : 'bg-white/90 backdrop-blur-lg border-gray-200/50 shadow-xl'
                }`}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 25px 50px rgba(0, 212, 255, 0.15), 0 0 40px rgba(147, 51, 234, 0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Pattern */}
                <div
                  className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                  style={{ background: feature.bgPattern }}
                />

                {/* Floating Emoji */}
                <motion.div
                  className="absolute top-4 right-4 text-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {feature.emoji}
                </motion.div>

                {/* Enhanced Icon */}
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg`}
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      scale: 1.05
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 blur-xl`}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Content */}
                <motion.h3
                  className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                    isDark
                      ? 'text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text'
                      : 'text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-800 group-hover:to-purple-800 group-hover:bg-clip-text'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {feature.title}
                </motion.h3>

                <motion.p
                  className={`leading-relaxed transition-colors duration-300 ${
                    isDark
                      ? 'text-gray-300 group-hover:text-gray-200'
                      : 'text-gray-600 group-hover:text-gray-700'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {feature.description}
                </motion.p>

                {/* Bottom accent */}
                <motion.div
                  className={`w-12 h-1 bg-gradient-to-r ${feature.gradient} mx-auto mt-6 rounded-full opacity-60 group-hover:opacity-100 group-hover:w-16 transition-all duration-300`}
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
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
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className={`font-medium ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>Join 50K+ students learning with Study Sparks</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
