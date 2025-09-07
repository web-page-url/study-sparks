'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Zap, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface HeroProps {
  onDemoClick: () => void;
  isDark?: boolean;
}

export default function Hero({ onDemoClick, isDark = false }: HeroProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const kidImages = [
    { src: '/kid-1.png', alt: 'Happy student learning with Study Sparks' },
    { src: '/kid-2.png', alt: 'Young learner engaged with educational content' },
    { src: '/kid-3.png', alt: 'Child exploring AI and technology concepts' },
    { src: '/kid-4.png', alt: 'Student mastering coding and programming' },
    { src: '/kid-5.png', alt: 'Curious child discovering new learning adventures' },
    { src: '/kid-6.png', alt: 'Young innovator building creative projects' },
    { src: '/kid-7.png', alt: 'Focused student solving complex problems' },
    { src: '/kid-8.png', alt: 'Enthusiastic learner exploring digital worlds' }
  ];

  // Detect screen size
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  // Auto-rotate carousel every 4 seconds
  useEffect(() => {
    const maxSlides = isDesktop ? 3 : 8;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % maxSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [isDesktop]);

  const nextImage = () => {
    const maxSlides = isDesktop ? 3 : 8;
    setCurrentImage((prev) => (prev + 1) % maxSlides);
  };

  const prevImage = () => {
    const maxSlides = isDesktop ? 3 : 8;
    setCurrentImage((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  // Get current images to display based on slide (desktop: 3 images each)
  const getCurrentImages = () => {
    if (currentImage === 0) {
      return kidImages.slice(0, 3); // Images 1, 2, 3
    } else if (currentImage === 1) {
      return kidImages.slice(3, 6); // Images 4, 5, 6
    } else {
      return kidImages.slice(5, 8); // Images 6, 7, 8 (overlapping for smooth transition)
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background - Violet Theme */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isDark
          ? 'bg-gradient-to-br from-violet-900 via-purple-900 via-indigo-900 to-purple-800'
          : 'bg-gradient-to-br from-violet-50 via-purple-50 via-indigo-50 to-purple-100'
      }`}>
        {/* Dynamic gradient overlay */}
        <motion.div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-r from-violet-400/15 via-purple-400/15 to-indigo-400/15'
              : 'bg-gradient-to-r from-violet-200/20 via-purple-200/20 to-indigo-200/20'
          }`}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: "200% 200%"
          }}
        />

        {/* Floating Geometric Shapes - Violet Theme */}
        <motion.div
          className={`absolute top-20 left-10 w-32 h-32 border-2 rounded-full ${
            isDark ? 'border-violet-400/40' : 'border-violet-300/60'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute top-32 right-20 w-24 h-24 border-2 rounded-lg rotate-45 ${
            isDark ? 'border-purple-400/40' : 'border-purple-300/60'
          }`}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [45, 135, 225, 315, 45],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute bottom-40 left-20 w-20 h-20 rounded-full blur-xl ${
            isDark
              ? 'bg-gradient-to-r from-violet-500/25 to-purple-500/25'
              : 'bg-gradient-to-r from-violet-300/30 to-purple-300/30'
          }`}
          animate={{
            scale: [1, 1.5, 1],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating Educational Icons with Enhanced Animation */}
        <motion.div
          className="absolute top-20 left-10 text-7xl opacity-30"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          💻
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-6xl opacity-30"
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            rotate: [0, -10, 10, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🤖
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 text-5xl opacity-30"
          animate={{
            y: [0, -20, 0],
            rotate: [0, -15, 15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ⚛️
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-6xl opacity-30"
          animate={{
            y: [0, 20, 0],
            x: [0, 15, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🔢
        </motion.div>

        {/* Additional Floating Elements */}
        <motion.div
          className="absolute top-1/2 left-1/4 text-4xl opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          📚
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/3 text-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🎯
        </motion.div>

        {/* Floating Particles - Violet Theme */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            suppressHydrationWarning
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Enhanced Main Headline */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className={`text-6xl md:text-8xl font-black mb-2 leading-tight ${
              isDark
                ? 'bg-gradient-to-r from-white via-violet-200 to-purple-200 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-violet-800 via-purple-800 to-indigo-800 bg-clip-text text-transparent'
            }`}
            animate={{
              textShadow: isDark ? [
                "0 0 20px rgba(139, 92, 246, 0.5)",
                "0 0 40px rgba(147, 51, 234, 0.5)",
                "0 0 20px rgba(139, 92, 246, 0.5)"
              ] : [
                "0 0 10px rgba(139, 92, 246, 0.3)",
                "0 0 20px rgba(147, 51, 234, 0.3)",
                "0 0 10px rgba(139, 92, 246, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Learn. Explore. Grow.
          </motion.h1>

          {/* Decorative underline */}
          <motion.div
            className={`w-32 h-1 mx-auto rounded-full ${
              isDark
                ? 'bg-gradient-to-r from-violet-400 to-purple-400'
                : 'bg-gradient-to-r from-violet-600 to-purple-600'
            }`}
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Enhanced subtitle with better typography */}
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.p
            className={`text-xl md:text-3xl mb-6 max-w-4xl mx-auto leading-relaxed font-light ${
              isDark ? 'text-gray-200' : 'text-gray-700'
            }`}
            animate={{
              textShadow: isDark ? [
                "0 0 10px rgba(255, 255, 255, 0.1)",
                "0 0 20px rgba(255, 255, 255, 0.2)",
                "0 0 10px rgba(255, 255, 255, 0.1)"
              ] : [
                "0 0 5px rgba(139, 92, 246, 0.1)",
                "0 0 10px rgba(147, 51, 234, 0.15)",
                "0 0 5px rgba(139, 92, 246, 0.1)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            A fun way for kids to master <span className="text-cyan-300 font-medium">Coding</span>,
            <span className="text-green-300 font-medium"> Math</span>,
            <span className="text-purple-300 font-medium"> Science</span>,
            <span className="text-yellow-300 font-medium"> English</span>, and
            <span className="text-pink-300 font-medium"> AI</span>—right from mobile.
          </motion.p>

          {/* Feature highlights */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              { emoji: "📱", text: "Mobile-First" },
              { emoji: "🎮", text: "Gamified" },
              { emoji: "🤖", text: "AI-Powered" },
              { emoji: "👨‍🏫", text: "Expert Teachers" }
            ].map((feature, index) => (
              <motion.div
                key={feature.text}
                className={`flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-full border ${
                  isDark
                    ? 'bg-white/5 border-white/10'
                    : 'bg-violet-100/80 border-violet-200/50'
                }`}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(139, 92, 246, 0.1)"
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <span className="text-lg">{feature.emoji}</span>
                <span className={`text-sm font-medium ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}>{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.button
            className={`group relative text-xl px-10 py-5 font-semibold overflow-hidden rounded-2xl ${
              isDark
                ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white'
                : 'bg-gradient-to-r from-violet-500 to-purple-500 text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onDemoClick}
          >
            {/* Animated background gradient - Violet Theme */}
            <motion.div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isDark
                  ? 'bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500'
                  : 'bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600'
              }`}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            />
            <span className="relative z-10 flex items-center gap-3">
              <Sparkles className="w-6 h-6" />
              Get Started
            </span>
          </motion.button>

          <motion.button
            className={`group text-xl px-10 py-5 font-semibold rounded-2xl border-2 transition-all duration-300 ${
              isDark
                ? 'border-white/30 hover:border-white/50 text-white'
                : 'border-violet-300 hover:border-violet-400 text-violet-700 bg-white/80'
            }`}
            whileHover={{
              scale: 1.05,
              borderColor: isDark ? "rgba(255, 255, 255, 0.8)" : "rgba(139, 92, 246, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onDemoClick}
          >
            <span className="flex items-center gap-3">
              <Zap className="w-6 h-6" />
              Book a Free Demo
              <motion.div
                className={`w-2 h-2 rounded-full ${
                  isDark ? 'bg-green-400' : 'bg-green-500'
                }`}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </span>
          </motion.button>
        </motion.div>

        {/* Kids Images Carousel */}
        <motion.div
          className="mt-16 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="relative w-full max-w-5xl mx-auto px-4">
            {/* Desktop: 3 images side by side, Mobile: Single image carousel */}
            {isDesktop ? (
              <div>
                {/* Desktop Grid View */}
                <motion.div
                  className="grid grid-cols-3 gap-6"
                  key={currentImage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  {getCurrentImages().map((image, index) => (
                    <div key={`${currentImage}-${index}`} className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[3/4] group">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </motion.div>

                {/* Desktop Navigation */}
                <div className="flex justify-center items-center mt-6 space-x-4">
                  <motion.button
                    className={`w-12 h-12 rounded-full backdrop-blur-md border transition-all duration-300 ${
                      isDark
                        ? 'bg-black/30 border-white/20 text-white hover:bg-black/50'
                        : 'bg-white/30 border-gray-300/50 text-gray-700 hover:bg-white/50'
                    }`}
                    onClick={prevImage}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft className="w-6 h-6 mx-auto" />
                  </motion.button>

                  <motion.button
                    className={`w-12 h-12 rounded-full backdrop-blur-md border transition-all duration-300 ${
                      isDark
                        ? 'bg-black/30 border-white/20 text-white hover:bg-black/50'
                        : 'bg-white/30 border-gray-300/50 text-gray-700 hover:bg-white/50'
                    }`}
                    onClick={nextImage}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight className="w-6 h-6 mx-auto" />
                  </motion.button>
                </div>

                {/* Desktop Indicators */}
                <div className="flex justify-center mt-4 space-x-3">
                  {[0, 1, 2].map((index) => (
                    <motion.button
                      key={index}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentImage
                          ? isDark
                            ? 'bg-white'
                            : 'bg-violet-600'
                          : isDark
                            ? 'bg-white/40'
                            : 'bg-violet-300'
                      }`}
                      onClick={() => setCurrentImage(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="relative max-w-sm mx-auto">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <motion.div
                      className="aspect-[4/5] relative"
                      key={currentImage}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={kidImages[currentImage].src}
                        alt={kidImages[currentImage].alt}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </motion.div>

                    {/* Mobile Navigation Arrows */}
                    <motion.button
                      className={`absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-md border transition-all duration-300 ${
                        isDark
                          ? 'bg-black/30 border-white/20 text-white hover:bg-black/50'
                          : 'bg-white/30 border-gray-300/50 text-gray-700 hover:bg-white/50'
                      }`}
                      onClick={prevImage}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronLeft className="w-5 h-5 mx-auto" />
                    </motion.button>

                    <motion.button
                      className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-md border transition-all duration-300 ${
                        isDark
                          ? 'bg-black/30 border-white/20 text-white hover:bg-black/50'
                          : 'bg-white/30 border-gray-300/50 text-gray-700 hover:bg-white/50'
                      }`}
                      onClick={nextImage}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight className="w-5 h-5 mx-auto" />
                    </motion.button>
                  </div>

                  {/* Mobile Indicators */}
                  <div className="flex justify-center mt-4 space-x-3">
                    {kidImages.map((_, index) => (
                      <motion.button
                        key={index}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          index === currentImage
                            ? isDark
                              ? 'bg-white'
                              : 'bg-violet-600'
                            : isDark
                              ? 'bg-white/40'
                              : 'bg-violet-300'
                        }`}
                        onClick={() => setCurrentImage(index)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      />
                    ))}
                  </div>

                  {/* Mobile Caption */}
                  <motion.div
                    className="text-center mt-4 px-4"
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className={`text-sm font-medium leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {kidImages[currentImage].alt}
                    </p>
                  </motion.div>
                </div>
              </div>
            )}

            {/* Shared Caption for Desktop */}
            {isDesktop && (
              <motion.div
                className="text-center mt-6 px-4"
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className={`text-base font-medium leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {currentImage === 0
                    ? 'Happy students learning with Study Sparks'
                    : currentImage === 1
                      ? 'Curious minds discovering new adventures'
                      : 'Focused learners mastering digital skills'
                  }
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Trust indicators - Violet Theme */}
        <motion.div
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full border-2 border-black flex items-center justify-center text-xs"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  👤
                </motion.div>
              ))}
            </div>
            <span className="text-sm">50K+ Happy Students</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-violet-400" />
            <span className="text-sm">100+ Expert Teachers</span>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className={`text-xs font-medium ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
        </motion.div>
        <motion.div
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            isDark ? 'border-white/30' : 'border-violet-300/50'
          }`}
          animate={{
            borderColor: isDark
              ? ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.3)"]
              : ["rgba(139,92,246,0.3)", "rgba(139,92,246,0.8)", "rgba(139,92,246,0.3)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className={`w-1 h-3 rounded-full mt-2 ${
              isDark ? 'bg-white/80' : 'bg-violet-500'
            }`}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
