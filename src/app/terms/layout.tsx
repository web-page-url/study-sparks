import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Study Sparks - Terms & Conditions",
  description: "Read Study Sparks Terms of Service and Conditions. Understand our platform rules, user responsibilities, and legal agreements for using our educational services.",
  keywords: ["terms of service", "terms and conditions", "user agreement", "legal terms", "platform rules", "service agreement"],
  openGraph: {
    title: "Terms of Service | Study Sparks - Terms & Conditions",
    description: "Read our Terms of Service to understand the rules and conditions for using Study Sparks platform.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Study Sparks - Terms & Conditions",
    description: "Understand the terms and conditions for using Study Sparks educational platform.",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
