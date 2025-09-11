'use client';

import { useEffect } from 'react';
import { registerServiceWorker } from '@/utils/swRegistration';

export default function ServiceWorkerRegister() {
  useEffect(() => {
    // Register service worker only in production and when not in development
    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
      registerServiceWorker();
    }
  }, []);

  // This component doesn't render anything
  return null;
}
