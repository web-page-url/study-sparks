'use client';

import { motion } from 'framer-motion';
import { Download, Smartphone as SmartphoneIcon } from 'lucide-react';

interface CTAProps {
  isDark?: boolean;
}

export default function CTA({ isDark = false }: CTAProps) {
  return (
    <section className={`py-20 px-6 transition-all duration-500 ${
      isDark
        ? 'bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900'
        : 'bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50'
    }`}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className={`text-4xl md:text-6xl font-bold mb-6 ${
            isDark
              ? 'neon-text'
              : 'bg-gradient-to-r from-violet-800 to-purple-800 bg-clip-text text-transparent'
          }`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Start Learning Today!
        </motion.h2>

        <motion.p
          className={`text-xl md:text-2xl mb-12 max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}
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
            className={`group text-lg px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 flex items-center gap-3 relative ${
              isDark
                ? 'text-white bg-gradient-to-r from-violet-600 to-purple-600'
                : 'text-white bg-gradient-to-r from-violet-500 to-purple-500'
            }`}
            whileHover={{
              scale: 1.05,
              boxShadow: isDark
                ? "0 10px 25px rgba(139, 92, 246, 0.4)"
                : "0 10px 25px rgba(139, 92, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated background gradient */}
            <motion.div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isDark
                  ? 'bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500'
                  : 'bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600'
              }`}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            />
            <SmartphoneIcon className="w-6 h-6 relative z-10" />
            <span className="relative z-10">Download for Android</span>
          </motion.button>

          <motion.button
            className={`text-lg px-8 py-4 rounded-full font-semibold backdrop-filter backdrop-blur-lg transition-all duration-300 flex items-center gap-3 ${
              isDark
                ? 'text-white border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30'
                : 'text-gray-800 border border-violet-300 bg-violet-50 hover:bg-violet-100 hover:border-violet-400'
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className={`w-6 h-6 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`} />
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
              <h3 className={`text-xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>Study Sparks App</h3>
              <p className={`text-sm mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>Learn anywhere, anytime</p>
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
