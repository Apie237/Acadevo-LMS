import React from "react";

const CoursesPageSkeleton = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section Skeleton */}
      <div className="bg-navy text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-12 bg-white/20 rounded w-80 max-w-full mb-4 animate-pulse"></div>
          <div className="h-6 bg-white/20 rounded w-96 max-w-full animate-pulse"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Skeleton */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              {/* Mobile Filter Toggle Skeleton */}
              <div className="lg:hidden h-12 bg-gray-200 rounded-xl mb-4 animate-pulse"></div>

              {/* Filter Content Skeleton */}
              <div className="space-y-6">
                {/* Show All Button Skeleton */}
                <div className="h-12 bg-gray-200 rounded-xl animate-pulse"></div>

                {/* Filter Header Skeleton */}
                <div className="flex items-center justify-between pt-4 border-t-2 border-line">
                  <div className="h-6 bg-gray-200 rounded w-24 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                </div>

                {/* Category Filters Skeleton */}
                <div>
                  <div className="h-5 bg-gray-200 rounded w-24 mb-4 animate-pulse"></div>
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Skeleton */}
          <div className="flex-1">
            {/* Search Bar Skeleton */}
            <div className="mb-8">
              <div className="h-14 bg-white rounded-xl border-2 border-line shadow-sm animate-pulse"></div>
            </div>

            {/* Results Count Skeleton */}
            <div className="mb-6">
              <div className="h-5 bg-gray-200 rounded w-48 animate-pulse"></div>
            </div>

            {/* Course Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-line/30">
                  {/* Image Skeleton */}
                  <div className="h-48 bg-gray-200 animate-pulse"></div>

                  {/* Content Skeleton */}
                  <div className="p-6">
                    {/* Category Badge Skeleton */}
                    <div className="h-6 bg-gray-200 rounded-full w-24 mb-3 animate-pulse"></div>

                    {/* Title Skeleton */}
                    <div className="h-6 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>

                    {/* Description Skeleton */}
                    <div className="space-y-2 mb-6">
                      <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
                    </div>

                    {/* Stats Skeleton */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                      </div>
                    </div>

                    {/* Price and Button Skeleton */}
                    <div className="flex items-center justify-between pt-6 border-t border-line">
                      <div>
                        <div className="h-3 bg-gray-200 rounded w-16 mb-2 animate-pulse"></div>
                        <div className="h-7 bg-gray-200 rounded w-24 animate-pulse"></div>
                      </div>
                      <div className="h-10 bg-gray-200 rounded-xl w-32 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPageSkeleton;