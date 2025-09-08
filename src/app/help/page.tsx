'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Search, Book, MessageCircle, Video, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I get started with Study Sparks?",
      answer: "Getting started is easy! Simply create a free account, choose your subjects of interest, and begin with our interactive lessons. Our AI-powered system will adapt to your learning pace and style."
    },
    {
      question: "What subjects are available?",
      answer: "We offer comprehensive courses in Coding, Mathematics, Science, English, and Artificial Intelligence. Each subject includes interactive lessons, projects, and assessments."
    },
    {
      question: "How do live classes work?",
      answer: "Live classes are interactive sessions with expert teachers. You can join from anywhere, ask questions in real-time, and participate in collaborative activities. Recordings are available for missed sessions."
    },
    {
      question: "Can I access Study Sparks on mobile devices?",
      answer: "Yes! Study Sparks is fully optimized for mobile devices. Download our app or access through your mobile browser for a seamless learning experience on the go."
    },
    {
      question: "How does the AI tutor work?",
      answer: "Our AI tutor provides personalized learning recommendations, answers your questions, and adapts to your learning style. It's available 24/7 to support your educational journey."
    },
    {
      question: "What if I need help with a specific problem?",
      answer: "You can ask our AI tutor, post in community forums, or schedule a session with a live tutor. Our support team is also available through the help center."
    }
  ];

  const helpCategories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics of using Study Sparks",
      articles: ["Creating Your Account", "Navigating the Platform", "Setting Up Your Profile"]
    },
    {
      icon: Video,
      title: "Live Classes",
      description: "Everything about interactive live sessions",
      articles: ["Joining Live Classes", "Class Recordings", "Interactive Features"]
    },
    {
      icon: MessageCircle,
      title: "Community & Forums",
      description: "Connect with other learners",
      articles: ["Study Groups", "Discussion Forums", "Project Sharing"]
    },
    {
      icon: FileText,
      title: "Courses & Subjects",
      description: "Explore our learning curriculum",
      articles: ["Course Structure", "Progress Tracking", "Certificates"]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
              <HelpCircle className="w-4 h-4" />
              Help Center
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-violet-800 via-purple-800 to-indigo-800 bg-clip-text text-transparent">
              How Can We Help?
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Find answers to your questions, learn how to use our platform effectively, and get support when you need it.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-lg shadow-lg"
              />
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="grid md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { value: "500+", label: "Help Articles" },
              { value: "24/7", label: "AI Support" },
              { value: "5 min", label: "Avg Response" },
              { value: "95%", label: "Resolution Rate" }
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

      {/* Help Categories */}
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
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the help you need by exploring our comprehensive knowledge base.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 text-center group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {(() => {
                  const IconComponent = category.icon;
                  return <IconComponent className="w-12 h-12 text-violet-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />;
                })()}
                <h3 className="text-xl font-bold text-gray-800 mb-3">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{category.description}</p>
                <div className="space-y-2">
                  {category.articles.map((article) => (
                    <div key={article} className="text-left">
                      <p className="text-violet-600 text-sm hover:text-violet-800 cursor-pointer transition-colors">
                        • {article}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about Study Sparks.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
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
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our support team is here to help you succeed in your learning journey.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-white/50">
              <MessageCircle className="w-12 h-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Live Chat</h3>
              <p className="text-gray-600 text-sm mb-4">Get instant help from our AI assistant</p>
              <button className="bg-violet-100 hover:bg-violet-200 text-violet-700 px-4 py-2 rounded-lg font-medium transition-colors">
                Start Chat
              </button>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-white/50">
              <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Email Support</h3>
              <p className="text-gray-600 text-sm mb-4">Send us detailed questions anytime</p>
              <button className="bg-green-100 hover:bg-green-200 text-green-700 px-4 py-2 rounded-lg font-medium transition-colors">
                Send Email
              </button>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-white/50">
              <Video className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Video Call</h3>
              <p className="text-gray-600 text-sm mb-4">Schedule a personalized support session</p>
              <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg font-medium transition-colors">
                Book Call
              </button>
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
              Ready to Start Learning?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students already learning with Study Sparks.
            </p>
            <motion.button
              className="bg-white text-violet-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
