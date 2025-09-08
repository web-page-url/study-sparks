import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subjects | Study Sparks - Learn Coding, Math, Science & More",
  description: "Explore our comprehensive curriculum at Study Sparks. Master Coding, Math, Science, English, and AI through interactive lessons, projects, and personalized learning paths.",
  keywords: ["coding for kids", "math learning", "science education", "english lessons", "AI for kids", "online subjects", "interactive learning"],
  openGraph: {
    title: "Subjects | Study Sparks - Learn Coding, Math, Science & More",
    description: "Master Coding, Math, Science, English, and AI through interactive lessons and personalized learning at Study Sparks.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subjects | Study Sparks - Learn Coding, Math, Science & More",
    description: "Explore our comprehensive curriculum covering Coding, Math, Science, English, and AI.",
  },
};

export default function SubjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
