export function DashboardSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="h-28 rounded-lg bg-gray-200"
          />
        ))}
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="h-96 rounded-lg bg-gray-200" />
        <div className="h-96 rounded-lg bg-gray-200" />
      </div>
    </div>
  );
}