import { Skeleton } from '@/components/ui/skeleton';

export default function ExploreLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header Skeleton */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="h-12 w-96 mx-auto mb-4 bg-white/20" />
          <Skeleton className="h-6 w-2/3 mx-auto bg-white/20" />
        </div>
      </div>

      {/* Carousel Skeleton */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <Skeleton className="h-96 w-full" />
            </div>
            
            {/* Navigation Arrows Skeleton */}
            <Skeleton className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full" />
            <Skeleton className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full" />
            
            {/* Dots Skeleton */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="w-3 h-3 rounded-full" />
              ))}
            </div>
          </div>

          {/* Brand Grid Skeleton */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <Skeleton className="w-16 h-16 mx-auto mb-4 rounded-lg" />
                <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 