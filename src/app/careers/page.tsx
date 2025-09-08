'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Heart, Zap, Award, TrendingUp, MapPin, Clock, DollarSign } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function CareersPage() {
  const jobCategories = [
    {
      title: "Teaching & Education",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      jobs: [
        { title: "Mathematics Teacher", type: "Full-time", location: "Remote" },
        { title: "Science Educator", type: "Full-time", location: "Mumbai" },
        { title: "English Language Tutor", type: "Part-time", location: "Remote" },
        { title: "Coding Instructor", type: "Full-time", location: "Remote" }
      ]
    },
    {
      title: "Technology & Development",
      icon: Zap,
      color: "from-purple-500 to-violet-500",
      jobs: [
        { title: "Senior Software Engineer", type: "Full-time", location: "Mumbai" },
        { title: "AI/ML Engineer", type: "Full-time", location: "Remote" },
        { title: "Frontend Developer", type: "Full-time", location: "Remote" },
        { title: "DevOps Engineer", type: "Full-time", location: "Mumbai" }
      ]
    },
    {
      title: "Content & Design",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      jobs: [
        { title: "Content Creator", type: "Full-time", location: "Remote" },
        { title: "UX/UI Designer", type: "Full-time", location: "Mumbai" },
        { title: "Educational Content Writer", type: "Part-time", location: "Remote" },
        { title: "Video Content Producer", type: "Full-time", location: "Mumbai" }
      ]
    },
    {
      title: "Operations & Support",
      icon: Briefcase,
      color: "from-green-500 to-emerald-500",
      jobs: [
        { title: "Customer Success Manager", type: "Full-time", location: "Mumbai" },
        { title: "Learning Experience Designer", type: "Full-time", location: "Remote" },
        { title: "Community Manager", type: "Full-time", location: "Remote" },
        { title: "Data Analyst", type: "Full-time", location: "Mumbai" }
      ]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Learning & Development",
      description: "Continuous learning opportunities and skill development programs."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with passionate educators and innovative technologists."
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible hours, remote work options, and wellness programs."
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Clear career progression paths and leadership development."
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
              <Briefcase className="w-4 h-4" />
              Join Our Team
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-violet-800 via-purple-800 to-indigo-800 bg-clip-text text-transparent">
              Shape the Future of Education
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join a passionate team that's revolutionizing how the world learns. We're looking for innovative thinkers, dedicated educators, and technology enthusiasts.
            </p>
          </motion.div>

          {/* Company Stats */}
          <motion.div
            className="grid md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { value: "200+", label: "Team Members" },
              { value: "15+", label: "Countries" },
              { value: "50M+", label: "Students Impacted" },
              { value: "4.9★", label: "Employee Rating" }
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

      {/* Our Culture */}
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
              Our Culture & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're building more than a company – we're creating a movement to democratize education worldwide.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">What Drives Us</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong className="text-violet-600">Education for All:</strong> We believe quality education should be accessible
                    to everyone, regardless of location, background, or financial situation.
                  </p>
                  <p>
                    <strong className="text-violet-600">Innovation First:</strong> We're constantly pushing boundaries with
                    cutting-edge technology and creative teaching methods.
                  </p>
                  <p>
                    <strong className="text-violet-600">Impact Focused:</strong> Every decision we make is driven by our mission
                    to improve learning outcomes for millions of students.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Work Environment</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong className="text-violet-600">Collaborative:</strong> We work together across disciplines to solve
                    complex educational challenges.
                  </p>
                  <p>
                    <strong className="text-violet-600">Flexible:</strong> Remote-first culture with flexible hours and
                    work-from-anywhere policies.
                  </p>
                  <p>
                    <strong className="text-violet-600">Growth-Oriented:</strong> Continuous learning and professional development
                    are built into everything we do.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
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
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Find your perfect role in our diverse and growing team.
            </p>
          </motion.div>

          <div className="space-y-8">
            {jobCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                    {(() => {
                      const IconComponent = category.icon;
                      return <IconComponent className="w-6 h-6 text-white" />;
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.jobs.map((job, jobIndex) => (
                    <motion.div
                      key={`${job.title}-${jobIndex}`}
                      className="bg-gray-50/80 rounded-xl p-4 border border-gray-200/50 hover:bg-gray-100/80 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <h4 className="font-semibold text-gray-800 mb-2">{job.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <Clock className="w-3 h-3" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Why Join Study Sparks?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We're more than just a workplace – we're a community of passionate educators and innovators.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-white/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {(() => {
                  const IconComponent = benefit.icon;
                  return <IconComponent className="w-12 h-12 text-violet-600 mx-auto mb-4" />;
                })()}
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
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
              Our Hiring Process
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A streamlined process designed to find the perfect fit for our team and culture.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Application Review",
                  description: "Our team reviews your application and portfolio within 3-5 business days.",
                  time: "3-5 days"
                },
                {
                  step: "02",
                  title: "Initial Interview",
                  description: "A 30-minute conversation with our HR team to learn about your background and goals.",
                  time: "1 week"
                },
                {
                  step: "03",
                  title: "Technical Assessment",
                  description: "Role-specific evaluation to assess your skills and expertise.",
                  time: "1-2 weeks"
                },
                {
                  step: "04",
                  title: "Final Interview",
                  description: "Meet with team members and leadership to discuss culture fit and vision.",
                  time: "2-3 weeks"
                }
              ].map((step, index) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{step.description}</p>
                  <div className="text-violet-600 font-semibold text-sm">{step.time}</div>
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
              Ready to Make an Impact?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our mission to transform education worldwide. We're always looking for passionate individuals to join our team.
            </p>
            <motion.button
              className="bg-white text-violet-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Openings
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
