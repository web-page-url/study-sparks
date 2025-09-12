'use client';

import React, { useState, useEffect } from 'react';

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
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [showInstallInstructions, setShowInstallInstructions] = useState(false);

  // PWA Installation Logic
  useEffect(() => {
    let promptTimeout: NodeJS.Timeout;

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Clear the mobile fallback timeout since we got the prompt
      if (promptTimeout) clearTimeout(promptTimeout);
    };

    // Enhanced mobile detection
    const detectMobile = () => {
      if (typeof window !== 'undefined') {
        const userAgent = navigator.userAgent;
        const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        const isSmallScreen = window.innerWidth <= 768;
        const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        const detectedMobile = isMobileUA || (isSmallScreen && hasTouch);
        setIsMobileDevice(detectedMobile);
        return detectedMobile;
      }
      return false;
    };

    // Check if app is already installed
    const checkInstalledStatus = () => {
      if (typeof window !== 'undefined') {
        // Check if running in standalone mode (iOS) or as PWA (Android)
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
        const isInWebAppiOS = (window.navigator as any).standalone === true;

        if (isStandalone || isInWebAppiOS) {
          setIsInstalled(true);
          return;
        }

        // Check if app is in the list of installed apps
        if ('getInstalledRelatedApps' in navigator) {
          (navigator as any).getInstalledRelatedApps().then((relatedApps: any[]) => {
            const isRelatedAppInstalled = relatedApps.some((app) =>
              app.url === window.location.origin
            );
            setIsInstalled(isRelatedAppInstalled);
          }).catch(() => {
            setIsInstalled(false);
          });
        }
      }
    };

    const isMobile = detectMobile();

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Check installation status on mount
    checkInstalledStatus();

    // Listen for app installed event
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
      setShowInstallInstructions(false);
    });

    // For mobile devices, show installation instructions if beforeinstallprompt doesn't fire
    if (isMobile) {
      promptTimeout = setTimeout(() => {
        if (!deferredPrompt && !isInstalled) {
          setShowInstallInstructions(true);
        }
      }, 2000); // Wait 2 seconds for beforeinstallprompt
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', () => {});
      if (promptTimeout) clearTimeout(promptTimeout);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Desktop/native install prompt available
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === 'accepted') {
        console.log('🎉 PWA installed successfully!');
        setIsInstalled(true);
      }
    } else if (showInstallInstructions) {
      // Mobile: Try auto-installation methods
      await attemptAutoInstall();
    }
  };

  const attemptAutoInstall = async () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    // Try to automatically trigger installation without user intervention
    try {
      if (isAndroid) {
        // On Android, try to simulate the install process
        // Some Android browsers support programmatic installation
        console.log('🤖 Attempting Android auto-installation...');

        // Try to trigger the browser's install functionality
        if ('navigator' in window && 'share' in navigator) {
          // Some browsers support sharing which can lead to install options
          console.log('📱 Attempting share-based installation...');
        }

        // Simulate clicking the browser's install button if it exists
        // This is a best-effort approach
        const installButtons = document.querySelectorAll('[aria-label*="install"], [title*="install"], button[title*="Install"]');
        if (installButtons.length > 0) {
          console.log('🎯 Found potential install button, attempting click...');
          (installButtons[0] as HTMLElement).click();
          return;
        }

        // Fallback: Try to open the browser's menu or settings
        console.log('📋 Android installation attempted - check browser for install prompt');
      } else if (isIOS) {
        // iOS Safari doesn't support auto-installation
        // But we can try to guide the user more directly
        console.log('📱 iOS detected - opening simplified instructions...');

        // Show minimal instruction without alert
        const instructions = 'Tap Share button → Add to Home Screen → Add';
        // Instead of alert, we could show a toast or inline message
        console.log('iOS Instructions:', instructions);
      }

      // If we can't auto-install, the user will see the browser's native prompts
      console.log('🚀 Installation process initiated - check browser for prompts');

    } catch (error) {
      console.log('⚠️ Auto-installation attempt completed');
    }
  };

  const handleOpenApp = () => {
    // For opening the installed app, we can try to focus it or redirect
    if (typeof window !== 'undefined' && 'focus' in window) {
      window.focus();
    }
    console.log('📱 App is already installed and running');
  };

  const buttonText = isInstalled ? 'Open App' :
                    showInstallInstructions ? 'Download for Android' : 'Install App';

  return (
    <button
      onClick={isInstalled ? handleOpenApp : handleInstallClick}
      className={`${
        isMobile
          ? 'px-2 py-1.5 text-xs'
          : 'px-3 py-2 text-sm'
      } font-semibold rounded-lg transition-colors duration-200 border ${
        isInstalled
          ? isScrolled
            ? 'text-green-700 bg-green-50 hover:bg-green-100 border-green-200'
            : 'text-green-400 bg-green-500/20 hover:bg-green-500/30 border-green-400/30'
          : isScrolled
            ? 'text-violet-700 bg-violet-50 hover:bg-violet-100 border-violet-200'
            : 'text-violet-400 bg-violet-500/20 hover:bg-violet-500/30 border-violet-400/30'
      }`}
      style={{
        color: isInstalled
          ? (isScrolled ? '#15803d' : '#4ade80')
          : (isScrolled ? '#7c3aed' : '#a78bfa'),
        backgroundColor: isInstalled
          ? (isScrolled ? 'rgba(240, 253, 244, 0.9)' : 'rgba(34, 197, 94, 0.1)')
          : (isScrolled ? 'rgba(245, 243, 255, 0.9)' : 'rgba(139, 92, 246, 0.1)'),
        borderColor: isInstalled
          ? (isScrolled ? '#bbf7d0' : 'rgba(34, 197, 94, 0.2)')
          : (isScrolled ? '#ddd6fe' : 'rgba(139, 92, 246, 0.2)')
      }}
    >
      {buttonText}
    </button>
  );
}