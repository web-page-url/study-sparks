'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

interface ProgressBarProps {
  color?: string;
  height?: number;
}

export function ScrollProgressBar({ color = '#8b5cf6', height = 3 }: ProgressBarProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 origin-left"
      style={{
        scaleX,
        height,
        backgroundColor: color,
      }}
    />
  );
}

export function PageLoadProgressBar({ color = '#8b5cf6', height = 3 }: ProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const startProgress = () => {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval);
            return prev;
          }
          return prev + Math.random() * 15;
        });
      }, 100);

      return interval;
    };

    const completeProgress = () => {
      setProgress(100);
      setTimeout(() => setProgress(0), 300);
    };

    // Start progress on route change
    const interval = startProgress();

    // Complete progress after a delay (simulating page load)
    timer = setTimeout(completeProgress, 800);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [pathname]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 origin-left"
      style={{
        scaleX: progress / 100,
        height,
        backgroundColor: color,
      }}
      animate={{ scaleX: progress / 100 }}
      transition={{ duration: 0.3 }}
    />
  );
}

export function CombinedProgressBar({ color = '#8b5cf6', height = 4 }: ProgressBarProps) {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      // Ensure value is a valid number between 0 and 1
      const clampedValue = Math.max(0, Math.min(1, Number.isFinite(value) ? value : 0));
      setScrollProgress(clampedValue);
    });

    // Set initial scroll progress
    const initialValue = Math.max(0, Math.min(1, scrollYProgress.get() || 0));
    setScrollProgress(initialValue);

    return unsubscribe;
  }, [scrollYProgress]);

  // Use the scroll progress directly instead of useSpring to avoid NaN issues
  const currentScale = isLoading ? 0.85 : Math.max(scrollProgress, 0.02); // Minimum 2% visibility

  console.log('ProgressBar - isLoading:', isLoading, 'scrollProgress:', scrollProgress.toFixed(3), 'currentScale:', currentScale.toFixed(3));

  // Fallback: always show at least 10% progress for testing
  const displayScale = Math.max(currentScale, 0.1);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] origin-left shadow-sm border-b border-white/10"
      style={{
        height,
        background: `linear-gradient(90deg, ${color} 0%, ${color}DD 50%, ${color}BB 100%)`,
      }}
      animate={{
        scaleX: displayScale,
        backgroundColor: isLoading ? '#f59e0b' : color
      }}
      transition={{
        scaleX: { duration: isLoading ? 1.2 : 0.2, ease: "easeOut" },
        backgroundColor: { duration: 0.4 }
      }}
      initial={{ scaleX: 0.1 }} // Start with 10% visibility for testing
    />
  );
}

// Hook for manual progress control
export function useProgressBar() {
  const [progress, setProgress] = useState(0);

  const startProgress = () => setProgress(10);
  const updateProgress = (value: number) => setProgress(Math.min(value, 90));
  const completeProgress = () => {
    setProgress(100);
    setTimeout(() => setProgress(0), 300);
  };

  return { progress, startProgress, updateProgress, completeProgress };
}

export default CombinedProgressBar;
