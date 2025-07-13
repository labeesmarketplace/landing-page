import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner Skeleton */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <Skeleton className="w-full h-full" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="flex items-center space-x-4">
            <Skeleton className="w-20 h-20 rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-6 w-96" />
            </div>
          </div>
        </div>
      </div>

      {/* Description Skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-4">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-6 w-5/6" />
        </div>
      </div>

      {/* Tabs Skeleton */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex space-x-4 mb-8">
            <Skeleton className="h-12 w-24" />
            <Skeleton className="h-12 w-24" />
            <Skeleton className="h-12 w-24" />
          </div>
          
          {/* Products Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <Skeleton className="h-64 w-full" />
                <div className="p-6 space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-8 w-20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 