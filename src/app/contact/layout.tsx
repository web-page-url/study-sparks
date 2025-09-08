import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Study Sparks - Get in Touch",
  description: "Contact Study Sparks for support, inquiries, or partnerships. We're here to help you with your learning journey and answer any questions you may have.",
  keywords: ["contact study sparks", "customer support", "get help", "support team", "contact information", "reach out"],
  openGraph: {
    title: "Contact Us | Study Sparks - Get in Touch",
    description: "Get in touch with Study Sparks. We're here to help with your learning journey and answer your questions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Study Sparks - Get in Touch",
    description: "Contact Study Sparks for support, inquiries, and partnerships.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
