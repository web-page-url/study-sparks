'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function PrivacyPage() {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal information you provide (name, email, phone)",
        "Learning progress and performance data",
        "Device and usage information",
        "Communication preferences",
        "Payment information (processed securely)"
      ]
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: [
        "Provide personalized learning experiences",
        "Track and improve your learning progress",
        "Send important updates and notifications",
        "Ensure platform security and prevent fraud",
        "Analyze usage patterns to improve our services"
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "End-to-end encryption for all data transmission",
        "Secure cloud storage with multiple backups",
        "Regular security audits and updates",
        "Access controls and employee training",
        "Compliance with international security standards"
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: [
        "Access and download your personal data",
        "Correct inaccurate information",
        "Delete your account and associated data",
        "Opt-out of marketing communications",
        "Data portability to other services"
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
              <Shield className="w-4 h-4" />
              Privacy Policy
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-violet-800 via-purple-800 to-indigo-800 bg-clip-text text-transparent">
              Your Privacy Matters
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            className="grid md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { value: "100%", label: "Data Encrypted" },
              { value: "GDPR", label: "Compliant" },
              { value: "24/7", label: "Security Monitoring" },
              { value: "Zero", label: "Data Breaches" }
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

      {/* Privacy Overview */}
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
              Our Privacy Commitment
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Study Sparks, we believe privacy is a fundamental right. We collect only what we need to provide
              you with the best possible learning experience, and we protect it with industry-leading security measures.
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
                This Privacy Policy explains how Study Sparks collects, uses, discloses, and safeguards your information
                when you visit our website, use our mobile application, or participate in our online learning platform.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                By using our services, you agree to the collection and use of information in accordance with this policy.
                We will not use or share your information except as described in this Privacy Policy.
              </p>
              <p className="text-lg leading-relaxed">
                This policy applies to all users of Study Sparks, including students, parents, teachers, and administrators.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
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

      {/* Data Retention */}
      <section className="py-20 bg-white/50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-violet-800 to-purple-800 bg-clip-text text-transparent">
              Data Retention & Deletion
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We retain your data only as long as necessary and provide easy options for deletion.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="border-l-4 border-violet-500 pl-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Active Account Data</h3>
                <p className="text-gray-600">
                  We retain your personal information, learning progress, and account data while your account is active
                  and for up to 3 years after account deactivation for legal and regulatory compliance.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Learning Analytics</h3>
                <p className="text-gray-600">
                  Aggregated and anonymized learning data may be retained indefinitely for research and platform improvement purposes.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Account Deletion</h3>
                <p className="text-gray-600">
                  You can request complete deletion of your account and associated data at any time through your account settings
                  or by contacting our support team. We will delete your data within 30 days of your request.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Third Party Services */}
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
              Third-Party Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We use trusted third-party services to enhance your learning experience and ensure platform security.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Google Analytics",
                purpose: "Website analytics and user behavior tracking",
                data: "IP addresses, browsing patterns (anonymized)"
              },
              {
                name: "Stripe",
                purpose: "Secure payment processing",
                data: "Payment information (processed securely, not stored)"
              },
              {
                name: "AWS Cloud Services",
                purpose: "Data storage and application hosting",
                data: "User data and learning materials (encrypted)"
              }
            ].map((service, index) => (
              <motion.div
                key={service.name}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.name}</h3>
                <p className="text-violet-600 text-sm font-medium mb-3">{service.purpose}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{service.data}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Privacy */}
      <section className="py-20 bg-white/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-violet-800 to-purple-800 bg-clip-text text-transparent">
              Questions About Your Privacy?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our privacy team is here to help you understand how we protect your data.
            </p>
            <motion.button
              className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-violet-600 hover:to-purple-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Privacy Team
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
