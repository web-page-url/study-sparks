'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: pathname,
      });
    }
  }, [pathname]);

  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log performance metrics
          console.log('Performance:', entry.name, entry.duration);

          // Send to analytics if available
          if (window.gtag) {
            window.gtag('event', 'performance_metric', {
              event_category: 'performance',
              event_label: entry.name,
              value: Math.round(entry.duration)
            });
          }
        }
      });

      // Observe different performance metrics
      observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] });

      return () => observer.disconnect();
    }
  }, []);

  return null;
}

// Google Analytics script component
export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  );
}

// Web Vitals tracking
export function WebVitals() {
  useEffect(() => {
    // Track Core Web Vitals
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      // Dynamic import for web-vitals
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }
  }, []);

  return null;
}

// Error tracking component
export function ErrorTracking() {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      // Log errors to analytics
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: event.message,
          fatal: false,
        });
      }

      // Also log to console for development
      console.error('Error tracked:', event.error);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: event.reason?.toString() || 'Unhandled promise rejection',
          fatal: false,
        });
      }

      console.error('Unhandled rejection tracked:', event.reason);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return null;
}
