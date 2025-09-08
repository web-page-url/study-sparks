'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Calculator, TestTube, BookOpen, Brain, Zap, Star, Users, Clock, Trophy } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function SubjectsPage() {
  const subjects = [
    {
      name: "Coding",
      icon: Code,
      description: "Learn to build apps, games, and websites using Python, JavaScript, and more.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      features: ["Interactive Projects", "Real-world Applications", "Game Development"],
      difficulty: "Beginner to Advanced",
      duration: "Flexible",
      students: "15K+"
    },
    {
      name: "Mathematics",
      icon: Calculator,
      description: "Master numbers, algebra, geometry, and statistics with fun, visual learning.",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      features: ["Visual Learning", "Problem Solving", "Real-world Math"],
      difficulty: "All Levels",
      duration: "Comprehensive",
      students: "18K+"
    },
    {
      name: "Science",
      icon: TestTube,
      description: "Explore physics, chemistry, and biology through exciting experiments and discoveries.",
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
      features: ["Virtual Labs", "Hands-on Experiments", "Scientific Method"],
      difficulty: "Interactive Learning",
      duration: "Semester-long",
      students: "12K+"
    },
    {
      name: "English",
      icon: BookOpen,
      description: "Improve reading, writing, grammar, and communication skills with engaging content.",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      features: ["Literature Analysis", "Creative Writing", "Public Speaking"],
      difficulty: "Progressive Learning",
      duration: "Structured",
      students: "20K+"
    },
    {
      name: "Artificial Intelligence",
      icon: Brain,
      description: "Discover the future of technology with AI, machine learning, and robotics.",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      features: ["AI Ethics", "Machine Learning", "Future Tech"],
      difficulty: "Advanced Concepts",
      duration: "Exploratory",
      students: "8K+"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Interactive Learning",
      description: "Engage with hands-on projects and real-world applications."
    },
    {
      icon: Users,
      title: "Expert Teachers",
      description: "Learn from certified educators with years of experience."
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Study at your own pace with 24/7 access to materials."
    },
    {
      icon: Trophy,
      title: "Achievement System",
      description: "Earn badges and certificates as you progress through subjects."
    }
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
              <BookOpen className="w-4 h-4" />
              Our Curriculum
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-violet-800 via-purple-800 to-indigo-800 bg-clip-text text-transparent">
              Explore Our Subjects
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover comprehensive courses designed to make learning engaging, interactive, and effective for students of all ages.
            </p>
          </motion.div>

          {/* Subject Overview Stats */}
          <motion.div
            className="grid md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { value: "5", label: "Core Subjects" },
              { value: "50+", label: "Interactive Modules" },
              { value: "100K+", label: "Learning Hours" },
              { value: "73K+", label: "Total Students" }
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

      {/* Subjects Grid */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.name}
                className={`bg-gradient-to-br ${subject.bgColor} rounded-3xl p-8 shadow-xl border border-white/50 overflow-hidden relative group`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className={`w-32 h-32 bg-gradient-to-r ${subject.color} rounded-full absolute top-0 right-0 transform translate-x-16 -translate-y-16`} />
                  <div className={`w-24 h-24 bg-gradient-to-r ${subject.color} rounded-full absolute bottom-0 left-0 transform -translate-x-12 translate-y-12`} />
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${subject.color} rounded-2xl flex items-center justify-center mb-6 relative z-10`}>
                  {(() => {
                    const IconComponent = subject.icon;
                    return <IconComponent className="w-8 h-8 text-white" />;
                  })()}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{subject.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{subject.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {subject.features.map((feature) => (
                        <span
                          key={feature}
                          className="bg-white/60 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Difficulty</div>
                      <div className="font-semibold text-gray-800 text-sm">{subject.difficulty}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Students</div>
                      <div className="font-semibold text-gray-800 text-sm">{subject.students}</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    className={`w-full bg-gradient-to-r ${subject.color} text-white py-3 px-6 rounded-xl font-semibold hover:opacity-90 transition-opacity`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore {subject.name}
                  </motion.button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Learning Features */}
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
              Why Choose Our Subjects?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our curriculum is designed with modern learning principles and cutting-edge technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-white/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {(() => {
                  const IconComponent = feature.icon;
                  return <IconComponent className="w-12 h-12 text-violet-600 mx-auto mb-4" />;
                })()}
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
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
              Your Learning Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Progress through our structured curriculum with clear milestones and achievements.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  level: "Foundation",
                  description: "Build strong basics with interactive lessons and quizzes.",
                  duration: "2-3 months",
                  skills: ["Basic Concepts", "Fundamental Skills", "Learning Habits"]
                },
                {
                  level: "Intermediate",
                  description: "Apply knowledge through projects and real-world scenarios.",
                  duration: "3-6 months",
                  skills: ["Advanced Concepts", "Problem Solving", "Creative Projects"]
                },
                {
                  level: "Advanced",
                  description: "Master complex topics and create innovative solutions.",
                  duration: "6+ months",
                  skills: ["Expert Knowledge", "Innovation", "Leadership"]
                }
              ].map((stage, index) => (
                <div key={stage.level} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{stage.level}</h3>
                  <p className="text-gray-600 mb-4">{stage.description}</p>
                  <div className="text-sm text-violet-600 font-medium mb-4">{stage.duration}</div>
                  <div className="space-y-2">
                    {stage.skills.map((skill) => (
                      <div key={skill} className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
              Ready to Start Your Learning Adventure?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Choose your favorite subject and begin your educational journey today.
            </p>
            <motion.button
              className="bg-white text-violet-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Subjects
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
