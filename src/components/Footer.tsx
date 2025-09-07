'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  isDark?: boolean;
}

export default function Footer({ isDark = false }: FooterProps) {
  return (
    <footer className={`transition-all duration-500 ${
      isDark
        ? 'bg-gray-900 border-t border-white/10'
        : 'bg-violet-100 border-t border-violet-200'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className={`text-2xl font-bold ${
                isDark ? 'neon-text' : 'text-gray-800'
              }`}>Study Sparks</h3>
            </div>
            <p className={`mb-6 max-w-md ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Making world-class education accessible, engaging, and fun for every child.
              Join thousands of students learning Coding, Math, Science, English, and AI.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  isDark
                    ? 'bg-white/10 hover:bg-white/20'
                    : 'bg-violet-100 hover:bg-violet-200 text-gray-700'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-lg">📘</span>
              </motion.a>
              <motion.a
                href="#"
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  isDark
                    ? 'bg-white/10 hover:bg-white/20'
                    : 'bg-violet-100 hover:bg-violet-200 text-gray-700'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-lg">🐦</span>
              </motion.a>
              <motion.a
                href="#"
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  isDark
                    ? 'bg-white/10 hover:bg-white/20'
                    : 'bg-violet-100 hover:bg-violet-200 text-gray-700'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-lg">📷</span>
              </motion.a>
              <motion.a
                href="#"
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  isDark
                    ? 'bg-white/10 hover:bg-white/20'
                    : 'bg-violet-100 hover:bg-violet-200 text-gray-700'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-lg">💼</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className={`text-lg font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "#" },
                { name: "Our Teachers", href: "#" },
                { name: "Subjects", href: "#" },
                { name: "Live Classes", href: "#" },
                { name: "Community", href: "#" }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`transition-colors ${
                      isDark
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className={`text-lg font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>Support</h4>
            <ul className="space-y-3">
              {[
                { name: "Help Center", href: "#" },
                { name: "Contact Us", href: "#" },
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
                { name: "Careers", href: "#" }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`transition-colors ${
                      isDark
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          className={`pt-8 mb-8 ${
            isDark ? 'border-t border-white/10' : 'border-t border-violet-200'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="max-w-md">
            <h4 className={`text-lg font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>Stay Updated</h4>
            <p className={`mb-4 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Get the latest updates on new features and learning resources.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                  isDark
                    ? 'bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500'
                    : 'bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-violet-500'
                }`}
              />
              <motion.button
                className="btn-primary px-6 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Mail className={`w-5 h-5 ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`} />
            <span className={`${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>hello@studysparks.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className={`w-5 h-5 ${
              isDark ? 'text-green-400' : 'text-green-600'
            }`} />
            <span className={`${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>+91 9736211316</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className={`w-5 h-5 ${
              isDark ? 'text-purple-400' : 'text-purple-600'
            }`} />
            <span className={`${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>Nautanwa, Maharajganj</span>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className={`pt-8 flex flex-col md:flex-row justify-between items-center gap-4 ${
            isDark ? 'border-t border-white/10' : 'border-t border-violet-200'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className={`text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © 2025 Study Sparks. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className={`transition-colors ${
              isDark
                ? 'text-gray-400 hover:text-white'
                : 'text-gray-600 hover:text-gray-800'
            }`}>
              Privacy Policy
            </a>
            <a href="#" className={`transition-colors ${
              isDark
                ? 'text-gray-400 hover:text-white'
                : 'text-gray-600 hover:text-gray-800'
            }`}>
              Terms of Service
            </a>
            <a href="#" className={`transition-colors ${
              isDark
                ? 'text-gray-400 hover:text-white'
                : 'text-gray-600 hover:text-gray-800'
            }`}>
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
