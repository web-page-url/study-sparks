import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community | Study Sparks - Connect, Learn, Grow Together",
  description: "Join the Study Sparks community of young learners. Connect with peers, share achievements, participate in challenges, and grow together through collaborative learning experiences.",
  keywords: ["learning community", "student community", "educational platform", "peer learning", "student challenges", "learning network"],
  openGraph: {
    title: "Community | Study Sparks - Connect, Learn, Grow Together",
    description: "Join our vibrant community of young learners at Study Sparks. Connect, share achievements, and grow together through collaborative learning.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Community | Study Sparks - Connect, Learn, Grow Together",
    description: "Join the Study Sparks community of young learners and connect with peers through collaborative learning.",
  },
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
