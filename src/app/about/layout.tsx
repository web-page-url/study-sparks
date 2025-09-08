import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Study Sparks - Empowering Young Minds",
  description: "Learn about Study Sparks mission to make world-class education accessible, engaging, and fun for every child. Discover our values, vision, and commitment to personalized learning.",
  keywords: ["about study sparks", "education mission", "kids learning platform", "educational values", "learning platform"],
  openGraph: {
    title: "About Study Sparks - Empowering Young Minds",
    description: "Discover our mission to make world-class education accessible and fun for every child through innovative technology and personalized learning.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Study Sparks - Empowering Young Minds",
    description: "Learn about our mission to democratize access to quality education through innovative technology.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
