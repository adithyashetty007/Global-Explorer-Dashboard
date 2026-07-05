type DashboardErrorProps = {
  onRetry: () => void;
};

export function DashboardError({
  onRetry,
}: DashboardErrorProps) {
  return (
    <div className="flex h-80 flex-col items-center justify-center gap-4 rounded-lg border">
      <h2 className="text-xl font-semibold">
        Failed to load dashboard
      </h2>

      <p className="text-gray-500">
        Please try again.
      </p>

      <button
        onClick={onRetry}
        className="rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
      >
        Retry
      </button>
    </div>
  );
}