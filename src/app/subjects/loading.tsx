import { CardSkeleton } from "@/components/LoadingSkeleton";

export default function SubjectsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 via-indigo-50 to-purple-100">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="h-6 w-64 bg-violet-200 rounded-full mx-auto mb-6 animate-pulse" />
          <div className="h-16 w-96 bg-gray-300 rounded-xl mx-auto mb-6 animate-pulse" />
          <div className="h-6 w-80 bg-gray-200 rounded-lg mx-auto animate-pulse" />
        </div>

        {/* Subjects Grid */}
        <CardSkeleton count={5} />
      </div>
    </div>
  );
}
