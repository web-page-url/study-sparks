import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Study Sparks - Your Privacy Matters",
  description: "Read Study Sparks Privacy Policy to understand how we collect, use, and protect your personal information and data. Your privacy and security are our top priorities.",
  keywords: ["privacy policy", "data protection", "privacy rights", "data security", "GDPR compliance", "children's privacy"],
  openGraph: {
    title: "Privacy Policy | Study Sparks - Your Privacy Matters",
    description: "Learn how Study Sparks protects your privacy and handles your personal information responsibly.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Study Sparks - Your Privacy Matters",
    description: "Your privacy matters to us. Read our comprehensive privacy policy.",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
