type StatCardProps = {
  title: string;
  value: number;
};

export function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
        {value}
      </h2>
    </div>
  );
}