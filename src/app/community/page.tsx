'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Star, MessageCircle, Heart, Share2, TrendingUp, Award, Crown, Medal } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function CommunityPage() {
  const leaderboard = [
    {
      rank: 1,
      name: "Arjun Sharma",
      points: 2540,
      avatar: "👨‍🎓",
      badge: "🏆",
      level: "Master Coder",
      streak: 45
    },
    {
      rank: 2,
      name: "Priya Patel",
      points: 2380,
      avatar: "👩‍🔬",
      badge: "🥈",
      level: "Science Wizard",
      streak: 38
    },
    {
      rank: 3,
      name: "Rohan Kumar",
      points: 2190,
      avatar: "👨‍💻",
      badge: "🥉",
      level: "Tech Innovator",
      streak: 32
    },
    {
      rank: 4,
      name: "Ananya Singh",
      points: 2050,
      avatar: "👩‍🎨",
      badge: "🎨",
      level: "Creative Mind",
      streak: 28
    },
    {
      rank: 5,
      name: "Vikram Rao",
      points: 1920,
      avatar: "👨‍🚀",
      badge: "🚀",
      level: "Future Leader",
      streak: 25
    }
  ];

  const projects = [
    {
      title: "AI-Powered Weather App",
      author: "Arjun Sharma",
      avatar: "👨‍🎓",
      likes: 124,
      comments: 18,
      image: "🌤️",
      tags: ["Python", "AI", "Weather"],
      featured: true
    },
    {
      title: "Interactive Math Learning Game",
      author: "Priya Patel",
      avatar: "👩‍🔬",
      likes: 98,
      comments: 12,
      image: "🔢",
      tags: ["JavaScript", "Math", "Games"],
      featured: false
    },
    {
      title: "Sustainable Energy Calculator",
      author: "Rohan Kumar",
      avatar: "👨‍💻",
      likes: 87,
      comments: 15,
      image: "⚡",
      tags: ["Science", "Calculator", "Sustainability"],
      featured: false
    }
  ];

  const badges = [
    { icon: "🏆", name: "Top Performer", description: "Achieved top 10% in weekly challenges" },
    { icon: "🔥", name: "Streak Master", description: "30+ day learning streak" },
    { icon: "🎯", name: "Problem Solver", description: "Solved 100+ complex problems" },
    { icon: "🚀", name: "Fast Learner", description: "Completed 5 subjects in 6 months" },
    { icon: "👑", name: "Community Leader", description: "Helped 50+ fellow students" },
    { icon: "⭐", name: "Star Student", description: "Perfect scores in 10+ assessments" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 via-indigo-50 to-purple-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-4 h-4" />
              Learning Community
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-violet-800 via-purple-800 to-indigo-800 bg-clip-text text-transparent">
              Join Our Community
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Connect with fellow learners, share your projects, compete on leaderboards, and grow together in our vibrant educational community.
            </p>
          </motion.div>

          {/* Community Stats */}
          <motion.div
            className="grid md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { value: "50K+", label: "Active Members" },
              { value: "10K+", label: "Projects Shared" },
              { value: "25K+", label: "Daily Interactions" },
              { value: "500+", label: "Weekly Challenges" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/50"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-3xl font-bold text-violet-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-violet-800 to-purple-800 bg-clip-text text-transparent">
              🏆 Weekly Leaderboard
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrate the achievements of our top performers this week.
            </p>
          </motion.div>

          <div className="space-y-4">
            {leaderboard.map((student, index) => (
              <motion.div
                key={student.name}
                className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 ${
                  student.rank <= 3 ? 'ring-2 ring-violet-200' : ''
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-6">
                  {/* Rank */}
                  <div className="flex items-center justify-center w-12 h-12">
                    {student.rank === 1 && <Crown className="w-8 h-8 text-yellow-500" />}
                    {student.rank === 2 && <Medal className="w-8 h-8 text-gray-400" />}
                    {student.rank === 3 && <Award className="w-8 h-8 text-amber-600" />}
                    {student.rank > 3 && (
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-bold">
                        {student.rank}
                      </div>
                    )}
                  </div>

                  {/* Avatar & Info */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center text-xl">
                      {student.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-gray-800">{student.name}</h3>
                        <span className="text-lg">{student.badge}</span>
                      </div>
                      <p className="text-violet-600 text-sm font-medium">{student.level}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-800">{student.points.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">points</div>
                    <div className="flex items-center gap-1 text-sm text-orange-600 mt-1">
                      <span className="text-lg">🔥</span>
                      {student.streak} day streak
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-violet-800 to-purple-800 bg-clip-text text-transparent">
              🌟 Featured Student Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover amazing projects created by our talented students.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50 overflow-hidden relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    ⭐ FEATURED
                  </div>
                )}

                {/* Project Preview */}
                <div className="bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl h-32 mb-6 flex items-center justify-center text-6xl">
                  {project.image}
                </div>

                {/* Project Info */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center text-sm">
                      {project.avatar}
                    </div>
                    <span className="text-gray-600 text-sm">by {project.author}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Engagement */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <motion.button
                      className="flex items-center gap-1 text-gray-600 hover:text-red-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{project.likes}</span>
                    </motion.button>
                    <motion.button
                      className="flex items-center gap-1 text-gray-600 hover:text-blue-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{project.comments}</span>
                    </motion.button>
                  </div>
                  <motion.button
                    className="text-gray-600 hover:text-violet-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Share2 className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Badges */}
      <section className="py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-violet-800 to-purple-800 bg-clip-text text-transparent">
              🏅 Achievement Badges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Earn badges by completing challenges and reaching milestones in your learning journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.name}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-white/50"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-5xl mb-4">{badge.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{badge.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{badge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Discussion Forums Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-violet-800 to-purple-800 bg-clip-text text-transparent">
              💬 Discussion Forums
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with fellow learners, ask questions, and share knowledge in our active community forums.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">📚 Study Groups</h3>
                <div className="space-y-3">
                  <div className="bg-violet-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-800">Python Programming Study Group</h4>
                    <p className="text-gray-600 text-sm mt-1">45 members • 12 active discussions</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-800">Mathematics Problem Solvers</h4>
                    <p className="text-gray-600 text-sm mt-1">32 members • 8 active discussions</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-800">Science Experiment Sharing</h4>
                    <p className="text-gray-600 text-sm mt-1">28 members • 15 active discussions</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 Recent Discussions</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-violet-500 pl-4">
                    <h4 className="font-semibold text-gray-800">Best resources for learning AI?</h4>
                    <p className="text-gray-600 text-sm mt-1">Started by Sarah • 23 replies • 2 hours ago</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800">Tips for solving quadratic equations</h4>
                    <p className="text-gray-600 text-sm mt-1">Started by Michael • 15 replies • 4 hours ago</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800">Chemistry lab safety guidelines</h4>
                    <p className="text-gray-600 text-sm mt-1">Started by Emma • 8 replies • 6 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Connect with thousands of learners, share your projects, and grow together.
            </p>
            <motion.button
              className="bg-white text-violet-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Study Sparks Community
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
