'use client';

import { motion } from 'framer-motion';
import { Download, Smartphone as SmartphoneIcon } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6 neon-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Start Learning Today!
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join thousands of students already learning with Study Sparks
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="btn-primary text-lg px-8 py-4 flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SmartphoneIcon className="w-6 h-6" />
            Download for Android
          </motion.button>

          <motion.button
            className="btn-secondary text-lg px-8 py-4 flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-6 h-6" />
            Download for iOS
          </motion.button>
        </motion.div>

        {/* App preview mockup */}
        <motion.div
          className="relative mx-auto max-w-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="card-glass p-6 rounded-3xl">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <SmartphoneIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Study Sparks App</h3>
              <p className="text-gray-300 text-sm mb-4">Learn anywhere, anytime</p>
              <div className="flex justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-blue-500 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            className="absolute -top-4 -right-4 text-4xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            📚
          </motion.div>
          <motion.div
            className="absolute -bottom-4 -left-4 text-3xl"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            🎯
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
