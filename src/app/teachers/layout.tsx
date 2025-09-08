import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Teachers | Study Sparks - Expert Educators",
  description: "Meet our team of expert educators at Study Sparks. Learn from industry professionals, published researchers, and passionate teachers who make complex subjects simple and fun.",
  keywords: ["study sparks teachers", "expert educators", "online teachers", "coding teachers", "math teachers", "science teachers"],
  openGraph: {
    title: "Our Teachers | Study Sparks - Expert Educators",
    description: "Meet our team of expert educators who make learning fun and accessible for kids through personalized teaching approaches.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Teachers | Study Sparks - Expert Educators",
    description: "Learn from industry experts and passionate educators at Study Sparks.",
  },
};

export default function TeachersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
