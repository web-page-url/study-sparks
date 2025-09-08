'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Heart, Sparkles, Target as TargetIcon } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function AboutPage() {
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
              <Sparkles className="w-4 h-4" />
              About Study Sparks
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-violet-800 via-purple-800 to-indigo-800 bg-clip-text text-transparent">
              Empowering Young Minds
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to make world-class education accessible, engaging, and fun for every child, regardless of their background or location.
            </p>
          </motion.div>

          {/* Mission Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: TargetIcon,
                title: "Our Mission",
                description: "To democratize access to quality education through innovative technology and personalized learning experiences.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Heart,
                title: "Our Values",
                description: "Passion for education, commitment to excellence, and unwavering dedication to our students' success.",
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: Award,
                title: "Our Impact",
                description: "50K+ happy students learning with joy, achieving their dreams through our comprehensive curriculum.",
                color: "from-purple-500 to-violet-500"
              }
            ].map((card, index) => (
              <motion.div
                key={card.title}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${card.color} rounded-2xl flex items-center justify-center mb-6`}>
                  {(() => {
                    const IconComponent = card.icon;
                    return <IconComponent className="w-8 h-8 text-white" />;
                  })()}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { number: "50K+", label: "Happy Students" },
              { number: "100+", label: "Expert Teachers" },
              { number: "5", label: "Core Subjects" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-6 text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl md:text-4xl font-black mb-2">{stat.number}</div>
                <div className="text-sm md:text-base font-medium opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-violet-800 to-purple-800 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Founded in 2020, Study Sparks was born from a simple belief: every child deserves access to world-class education,
              regardless of their location, background, or financial situation.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                Our founders, a team of passionate educators and technology experts, witnessed firsthand the educational disparities
                that existed in traditional learning systems. They saw talented students held back not by lack of ability, but by
                lack of access to quality resources and personalized guidance.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                This inspired us to create Study Sparks – an innovative learning platform that combines cutting-edge technology
                with proven educational methodologies. We believe that learning should be engaging, interactive, and tailored to
                each student's unique learning style and pace.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we're proud to serve over 50,000 students worldwide, providing them with access to expert teachers,
                interactive lessons, and a supportive learning community that empowers them to achieve their full potential.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse team of educators, technologists, and innovators working together to transform education.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Priya Sharma",
                role: "CEO & Co-Founder",
                bio: "Former education director with 15+ years in curriculum development and educational technology.",
                image: "👩‍🏫"
              },
              {
                name: "Rajesh Kumar",
                role: "CTO & Co-Founder",
                bio: "Technology innovator with expertise in AI-driven learning systems and educational software.",
                image: "👨‍💻"
              },
              {
                name: "Dr. Meera Patel",
                role: "Head of Curriculum",
                bio: "Pedagogical expert specializing in adaptive learning methodologies and student assessment.",
                image: "👩‍🎓"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl border border-white/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                  {member.image}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-violet-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Join Our Learning Community?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start your child's educational journey today with Study Sparks.
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
