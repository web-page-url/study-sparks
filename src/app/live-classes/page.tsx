'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Video, Users, MessageSquare, Calendar, Clock, Star, Play, Mic, MicOff, Camera, CameraOff } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function LiveClassesPage() {
  const upcomingClasses = [
    {
      subject: "Advanced Python Programming",
      teacher: "Rajesh Kumar",
      time: "Today, 3:00 PM IST",
      duration: "60 min",
      level: "Intermediate",
      students: 25,
      image: "👨‍💻",
      topic: "Building AI-Powered Applications"
    },
    {
      subject: "Quantum Physics",
      teacher: "Dr. Meera Patel",
      time: "Tomorrow, 2:00 PM IST",
      duration: "45 min",
      level: "Advanced",
      students: 18,
      image: "👩‍🔬",
      topic: "Quantum Entanglement Explained"
    },
    {
      subject: "Creative Writing",
      teacher: "Arun Singh",
      time: "Friday, 4:30 PM IST",
      duration: "50 min",
      level: "All Levels",
      students: 32,
      image: "👨‍🎓",
      topic: "Crafting Compelling Short Stories"
    }
  ];

  const features = [
    {
      icon: Video,
      title: "HD Video Quality",
      description: "Crystal clear video and audio for an immersive learning experience."
    },
    {
      icon: MessageSquare,
      title: "Real-time Chat",
      description: "Ask questions and interact with teachers and fellow students instantly."
    },
    {
      icon: Users,
      title: "Interactive Sessions",
      description: "Participate in polls, Q&A sessions, and collaborative activities."
    },
    {
      icon: Play,
      title: "Recording Access",
      description: "Missed a class? Access recordings anytime for review and catch-up."
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
              <Video className="w-4 h-4" />
              Interactive Learning
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-violet-800 via-purple-800 to-indigo-800 bg-clip-text text-transparent">
              Live Interactive Classes
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience real-time learning with expert teachers, interactive sessions, and a vibrant community of learners.
            </p>
          </motion.div>

          {/* Live Class Stats */}
          <motion.div
            className="grid md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { value: "500+", label: "Live Classes Weekly" },
              { value: "10K+", label: "Students Enrolled" },
              { value: "95%", label: "Attendance Rate" },
              { value: "4.9★", label: "Average Rating" }
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

      {/* Upcoming Classes */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-violet-800 to-purple-800 bg-clip-text text-transparent">
              Upcoming Live Classes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join interactive sessions with expert teachers and fellow students.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {upcomingClasses.map((classItem, index) => (
              <motion.div
                key={`${classItem.subject}-${index}`}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Class Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center text-xl">
                    {classItem.image}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{classItem.subject}</h3>
                    <p className="text-violet-600 text-sm">{classItem.teacher}</p>
                  </div>
                </div>

                {/* Class Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{classItem.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{classItem.duration}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                      {classItem.level}
                    </span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                      {classItem.students} students
                    </span>
                  </div>
                </div>

                {/* Topic */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Today's Topic</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{classItem.topic}</p>
                </div>

                {/* Join Button */}
                <motion.button
                  className="w-full bg-gradient-to-r from-violet-500 to-purple-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-violet-600 hover:to-purple-600 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join Live Class
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* View All Classes Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-white/80 backdrop-blur-sm border border-violet-200 text-violet-700 px-8 py-4 rounded-2xl font-semibold hover:bg-violet-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Upcoming Classes
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
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
              Why Choose Live Classes?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of real-time learning with our interactive live sessions.
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

      {/* Class Interface Demo */}
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
              Interactive Class Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what a typical live class looks like with our advanced features.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-900 rounded-3xl p-8 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Mock Class Interface */}
            <div className="bg-gray-800 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center">
                    👨‍🏫
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Advanced Python Programming</h3>
                    <p className="text-gray-400 text-sm">Rajesh Kumar • 25 students</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm">LIVE</span>
                </div>
              </div>

              {/* Video Area */}
              <div className="bg-gray-700 rounded-xl h-64 mb-4 flex items-center justify-center">
                <div className="text-center">
                  <Video className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400">Live Video Stream</p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4">
                <motion.button
                  className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mic className="w-5 h-5 text-white" />
                </motion.button>
                <motion.button
                  className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Camera className="w-5 h-5 text-white" />
                </motion.button>
                <motion.button
                  className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                </motion.button>
                <motion.button
                  className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors px-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-white font-medium">Leave Class</span>
                </motion.button>
              </div>
            </div>

            {/* Chat Sidebar */}
            <div className="bg-gray-800 rounded-2xl p-4">
              <h4 className="text-white font-semibold mb-4">Class Chat</h4>
              <div className="space-y-3">
                <div className="bg-gray-700 rounded-lg p-3">
                  <p className="text-white text-sm"><span className="text-violet-400 font-medium">Teacher:</span> Great question! Let me explain...</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-3">
                  <p className="text-white text-sm"><span className="text-blue-400 font-medium">Student:</span> Thanks for the clarification!</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-3">
                  <p className="text-white text-sm"><span className="text-green-400 font-medium">You:</span> This makes so much sense now!</p>
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
              Ready to Join Live Learning?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Experience interactive education with expert teachers and fellow students.
            </p>
            <motion.button
              className="bg-white text-violet-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your First Live Class
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
