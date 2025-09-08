'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, BookOpen, Users, GraduationCap, Clock, Mail, Phone } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function TeachersPage() {
  const teachers = [
    {
      name: "Dr. Priya Sharma",
      role: "Mathematics Expert",
      experience: "12+ years",
      subjects: ["Mathematics", "Statistics", "Data Analysis"],
      rating: 4.9,
      students: 2500,
      image: "👩‍🏫",
      qualifications: "Ph.D. in Mathematics, M.Ed. in Curriculum Development",
      bio: "Passionate about making math fun and accessible. Specializes in adaptive learning techniques.",
      achievements: ["Best Teacher Award 2023", "Published 15 research papers", "TEDx Speaker"]
    },
    {
      name: "Rajesh Kumar",
      role: "Coding & AI Specialist",
      experience: "10+ years",
      subjects: ["Python", "JavaScript", "AI & Machine Learning"],
      rating: 4.8,
      students: 3200,
      image: "👨‍💻",
      qualifications: "M.Tech in Computer Science, Certified AI Developer",
      bio: "Former Google engineer turned educator. Loves teaching kids to build their own apps.",
      achievements: ["Google Certified Developer", "Built 50+ student apps", "Hackathon Winner"]
    },
    {
      name: "Dr. Meera Patel",
      role: "Science Educator",
      experience: "15+ years",
      subjects: ["Physics", "Chemistry", "Biology"],
      rating: 4.9,
      students: 2800,
      image: "👩‍🔬",
      qualifications: "Ph.D. in Physics, M.Sc. in Chemistry",
      bio: "Makes complex science concepts simple and exciting through hands-on experiments.",
      achievements: ["Science Fair Judge", "Published 20+ articles", "STEM Ambassador"]
    },
    {
      name: "Arun Singh",
      role: "English Language Expert",
      experience: "8+ years",
      subjects: ["English Grammar", "Literature", "Communication"],
      rating: 4.7,
      students: 1900,
      image: "👨‍🎓",
      qualifications: "M.A. in English Literature, TESOL Certified",
      bio: "Helps students master English while building confidence in communication.",
      achievements: ["IELTS Expert", "Debate Coach", "Published Author"]
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
              <GraduationCap className="w-4 h-4" />
              Expert Educators
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-violet-800 via-purple-800 to-indigo-800 bg-clip-text text-transparent">
              Meet Our Teachers
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Learn from industry experts, published researchers, and passionate educators who make complex subjects simple and fun.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { icon: Users, value: "100+", label: "Expert Teachers" },
              { icon: Star, value: "4.8+", label: "Average Rating" },
              { icon: BookOpen, value: "50K+", label: "Students Taught" },
              { icon: Award, value: "25+", label: "Awards Won" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/50"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {(() => {
                  const IconComponent = stat.icon;
                  return <IconComponent className="w-8 h-8 text-violet-600 mx-auto mb-3" />;
                })()}
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {teachers.map((teacher, index) => (
              <motion.div
                key={teacher.name}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Teacher Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                    {teacher.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{teacher.name}</h3>
                    <p className="text-violet-600 font-semibold mb-2">{teacher.role}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {teacher.experience}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {teacher.students.toLocaleString()}+ students
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-semibold text-gray-800">{teacher.rating}</span>
                    </div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>

                {/* Qualifications */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Qualifications</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{teacher.qualifications}</p>
                </div>

                {/* Subjects */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Specializes in</h4>
                  <div className="flex flex-wrap gap-2">
                    {teacher.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">About</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{teacher.bio}</p>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Achievements</h4>
                  <div className="space-y-2">
                    {teacher.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-center gap-2 text-sm text-gray-600">
                        <Award className="w-4 h-4 text-violet-500 flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <motion.button
                    className="flex-1 bg-violet-100 hover:bg-violet-200 text-violet-700 px-4 py-2 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail className="w-4 h-4" />
                    Message
                  </motion.button>
                  <motion.button
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-4 h-4" />
                    Schedule
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Teaching Philosophy */}
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
              Our Teaching Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We believe in personalized, engaging education that adapts to each student's learning style and pace.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Learning",
                description: "Every student learns differently. Our teachers adapt their teaching methods to match each student's unique learning style and pace.",
                icon: "🎯"
              },
              {
                title: "Interactive Engagement",
                description: "Learning should be fun! We use games, projects, and real-world applications to keep students engaged and motivated.",
                icon: "🎮"
              },
              {
                title: "Continuous Support",
                description: "Our teachers provide ongoing feedback, encouragement, and additional support to ensure every student succeeds.",
                icon: "🤝"
              }
            ].map((philosophy, index) => (
              <motion.div
                key={philosophy.title}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl border border-white/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-5xl mb-6">{philosophy.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{philosophy.title}</h3>
                <p className="text-gray-600 leading-relaxed">{philosophy.description}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to Learn from Our Expert Teachers?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book a free demo class and experience personalized education at its finest.
            </p>
            <motion.button
              className="bg-white text-violet-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Free Demo
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
