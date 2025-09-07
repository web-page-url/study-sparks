'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { question: "What age groups can join?", answer: "We cater to children aged 6-16 years. Our curriculum is designed to be age-appropriate and progressively challenging." },
  { question: "Do I need a laptop or tablet?", answer: "Our platform is fully mobile-optimized! You can learn on smartphones, tablets, or laptops - whatever works best for your child." },
  { question: "How are teachers selected?", answer: "Our teachers are carefully selected from top educational institutions and undergo rigorous training in child psychology and modern teaching methods." },
  { question: "Can I try a demo before paying?", answer: "Absolutely! We offer a free demo class for every new student to experience our teaching methodology and platform." },
  { question: "What subjects do you offer?", answer: "We offer comprehensive learning in Coding, Mathematics, Science, English, and Artificial Intelligence with specialized curriculum for each." },
  { question: "How long are the classes?", answer: "Each live class is 45 minutes long, designed to maintain children's attention while delivering comprehensive learning." }
];

interface FAQProps {
  isDark?: boolean;
}

export default function FAQ({ isDark = false }: FAQProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className={`py-20 px-6 transition-all duration-500 ${
      isDark
        ? 'bg-gradient-to-b from-gray-900 to-black'
        : 'bg-gradient-to-b from-violet-50 to-purple-50'
    }`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark
              ? 'neon-text'
              : 'bg-gradient-to-r from-violet-800 to-purple-800 bg-clip-text text-transparent'
          }`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Everything you need to know about Study Sparks
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                isDark
                  ? 'bg-gray-800/80 backdrop-blur-lg border-gray-700/50'
                  : 'bg-white/90 backdrop-blur-lg border-gray-200/50 shadow-xl'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.button
                className={`w-full p-6 text-left flex items-center justify-between transition-colors ${
                  isDark
                    ? 'hover:bg-white/5'
                    : 'hover:bg-violet-50'
                }`}
                onClick={() => toggleFaq(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className={`text-lg font-semibold pr-4 ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}>
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className={`leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className={`mb-6 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Still have questions? We're here to help!
          </p>
          <motion.button
            className={`text-lg px-8 py-4 rounded-full font-semibold backdrop-filter backdrop-blur-lg transition-all duration-300 ${
              isDark
                ? 'text-white border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30'
                : 'text-gray-800 border border-violet-300 bg-violet-50 hover:bg-violet-100 hover:border-violet-400'
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
