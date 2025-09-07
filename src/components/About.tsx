'use client';

import { motion } from 'framer-motion';

interface AboutProps {
  isDark?: boolean;
}

export default function About({ isDark = false }: AboutProps) {
  return (
    <section className={`py-20 px-6 transition-all duration-500 ${
      isDark
        ? 'bg-gradient-to-r from-gray-900 to-black'
        : 'bg-gradient-to-r from-violet-50 to-purple-50'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark
                ? 'neon-text'
                : 'bg-gradient-to-r from-violet-800 to-purple-800 bg-clip-text text-transparent'
            }`}>
              Making World-Class Education
            </h2>
            <p className={`text-xl mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Accessible, engaging, and fun for every child.
            </p>
            <p className={`text-lg mb-8 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              We believe every child deserves access to world-class education that sparks curiosity and builds real skills.
              Our expert teachers and AI-powered platform create personalized learning experiences that adapt to each child's pace and interests.
            </p>
            <motion.div
              className="flex gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className={`text-3xl font-bold ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>50K+</div>
                <div className={`${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>Happy Students</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold ${
                  isDark ? 'text-green-400' : 'text-green-600'
                }`}>100+</div>
                <div className={`${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>Expert Teachers</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold ${
                  isDark ? 'text-purple-400' : 'text-purple-600'
                }`}>5</div>
                <div className={`${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>Core Subjects</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full opacity-20"
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <div className="card-glass p-8 text-center">
                <div className="text-6xl mb-4">👨‍🏫</div>
                <h3 className={`text-2xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}>Expert Teachers</h3>
                <p className={`${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>Learn from India's best educators</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
