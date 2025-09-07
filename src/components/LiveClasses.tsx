'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface LiveClassesProps {
  isDark?: boolean;
}

export default function LiveClasses({ isDark = false }: LiveClassesProps) {
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
            <div className={`p-8 rounded-2xl border transition-all duration-300 ${
              isDark
                ? 'bg-gray-800/80 backdrop-blur-lg border-gray-700/50'
                : 'bg-white/90 backdrop-blur-lg border-gray-200/50 shadow-xl'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}>Live Class in Progress</h3>
                  <p className={`${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>Mathematics • Grade 8 • 25 students</p>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2 mb-4">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    👤
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                    👨‍🏫
                  </div>
                  <div>
                    <p className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>Prof. Sharma</p>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>Expert Teacher</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    isDark ? 'text-green-400' : 'text-green-600'
                  }`}>🔴 LIVE</p>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>45:23 remaining</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark
                ? 'neon-text'
                : 'bg-gradient-to-r from-violet-800 to-purple-800 bg-clip-text text-transparent'
            }`}>
              Interactive Live Classes
            </h2>
            <p className={`text-xl mb-6 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Learn with India's Best Teachers in real-time interactive sessions.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className={`${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>Real-time doubt clearing with expert teachers</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className={`${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>Interactive whiteboard and collaborative learning</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className={`${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>Small batch sizes for personalized attention</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className={`${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>Recorded sessions for later revision</span>
              </li>
            </ul>
            <motion.button
              className="btn-primary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Live Class
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
