
import { DashboardCharts } from './components/dashboard-charts';
import { DashboardError } from './components/dashboard-error';
import { DashboardSkeleton } from './components/dashboard-skeleton';
import { DashboardStats } from './components/dashboard-stats';
import { useDashboard } from './hooks/useDashboard';

export function DashboardFeature() {
  const {
    dashboard,
    loading,
    error,
    refetch,
  } = useDashboard();

  if (loading) {
    return <DashboardSkeleton />;
  }

  if (error) {
    return (
      <DashboardError
        onRetry={() => refetch()}
      />
    );
  }

  if (!dashboard) {
    return null;
  }

  const totalCountries = dashboard.countries.length;

  const totalContinents = dashboard.continents.length;

  const totalLanguages = dashboard.languages.length;

  const favouriteCount = 0;

  const recentlyViewedCount = 0;

  return (
    <div className="space-y-8 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <button
          onClick={() => refetch()}
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Refresh
        </button>
      </div>

      <DashboardStats
        totalCountries={totalCountries}
        totalContinents={totalContinents}
        totalLanguages={totalLanguages}
        favouriteCount={favouriteCount}
        recentlyViewedCount={recentlyViewedCount}
      />

      <DashboardCharts dashboard={dashboard} />
    </div>
  );
}