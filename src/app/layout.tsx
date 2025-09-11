import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import Navigation from "@/components/Navigation";
import CombinedProgressBar from "@/components/ProgressBar";
import { WebsiteStructuredData, OrganizationStructuredData } from "@/components/StructuredData";
import { Analytics, WebVitals, ErrorTracking } from "@/components/Analytics";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://studysparks.vercel.app'),
  title: {
    default: "Study Sparks | Learn Coding, Math, Science, English & AI",
    template: "%s | Study Sparks"
  },
  description: "Study Sparks makes learning fun for Students! Master Coding, Math, Science, English, and AI through interactive live classes, gamified learning, and personalized Human + AI-powered education.",
  keywords: ["kids education", "coding for kids", "online learning", "math learning", "science education", "AI for kids", "interactive learning", "live classes", "educational platform", "children learning"],
  authors: [{ name: "Study Sparks Team" }],
  creator: "Study Sparks",
  publisher: "Study Sparks",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Enhanced Open Graph for Facebook, LinkedIn, and other platforms
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://studysparks.vercel.app",
    title: "Study Sparks | Fun Learning Platform for Students",
    description: "Transform learning with Study Sparks! Interactive coding, math, science, and AI classes for Students. Gamified education with live teachers and AI-powered personalized learning.",
    siteName: "Study Sparks",
    images: [
      {
        url: "/study-spark-logo.png",
        width: 1200,
        height: 630,
        alt: "Study Sparks - Making Learning Fun for Students",
        type: "image/png",
      },
      {
        url: "/favicon-512x512.png",
        width: 512,
        height: 512,
        alt: "Study Sparks Logo",
        type: "image/png",
      },
    ],
  },
  // Enhanced Twitter Card for better Twitter previews
  twitter: {
    card: "summary_large_image",
    title: "Study Sparks | Fun Learning for Students",
    description: "Transform your child's learning experience! Interactive coding, math, science, and AI classes with gamified education and live teachers.",
    images: ["/study-spark-logo.png"],
    creator: "@studysparks",
    site: "@studysparks",
  },
  // Additional social media meta tags
  other: {
    // WhatsApp specific
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/png",

    // LinkedIn specific
    "og:image:secure_url": "https://study-sparks.vercel.app/study-spark-logo.png",

    // Microsoft Teams specific
    "msapplication-TileImage": "/favicon-144x144.png",
    "msapplication-TileColor": "#8b5cf6",

    // General social media
    "theme-color": "#8b5cf6",
    "msapplication-navbutton-color": "#8b5cf6",
    "apple-mobile-web-app-status-bar-style": "black-translucent",

    // Additional SEO
    "article:author": "Study Sparks Team",
    "article:publisher": "Study Sparks",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  // Additional metadata for better social sharing
  alternates: {
    canonical: "https://studysparks.vercel.app",
  },
  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Primary Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" href="/favicon-192x192.png" sizes="192x192" />

        {/* Android/Chrome Icons */}
        <link rel="icon" href="/favicon-192x192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/favicon-512x512.png" sizes="512x512" type="image/png" />

        {/* Microsoft Tiles */}
        <meta name="msapplication-TileImage" content="/favicon-128x128.png" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />

        {/* Additional Favicon Sizes */}
        <link rel="icon" href="/favicon-48x48.png" sizes="48x48" type="image/png" />
        <link rel="icon" href="/favicon-64x64.png" sizes="64x64" type="image/png" />
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="icon" href="/favicon-128x128.png" sizes="128x128" type="image/png" />
        <link rel="icon" href="/favicon-256x256.png" sizes="256x256" type="image/png" />

        {/* Theme and Mobile Web App */}
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="msapplication-navbutton-color" content="#8b5cf6" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Viewport and Performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.webmanifest" />

        {/* Additional Social Media Meta Tags */}
        <meta property="og:image:secure_url" content="https://study-sparks.vercel.app/study-spark-logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />

        {/* WhatsApp specific */}
        <meta property="og:image" content="https://study-sparks.vercel.app/study-spark-logo.png" />

        {/* LinkedIn specific */}
        <meta property="og:title" content="Study Sparks | Fun Learning Platform for Kids" />
        <meta property="og:description" content="Transform learning with Study Sparks! Interactive coding, math, science, and AI classes for kids." />

        {/* Microsoft Teams specific */}
        <meta name="application-name" content="Study Sparks" />
        <meta name="msapplication-tooltip" content="Learn Coding, Math, Science, English & AI" />

        {/* Additional SEO and Social */}
        <meta name="author" content="Study Sparks Team" />
        <meta name="publisher" content="Study Sparks" />
        <meta name="category" content="Education" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} font-poppins antialiased bg-black text-white overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        {/* Progress Bar - positioned above navigation */}
        <CombinedProgressBar />

        {/* Navigation */}
        <Navigation />

        {/* Service Worker Registration */}
        <ServiceWorkerRegister />

        <ErrorBoundary>
          <div className="relative min-h-screen pt-16">
            {children}
          </div>
        </ErrorBoundary>

        {/* Analytics and Performance Monitoring */}
        <Analytics />
        <WebVitals />
        <ErrorTracking />

        {/* Structured Data for SEO */}
        <WebsiteStructuredData />
        <OrganizationStructuredData />
      </body>
    </html>
  );
}
