'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
              Making World-Class Education
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Accessible, engaging, and fun for every child.
            </p>
            <p className="text-lg text-gray-400 mb-8">
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
                <div className="text-3xl font-bold text-blue-400">50K+</div>
                <div className="text-gray-400">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">100+</div>
                <div className="text-gray-400">Expert Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">5</div>
                <div className="text-gray-400">Core Subjects</div>
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
                <h3 className="text-2xl font-bold mb-2">Expert Teachers</h3>
                <p className="text-gray-300">Learn from India's best educators</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
