'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, CreditCard, Shield, AlertTriangle, Scale } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function TermsPage() {
  const sections = [
    {
      icon: Users,
      title: "User Accounts & Eligibility",
      content: [
        "You must be at least 13 years old to create an account",
        "Parents/guardians must supervise accounts for users under 18",
        "Provide accurate and complete information during registration",
        "You are responsible for maintaining account security",
        "One account per user; sharing accounts is not permitted"
      ]
    },
    {
      icon: FileText,
      title: "Content & Usage Rights",
      content: [
        "Educational content is for personal, non-commercial use only",
        "You may not copy, distribute, or modify our content",
        "Respect intellectual property rights of all materials",
        "Use the platform for lawful educational purposes only",
        "Do not attempt to reverse engineer or hack the platform"
      ]
    },
    {
      icon: CreditCard,
      title: "Payments & Subscriptions",
      content: [
        "All fees are clearly displayed before purchase",
        "Subscriptions auto-renew unless cancelled",
        "Refunds available within 30 days of purchase",
        "Price changes will be communicated in advance",
        "Payment information is processed securely"
      ]
    },
    {
      icon: Shield,
      title: "Privacy & Data Protection",
      content: [
        "We protect your personal information as described in our Privacy Policy",
        "Learning data is used to improve your experience",
        "We comply with applicable data protection laws",
        "You control your data and can request deletion",
        "We use industry-standard security measures"
      ]
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
              <FileText className="w-4 h-4" />
              Terms of Service
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-violet-800 via-purple-800 to-indigo-800 bg-clip-text text-transparent">
              Terms & Conditions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Clear guidelines for using Study Sparks and ensuring a positive learning environment for everyone.
            </p>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { value: "100%", label: "Transparent" },
              { value: "24/7", label: "Enforced" },
              { value: "Free", label: "Legal Review" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/50"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-2xl font-bold text-violet-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Overview */}
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
              Agreement Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              These terms govern your use of Study Sparks and help maintain a safe, effective learning environment.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                By accessing or using Study Sparks, you agree to be bound by these Terms of Service. If you disagree with any part
                of these terms, you may not access our services.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                These terms apply to all users of Study Sparks, including students, parents, teachers, and educational institutions.
                Our services include the website, mobile applications, live classes, and all associated learning materials.
              </p>
              <p className="text-lg leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes
                acceptance of the new terms.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center">
                    {(() => {
                      const IconComponent = section.icon;
                      return <IconComponent className="w-6 h-6 text-white" />;
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{section.title}</h3>
                </div>

                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
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
              Prohibited Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To maintain a safe and positive learning environment, certain activities are strictly prohibited.
            </p>
          </motion.div>

          <motion.div
            className="bg-red-50/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-red-200/50"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Academic Integrity Violations
                </h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Cheating or plagiarism</li>
                  <li>• Sharing answers inappropriately</li>
                  <li>• Using unauthorized assistance</li>
                  <li>• Falsifying progress or achievements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Platform Misuse
                </h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Attempting to hack or disrupt services</li>
                  <li>• Sharing inappropriate content</li>
                  <li>• Harassment or bullying other users</li>
                  <li>• Violating intellectual property rights</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-red-100/50 rounded-xl border border-red-200/50">
              <p className="text-red-800 text-center font-medium">
                Violation of these terms may result in account suspension or termination, and potential legal action.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Termination & Modification */}
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
              Account Termination
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Understanding when and how accounts may be terminated or services modified.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Termination Rights</h3>
              <div className="space-y-3 text-gray-600">
                <p>• You may terminate your account at any time</p>
                <p>• We may terminate accounts for violations</p>
                <p>• Notice will be provided before termination</p>
                <p>• Refund eligibility depends on circumstances</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Service Changes</h3>
              <div className="space-y-3 text-gray-600">
                <p>• We may modify services with advance notice</p>
                <p>• Terms may be updated periodically</p>
                <p>• Continued use implies acceptance</p>
                <p>• Significant changes require user consent</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-violet-800 to-purple-800 bg-clip-text text-transparent">
              Questions About Terms?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our legal team is here to help clarify any questions about our terms of service.
            </p>
            <motion.button
              className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-violet-600 hover:to-purple-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Legal Team
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600">
            Last updated: January 15, 2025
          </p>
        </div>
      </section>
    </div>
  );
}
