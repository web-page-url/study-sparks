import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Classes | Study Sparks - Interactive Online Learning",
  description: "Join our interactive live classes at Study Sparks. Experience real-time learning with expert teachers, instant feedback, and collaborative sessions in Coding, Math, Science, and more.",
  keywords: ["live classes", "online learning", "interactive classes", "virtual classroom", "real-time learning", "live tutoring"],
  openGraph: {
    title: "Live Classes | Study Sparks - Interactive Online Learning",
    description: "Experience real-time learning with expert teachers through our interactive live classes at Study Sparks.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Classes | Study Sparks - Interactive Online Learning",
    description: "Join interactive live classes with expert teachers and real-time learning experiences.",
  },
};

export default function LiveClassesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
