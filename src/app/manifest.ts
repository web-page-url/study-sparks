import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Study Sparks - Fun Learning for Kids',
    short_name: 'Study Sparks',
    description: 'Study Sparks makes learning fun for kids! Master Coding, Math, Science, English, and AI through interactive live classes, gamified learning, and AI-powered education.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#8b5cf6',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en-US',
    categories: ['education', 'productivity', 'lifestyle'],
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/favicon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/favicon-64x64.png',
        sizes: '64x64',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/favicon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/favicon-256x256.png',
        sizes: '256x256',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      // Apple touch icons
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any'
      },
    ],
    // Additional PWA features
    prefer_related_applications: false,
    related_applications: [],
    screenshots: [
      {
        src: '/study-spark-logo.png',
        sizes: '1200x630',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Study Sparks - Making Learning Fun'
      }
    ]
  }
}
