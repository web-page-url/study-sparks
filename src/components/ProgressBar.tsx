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

export function CombinedProgressBar({ color = '#8b5cf6', height = 3 }: ProgressBarProps) {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [pathname]);

  const scrollScale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Use page load progress when loading, otherwise use scroll progress
  const scaleX = isLoading ? 0.9 : scrollScale;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 origin-left"
      style={{
        scaleX,
        height,
        backgroundColor: color,
      }}
      animate={{
        scaleX: isLoading ? 0.9 : scrollScale.get(),
        backgroundColor: isLoading ? '#f59e0b' : color
      }}
      transition={{
        scaleX: { duration: isLoading ? 0.8 : 0.3 },
        backgroundColor: { duration: 0.3 }
      }}
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
