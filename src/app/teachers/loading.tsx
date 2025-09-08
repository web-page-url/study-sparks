import { CardSkeleton } from "@/components/LoadingSkeleton";

export default function TeachersLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 via-indigo-50 to-purple-100">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="h-6 w-64 bg-violet-200 rounded-full mx-auto mb-6 animate-pulse" />
          <div className="h-16 w-96 bg-gray-300 rounded-xl mx-auto mb-6 animate-pulse" />
          <div className="h-6 w-80 bg-gray-200 rounded-lg mx-auto animate-pulse" />
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/50 animate-pulse"
            >
              <div className="h-8 w-8 bg-violet-200 rounded-lg mx-auto mb-3" />
              <div className="h-8 w-16 bg-gray-300 rounded mx-auto mb-2" />
              <div className="h-4 w-20 bg-gray-200 rounded mx-auto" />
            </div>
          ))}
        </div>

        {/* Teachers Grid */}
        <CardSkeleton count={4} />
      </div>
    </div>
  );
}
