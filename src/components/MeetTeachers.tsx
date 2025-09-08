'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, BookOpen, Users, GraduationCap } from 'lucide-react';
import Image from 'next/image';

interface MeetTeachersProps {
  isDark?: boolean;
}

interface Teacher {
  id: number;
  name: string;
  subject: string;
  qualification: string;
  experience: string;
  students: string;
  rating: number;
  image: string;
  specialties: string[];
  bio: string;
}

const teachers: Teacher[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    subject: "Mathematics & Physics",
    qualification: "PhD in Mathematics, IIT Delhi",
    experience: "12+ Years",
    students: "5000+",
    rating: 4.9,
    image: "/teacher-1.png",
    specialties: ["Algebra", "Calculus", "Quantum Physics", "Problem Solving"],
    bio: "Passionate about making complex concepts simple and engaging for students."
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    subject: "Computer Science & AI",
    qualification: "M.Tech in CS, Stanford University",
    experience: "15+ Years",
    students: "8000+",
    rating: 5.0,
    image: "/teacher-2.png",
    specialties: ["Python", "Machine Learning", "Data Structures", "Web Development"],
    bio: "AI enthusiast helping students build the future of technology."
  },
  {
    id: 3,
    name: "Ms. Priya Sharma",
    subject: "English & Literature",
    qualification: "M.A. English Literature, Cambridge",
    experience: "10+ Years",
    students: "6500+",
    rating: 4.8,
    image: "/teacher-3.png",
    specialties: ["Creative Writing", "Grammar", "Literature Analysis", "Communication"],
    bio: "Transforming students into confident communicators and storytellers."
  },
  {
    id: 4,
    name: "Dr. Rajesh Kumar",
    subject: "Science & Biology",
    qualification: "PhD in Biotechnology, AIIMS",
    experience: "14+ Years",
    students: "7200+",
    rating: 4.9,
    image: "/teacher-4.png",
    specialties: ["Biology", "Chemistry", "Environmental Science", "Research"],
    bio: "Making science come alive through hands-on learning and real-world applications."
  }
];

const MeetTeachers = ({ isDark = false }: MeetTeachersProps) => {
  return (
    <section className={`py-20 px-4 relative overflow-hidden transition-all duration-500 ${
      isDark
        ? 'bg-gradient-to-br from-slate-900 via-violet-900/20 to-purple-900/20'
        : 'bg-gradient-to-br from-slate-50 via-violet-50 to-purple-50'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute top-10 left-10 w-32 h-32 rounded-full blur-3xl ${
          isDark ? 'bg-violet-600' : 'bg-violet-400'
        }`}></div>
        <div className={`absolute bottom-10 right-10 w-40 h-40 rounded-full blur-3xl ${
          isDark ? 'bg-purple-600' : 'bg-purple-400'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl ${
          isDark ? 'bg-pink-500' : 'bg-pink-300'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <GraduationCap className="w-4 h-4" />
            Meet Our Expert Educators
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Inspiring Minds
            </span>
            <br />
            <span className={isDark ? 'text-white' : 'text-gray-800'}>
              Shaping Futures
            </span>
          </motion.h2>

          <motion.p
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Meet our exceptional team of educators who are passionate about igniting curiosity
            and unlocking the potential in every student through innovative teaching methods.
          </motion.p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {[
            { icon: Users, label: "Happy Students", value: "26,700+", color: "from-blue-500 to-cyan-500" },
            { icon: Award, label: "Expert Teachers", value: "50+", color: "from-green-500 to-emerald-500" },
            { icon: BookOpen, label: "Subjects Covered", value: "25+", color: "from-purple-500 to-violet-500" },
            { icon: Star, label: "Avg. Rating", value: "4.9/5", color: "from-yellow-500 to-orange-500" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`text-center p-6 backdrop-blur-sm rounded-2xl shadow-lg border transition-all duration-300 ${
                isDark
                  ? 'bg-gray-800/80 border-gray-700/50'
                  : 'bg-white/80 border-white/50'
              }`}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center`}>
                {(() => {
                  const IconComponent = stat.icon;
                  return <IconComponent className="w-6 h-6 text-white" />;
                })()}
              </div>
              <div className={`text-2xl font-bold mb-1 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>{stat.value}</div>
              <div className={`text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <motion.div
                className={`rounded-3xl shadow-xl overflow-hidden border hover:shadow-2xl transition-all duration-500 ${
                  isDark
                    ? 'bg-gray-800/90 border-gray-700/50'
                    : 'bg-white border-gray-100'
                }`}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Teacher Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Rating Badge */}
                  <motion.div
                    className={`absolute top-4 right-4 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 ${
                      isDark
                        ? 'bg-gray-700/90 text-gray-800'
                        : 'bg-white/90 text-gray-800'
                    }`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
                  >
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-800">{teacher.rating}</span>
                  </motion.div>

                  {/* Hover Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.button
                      className="w-full bg-gradient-to-r from-violet-500 to-purple-500 text-white py-2 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Profile
                    </motion.button>
                  </div>
                </div>

                {/* Teacher Info */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                    isDark
                      ? 'text-white group-hover:text-violet-400'
                      : 'text-gray-800 group-hover:text-violet-600'
                  }`}>
                    {teacher.name}
                  </h3>

                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      isDark
                        ? 'bg-gradient-to-r from-violet-800 to-purple-800 text-violet-200'
                        : 'bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700'
                    }`}>
                      {teacher.subject}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className={`flex items-center gap-2 text-sm ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <Award className="w-4 h-4 text-violet-500" />
                      <span className="font-medium">{teacher.qualification}</span>
                    </div>
                    <div className={`flex items-center gap-2 text-sm ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <BookOpen className="w-4 h-4 text-purple-500" />
                      <span>{teacher.experience} Experience</span>
                    </div>
                    <div className={`flex items-center gap-2 text-sm ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <Users className="w-4 h-4 text-pink-500" />
                      <span>{teacher.students} Students Taught</span>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {teacher.specialties.slice(0, 3).map((specialty, i) => (
                        <motion.span
                          key={specialty}
                          className={`px-2 py-1 rounded-lg text-xs font-medium border ${
                            isDark
                              ? 'bg-gradient-to-r from-violet-800 to-purple-800 text-violet-200 border-violet-700'
                              : 'bg-gradient-to-r from-violet-50 to-purple-50 text-violet-700 border-violet-100'
                          }`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                        >
                          {specialty}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className={`text-sm leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {teacher.bio}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Meet All Our Teachers
          </motion.button>
          <p className={`mt-4 text-sm ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Discover more about our exceptional faculty and their teaching methodologies
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTeachers;
