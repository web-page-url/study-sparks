import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import Navigation from "@/components/Navigation";
import CombinedProgressBar from "@/components/ProgressBar";
import { WebsiteStructuredData, OrganizationStructuredData } from "@/components/StructuredData";
import { Analytics, WebVitals, ErrorTracking } from "@/components/Analytics";

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
  metadataBase: new URL('https://ai-mantra.vercel.app'),
  title: {
    default: "Study Sparks | Learn Coding, Math, Science, English & AI",
    template: "%s | Study Sparks"
  },
  description: "Study Sparks makes learning fun for kids! Master Coding, Math, Science, English, and AI through interactive live classes, gamified learning, and personalized AI-powered education.",
  keywords: ["kids education", "coding for kids", "online learning", "math learning", "science education", "AI for kids", "interactive learning", "live classes"],
  authors: [{ name: "Study Sparks Team" }],
  creator: "Study Sparks",
  publisher: "Study Sparks",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://studysparks.vercel.app",
    title: "Study Sparks | Learn Coding, Math, Science, English & AI",
    description: "Study Sparks makes learning fun for kids! Master Coding, Math, Science, English, and AI through interactive live classes and gamified learning.",
    siteName: "Study Sparks",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Study Sparks - Fun Learning for Kids",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Sparks | Learn Coding, Math, Science, English & AI",
    description: "Study Sparks makes learning fun for kids! Master Coding, Math, Science, English, and AI through interactive live classes.",
    images: ["/og-image.png"],
    creator: "@studysparks",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} font-poppins antialiased bg-black text-white overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        {/* Progress Bar - positioned above navigation */}
        <CombinedProgressBar />

        {/* Navigation */}
        <Navigation />

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
