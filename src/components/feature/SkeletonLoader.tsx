export function ImageSkeleton({ aspectRatio = "4/5", className = "" }: { aspectRatio?: string; className?: string }) {
  return (
    <div
      className={`bg-gradient-to-r from-secondary-100 via-secondary-50 to-secondary-100 bg-[length:200%_100%] animate-shimmer rounded-lg ${className}`}
      style={{ aspectRatio }}
      aria-hidden="true"
    />
  );
}

export function CardSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <ImageSkeleton aspectRatio="4/5" className="mb-4" />
      <div className="h-3 bg-secondary-100 rounded w-1/3 mb-2" />
      <div className="h-5 bg-secondary-100 rounded w-3/4 mb-1" />
      <div className="h-3 bg-secondary-100 rounded w-1/2 mb-2" />
      <div className="h-4 bg-secondary-100 rounded w-full" />
    </div>
  );
}

export function TextSkeleton({ lines = 3, className = "" }: { lines?: number; className?: string }) {
  return (
    <div className={`animate-pulse space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-secondary-100 rounded"
          style={{ width: i === lines - 1 ? "60%" : "100%" }}
        />
      ))}
    </div>
  );
}