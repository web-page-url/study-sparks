'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Smartphone, ExternalLink } from 'lucide-react';

interface PWAInstallButtonProps {
  isScrolled?: boolean;
  isMobile?: boolean;
}

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: ReadonlyArray<string>;
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

export default function PWAInstallButton({ isScrolled = false, isMobile = false }: PWAInstallButtonProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showButton, setShowButton] = useState(true); // Start with true for immediate visibility
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    // Check if app is already installed
    const checkInstalled = () => {
      if (typeof window !== 'undefined') {
        console.log('PWA: Checking installation status...');

        // Check if running in standalone mode (iOS) or as PWA (Android)
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
        const isInWebAppiOS = (window.navigator as any).standalone === true;

        console.log('PWA: Standalone mode:', isStandalone, 'iOS Web App:', isInWebAppiOS);

        if (isStandalone || isInWebAppiOS) {
          console.log('PWA: App is already installed (standalone mode)');
          setIsInstalled(true);
          setShowButton(true);
          return;
        }

        // Check if app is in the list of installed apps
        if ('getInstalledRelatedApps' in navigator) {
          (navigator as any).getInstalledRelatedApps().then((relatedApps: any[]) => {
            const isRelatedAppInstalled = relatedApps.some((app) =>
              app.url === window.location.origin
            );
            console.log('PWA: Related apps check:', relatedApps, 'Installed:', isRelatedAppInstalled);
            setIsInstalled(isRelatedAppInstalled);
          }).catch((error: any) => {
            console.log('PWA: Related apps check failed:', error);
            // Fallback: assume not installed if check fails
            setIsInstalled(false);
          });
        }

        // Show button in development mode or if PWA features are supported
        const isDev = process.env.NODE_ENV === 'development';
        const hasServiceWorker = typeof window !== 'undefined' && 'serviceWorker' in navigator;

        console.log('PWA: Environment:', process.env.NODE_ENV, 'SW support:', hasServiceWorker);

        // Always show button in development mode for testing
        if (isDev) {
          console.log('PWA: Showing install button (development mode)');
          setShowButton(true);
        } else if (hasServiceWorker) {
          console.log('PWA: Showing install button (service worker support)');
          setShowButton(true);
        } else {
          // Show button anyway for better UX
          console.log('PWA: Showing install button (fallback)');
          setShowButton(true);
        }
      }
    };

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      console.log('PWA: Install prompt available');
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
      setShowButton(true);
    };

    // Listen for app installed event
    const handleAppInstalled = () => {
      console.log('PWA: App installed successfully');
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.addEventListener('appinstalled', handleAppInstalled);

      // Initial check with delay to ensure DOM is ready
      setTimeout(checkInstalled, 1000);

      // Re-check periodically
      const interval = setInterval(checkInstalled, 5000);

      return () => {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        window.removeEventListener('appinstalled', handleAppInstalled);
        clearInterval(interval);
      };
    }
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Use the native install prompt if available
      setIsLoading(true);

      try {
        // Show the install prompt
        await deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;

        console.log('PWA: User choice:', outcome);

        if (outcome === 'accepted') {
          console.log('PWA: User accepted the install');
          setIsInstalled(true);
          showToastNotification('🎉 App installed successfully!');
        } else {
          console.log('PWA: User dismissed the install');
          showToastNotification('❌ Installation cancelled');
        }

        // Clear the deferred prompt
        setDeferredPrompt(null);
        setIsInstallable(false);
      } catch (error) {
        console.error('PWA: Install failed:', error);
        showManualInstallInstructions();
      } finally {
        setIsLoading(false);
      }
    } else {
      // Fallback for development mode or when prompt isn't available
      console.log('PWA: Install prompt not available, showing manual instructions');
      showToastNotification('📱 Showing installation instructions...');
      showManualInstallInstructions();
    }
  };

  const showManualInstallInstructions = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    const isFirefox = /Firefox/.test(navigator.userAgent);
    const isEdge = /Edg/.test(navigator.userAgent);

    let instructions = 'To install this app:\n\n';

    if (isIOS) {
      instructions += '📱 iOS Safari:\n';
      instructions += '1. Tap the Share button (⬆️)\n';
      instructions += '2. Select "Add to Home Screen"\n';
      instructions += '3. Tap "Add" to confirm\n\n';
    } else if (isAndroid) {
      if (isChrome || isEdge) {
        instructions += '🤖 Android Chrome/Edge:\n';
        instructions += '1. Look for the "Install" icon in the address bar\n';
        instructions += '2. Tap "Install" or "Add to Home Screen"\n';
        instructions += '3. Follow the prompts to install\n\n';
        instructions += '💡 Tip: The install icon looks like a phone with a plus sign\n\n';
      } else {
        instructions += '🤖 Android (Other Browsers):\n';
        instructions += '1. Open the browser menu (⋮)\n';
        instructions += '2. Select "Add to Home Screen"\n';
        instructions += '3. Follow the prompts to install\n\n';
      }
    } else {
      instructions += '💻 Desktop:\n';
      instructions += '1. Look for an "Install" button in the address bar\n';
      instructions += '2. Or click the app menu (⋮) and select "Install"\n';
      instructions += '3. Follow the prompts to install\n\n';
    }

    instructions += '❓ Need help? Visit our Help page for detailed instructions.';
    instructions += '\n\n🔗 /help';

    // Also try to open the help page
    setTimeout(() => {
      if (window.confirm('Would you like to visit our Help page for detailed installation instructions?')) {
        window.location.href = '/help';
      }
    }, 1000);

    alert(instructions);
  };

  const showToastNotification = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleOpenApp = () => {
    // For opening the installed app, we can try to focus it
    if (typeof window !== 'undefined' && 'focus' in window) {
      window.focus();
    }
    // Show feedback to user
    showToastNotification('📱 App is already installed and running!');
    console.log('PWA: App is already installed and running');
  };

  // Don't render anything if button shouldn't be shown
  if (!showButton) {
    console.log('PWA: Button not shown (showButton is false)');
    return null;
  }

  console.log('PWA: Rendering button - Installed:', isInstalled, 'Installable:', isInstallable, 'Mobile:', isMobile);

  const buttonText = isInstalled ? 'Open App' : (isInstallable ? 'Install App' : 'Install PWA');
  const buttonIcon = isInstalled ? ExternalLink : (isInstallable ? Download : Smartphone);
  const Icon = buttonIcon;

  return (
    <>
      <AnimatePresence>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={!isInstalled && !isInstallable
            ? { opacity: 1, scale: [1, 1.02, 1] }
            : { opacity: 1, scale: 1 }
          }
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={!isInstalled && !isInstallable
            ? { duration: 2, repeat: Infinity, repeatType: "reverse" }
            : { duration: 0.3 }
          }
          onClick={isInstalled ? handleOpenApp : handleInstallClick}
          disabled={isLoading}
          className={`relative ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-2'} rounded-lg font-medium transition-all duration-200 flex items-center ${isMobile ? 'space-x-1.5' : 'space-x-2'} ${
            isInstalled
              ? isScrolled
                ? 'text-green-600 bg-green-50 hover:bg-green-100 border border-green-200'
                : 'text-green-400 bg-green-500/20 hover:bg-green-500/30 border border-green-400/30'
              : isScrolled
              ? 'text-violet-600 bg-violet-50 hover:bg-violet-100 border border-violet-200'
              : 'text-violet-400 bg-violet-500/20 hover:bg-violet-500/30 border border-violet-400/30'
          } ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          title={isInstalled ? 'App is already installed' : isInstallable ? 'Install Study Sparks as an app' : 'Get installation instructions'}
          aria-label={isInstalled ? 'Open installed app' : 'Install app'}
        >
          <Icon className={isMobile ? "w-3.5 h-3.5" : "w-4 h-4"} />
          <span className={`${isMobile ? 'inline font-semibold' : ''} ${isScrolled ? 'text-current' : 'text-current'}`}>
            {isLoading ? 'Installing...' : buttonText}
          </span>

          {/* Loading indicator */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className={`${isMobile ? "w-3.5 h-3.5" : "w-4 h-4"} border-2 border-current border-t-transparent rounded-full`}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Success indicator for installed state */}
          <AnimatePresence>
            {isInstalled && !isLoading && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={`absolute -top-1 -right-1 ${isMobile ? "w-2.5 h-2.5" : "w-3 h-3"} bg-green-500 rounded-full border-2 border-white`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-full h-full bg-white rounded-full flex items-center justify-center"
                  >
                    <Smartphone className={`${isMobile ? "w-1 h-1" : "w-1.5 h-1.5"} text-green-500`} />
                  </motion.div>
                </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </AnimatePresence>

      {/* Toast Notification - Outside main AnimatePresence to avoid key conflicts */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            key="toast-notification"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed bottom-4 right-4 z-50 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg border border-gray-700"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
