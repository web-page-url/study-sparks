import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center | Study Sparks - Support & Resources",
  description: "Get help and support at Study Sparks. Find answers to frequently asked questions, tutorials, and resources to make the most of your learning experience.",
  keywords: ["help center", "support", "FAQ", "tutorials", "learning resources", "customer support", "educational help"],
  openGraph: {
    title: "Help Center | Study Sparks - Support & Resources",
    description: "Get help and support with your Study Sparks learning journey. Find FAQs, tutorials, and resources.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Help Center | Study Sparks - Support & Resources",
    description: "Find answers to your questions and get support for your Study Sparks learning experience.",
  },
};

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
