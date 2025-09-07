'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function LiveClasses() {
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
            <div className="card-glass p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Live Class in Progress</h3>
                  <p className="text-gray-300">Mathematics • Grade 8 • 25 students</p>
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
                    <p className="text-white font-semibold">Prof. Sharma</p>
                    <p className="text-gray-400 text-sm">Expert Teacher</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-green-400 font-semibold">🔴 LIVE</p>
                  <p className="text-gray-400 text-sm">45:23 remaining</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
              Interactive Live Classes
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Learn with India's Best Teachers in real-time interactive sessions.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-300">Real-time doubt clearing with expert teachers</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">Interactive whiteboard and collaborative learning</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-300">Small batch sizes for personalized attention</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-300">Recorded sessions for later revision</span>
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
