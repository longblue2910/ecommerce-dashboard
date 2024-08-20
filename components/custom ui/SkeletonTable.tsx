// components/SkeletonTable.tsx

import { Skeleton } from "../ui/skeleton";

const SkeletonTable = () => {
  return (
    <div className="py-5">
      {/* Header Skeleton */}
      <div className="flex  mb-3">
        <Skeleton className="w-1/4 h-12 bg-slate-200" />
        <Skeleton className="w-1/4 h-12 bg-slate-200" />
        <Skeleton className="w-1/4 h-12 bg-slate-200" />
      </div>

      {/* Rows Skeleton */}
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex mb-2">
          <Skeleton className="w-1/4 h-12 bg-slate-200" />
          <Skeleton className="w-1/4 h-12 bg-slate-200" />
          <Skeleton className="w-1/4 h-12 bg-slate-200" />
        </div>
      ))}
    </div>
  );
};

export default SkeletonTable;
