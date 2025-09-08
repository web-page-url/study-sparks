import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Study Sparks - Join Our Mission to Transform Education",
  description: "Join the Study Sparks team and help transform education for millions of children worldwide. Explore career opportunities in education, technology, and innovation.",
  keywords: ["careers", "job opportunities", "education jobs", "tech careers", "teaching careers", "educational technology"],
  openGraph: {
    title: "Careers | Study Sparks - Join Our Mission to Transform Education",
    description: "Join our mission to transform education. Explore exciting career opportunities at Study Sparks.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Study Sparks - Join Our Mission to Transform Education",
    description: "Join Study Sparks and help transform education for millions of children worldwide.",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
