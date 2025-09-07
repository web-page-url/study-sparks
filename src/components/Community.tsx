'use client';

import { motion } from 'framer-motion';
import { Award, Sparkles } from 'lucide-react';

interface CommunityProps {
  isDark?: boolean;
}

export default function Community({ isDark = false }: CommunityProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
            Join Our Learning Community
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Compete, collaborate, and celebrate achievements together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Leaderboard */}
          <motion.div
            className="card-glass p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              <Award className="w-8 h-8 text-yellow-500" />
              Top Learners This Week
            </h3>
            <div className="space-y-4">
              {[
                { name: "Arjun S.", points: 2850, avatar: "👦", badge: "🥇" },
                { name: "Priya M.", points: 2720, avatar: "👧", badge: "🥈" },
                { name: "Rohan K.", points: 2680, avatar: "👦", badge: "🥉" },
                { name: "Sneha R.", points: 2540, avatar: "👧", badge: "⭐" },
                { name: "Vikram T.", points: 2490, avatar: "👦", badge: "⭐" }
              ].map((student, index) => (
                <motion.div
                  key={student.name}
                  className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${
                    isDark
                      ? 'bg-white/5 hover:bg-white/10'
                      : 'bg-violet-50 hover:bg-violet-100'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl">{student.badge}</div>
                  <div className="text-3xl">{student.avatar}</div>
                  <div className="flex-1">
                    <p className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>{student.name}</p>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>{student.points} points</p>
                  </div>
                  <div className={`font-bold ${
                    isDark ? 'text-yellow-500' : 'text-yellow-600'
                  }`}>#{index + 1}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project Showcase */}
          <motion.div
            className="card-glass p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              <Sparkles className="w-8 h-8 text-purple-500" />
              Student Projects
            </h3>
            <div className="space-y-6">
              {[
                { title: "Weather App", author: "Arjun, Grade 8", likes: 45, emoji: "🌤️" },
                { title: "Math Quiz Game", author: "Priya, Grade 7", likes: 38, emoji: "🧮" },
                { title: "AI Chatbot", author: "Rohan, Grade 9", likes: 52, emoji: "🤖" }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  className={`p-4 rounded-lg transition-colors ${
                    isDark
                      ? 'bg-white/5 hover:bg-white/10'
                      : 'bg-violet-50 hover:bg-violet-100'
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-2xl">{project.emoji}</div>
                    <h4 className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>{project.title}</h4>
                  </div>
                  <p className={`text-sm mb-3 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>{project.author}</p>
                  <div className="flex items-center gap-2">
                    <span className={`${
                      isDark ? 'text-red-400' : 'text-red-500'
                    }`}>❤️ {project.likes}</span>
                    <span className={`${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>•</span>
                    <span className={`${
                      isDark ? 'text-green-400' : 'text-green-600'
                    }`}>Featured</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
