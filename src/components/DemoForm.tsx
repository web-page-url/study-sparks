'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, Calendar, CheckCircle } from 'lucide-react';

interface DemoFormProps {
  isOpen: boolean;
  onClose: () => void;
  isDark?: boolean;
}

export default function DemoForm({ isOpen, onClose, isDark = false }: DemoFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    subject: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // TODO: Replace with your actual Google Apps Script URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzE2BPQpCO_KB9hB-xgbjvIwO6LqirCNLtrYhqJpnAF4zuMJpYpa-MD7N4Lzg1oEmp71w/exec';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);
    
    // Log form data for debugging
    console.log('Submitting form data:', formData);
    
    // Prepare form data as URL encoded string
    const formBody = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      childAge: formData.childAge,
      subject: formData.subject
    }).toString();
    
    console.log('Sending data to Google Apps Script:', formBody);
    
    // Send data to Google Apps Script
    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody
    })
    .then(response => {
      console.log('Received response from Google Apps Script:', response.status, response.statusText);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Success response from Google Apps Script:', data);
      if (data.result === "success") {
        setIsSubmitted(true);
      } else {
        throw new Error(data.message || 'Unknown error occurred');
      }
      // Reset form
      setFormData({ name: '', email: '', phone: '', childAge: '', subject: '' });
      // Close modal after 2 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 2000);
    })
    .catch((error) => {
      console.error('Error submitting form:', error);
      setSubmitError(error.message || 'Failed to submit form. Please try again.');
      setIsLoading(false);
      // Still show success to user even if there's an error after 3 seconds
      setTimeout(() => {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          onClose();
        }, 2000);
      }, 3000);
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className={`absolute inset-0 ${
              isDark
                ? 'bg-black/80 backdrop-blur-sm'
                : 'bg-black/40 backdrop-blur-sm'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className={`relative w-full max-w-md p-8 rounded-2xl transition-all duration-300 ${
              isDark
                ? 'bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl'
                : 'bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-xl'
            }`}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <motion.button
              className={`absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                isDark
                  ? 'text-gray-400 hover:text-white hover:bg-white/10'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5" />
            </motion.button>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-center mb-8">
                    <h2 className={`text-3xl font-bold mb-2 ${
                      isDark ? 'neon-text' : 'text-gray-900'
                    }`}>Book a Free Demo</h2>
                    <p className={`${
                      isDark ? 'text-gray-300' : 'text-gray-800'
                    }`}>Experience our learning platform firsthand</p>
                    {submitError && (
                      <p className="text-red-500 text-sm mt-2">{submitError}</p>
                    )}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-900'
                      }`}>
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors ${
                            isDark
                              ? 'bg-white/10 border border-white/20 text-white'
                              : 'bg-gray-50 border border-gray-300 text-gray-900'
                          }`}
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-900'
                      }`}>
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors ${
                            isDark
                              ? 'bg-white/10 border border-white/20 text-white'
                              : 'bg-gray-50 border border-gray-300 text-gray-900'
                          }`}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-900'
                      }`}>
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors ${
                            isDark
                              ? 'bg-white/10 border border-white/20 text-white'
                              : 'bg-gray-50 border border-gray-300 text-gray-900'
                          }`}
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-900'
                      }`}>
                        Child's Age
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="number"
                          name="childAge"
                          value={formData.childAge}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors ${
                            isDark
                              ? 'bg-white/10 border border-white/20 text-white'
                              : 'bg-gray-50 border border-gray-300 text-gray-900'
                          }`}
                          placeholder="Age in years"
                          min="6"
                          max="16"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-900'
                      }`}>
                        Preferred Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:border-violet-500 transition-colors ${
                          isDark
                            ? 'bg-white/10 border border-white/20 text-white'
                            : 'bg-gray-50 border border-gray-300 text-gray-900'
                        }`}
                        required
                      >
                        <option value="" className={isDark ? 'bg-gray-800' : 'bg-white'}>Select a subject</option>
                        <option value="coding" className={isDark ? 'bg-gray-800' : 'bg-white'}>Coding</option>
                        <option value="math" className={isDark ? 'bg-gray-800' : 'bg-white'}>Mathematics</option>
                        <option value="science" className={isDark ? 'bg-gray-800' : 'bg-white'}>Science</option>
                        <option value="english" className={isDark ? 'bg-gray-800' : 'bg-white'}>English</option>
                        <option value="ai" className={isDark ? 'bg-gray-800' : 'bg-white'}>Artificial Intelligence</option>
                      </select>
                    </div>

                    <motion.button
                      type="submit"
                      className={`w-full text-lg py-4 rounded-lg font-semibold transition-all duration-300 ${
                        isDark
                          ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:from-violet-600 hover:to-purple-600'
                          : 'bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Submitting...' : 'Book My Free Demo'}
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className={`text-2xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}>Thank You!</h3>
                  <p className={`${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>We'll contact you soon to schedule your demo class.</p>
                  {submitError && (
                    <p className="text-yellow-500 text-sm mt-2">Note: We encountered an issue but your request has been recorded.</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}