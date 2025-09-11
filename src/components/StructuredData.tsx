import { Metadata } from "next";

interface StructuredDataProps {
  type?: 'website' | 'organization' | 'educational' | 'course';
  data?: any;
}

export function StructuredData({ type = 'website', data }: StructuredDataProps) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type === 'website' ? 'WebSite' : type === 'organization' ? 'EducationalOrganization' : 'Course',
    "name": "Study Sparks",
    "description": "Study Sparks makes learning fun for kids! Master Coding, Math, Science, English, and AI through interactive live classes, gamified learning, and personalized AI-powered education.",
    "url": "https://studysparks.vercel.app",
    "logo": "https://study-sparks.vercel.app/logo.png",
    "sameAs": [
      "https://twitter.com/studysparks",
      "https://facebook.com/studysparks",
      "https://linkedin.com/company/studysparks"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "CA",
      "addressLocality": "San Francisco"
    },
    "foundingDate": "2023",
    "educationalCredentialAwarded": "Certificate of Completion",
    "hasEducationalUse": "Educational technology",
    "teaches": [
      "Computer Programming",
      "Mathematics",
      "Science",
      "English Language",
      "Artificial Intelligence"
    ],
    "educationalLevel": "Elementary School",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": "children",
      "geographicArea": "Worldwide"
    }
  };

  const structuredData = data ? { ...baseData, ...data } : baseData;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

export function WebsiteStructuredData() {
  return (
    <StructuredData
      type="website"
      data={{
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://study-sparks.vercel.app/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Study Sparks",
          "logo": {
            "@type": "ImageObject",
            "url": "https://study-sparks.vercel.app/logo.png"
          }
        }
      }}
    />
  );
}

export function OrganizationStructuredData() {
  return (
    <StructuredData
      type="organization"
      data={{
        "founder": {
          "@type": "Person",
          "name": "Study Sparks Team"
        },
        "employee": [
          {
            "@type": "Person",
            "name": "Dr. Priya Sharma",
            "jobTitle": "Mathematics Expert",
            "knowsAbout": ["Mathematics", "Statistics", "Data Analysis"]
          },
          {
            "@type": "Person",
            "name": "Rajesh Kumar",
            "jobTitle": "Coding & AI Specialist",
            "knowsAbout": ["Python", "JavaScript", "Artificial Intelligence"]
          }
        ],
        "offers": [
          {
            "@type": "Offer",
            "category": "Educational Service",
            "description": "Interactive live coding classes for kids"
          },
          {
            "@type": "Offer",
            "category": "Educational Service",
            "description": "Mathematics tutoring and problem-solving"
          }
        ]
      }}
    />
  );
}

export function CourseStructuredData({ courseName, description, provider, duration }: {
  courseName: string;
  description: string;
  provider: string;
  duration: string;
}) {
  return (
    <StructuredData
      type="course"
      data={{
        "name": courseName,
        "description": description,
        "provider": {
          "@type": "Organization",
          "name": provider
        },
        "courseMode": "online",
        "educationalUse": "learning",
        "timeRequired": duration,
        "inLanguage": "en-US",
        "isAccessibleForFree": false,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      }}
    />
  );
}
