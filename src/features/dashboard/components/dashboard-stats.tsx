import { StatCard } from "./stat-card";

type DashboardStatsProps = {
  totalCountries: number;
  totalContinents: number;
  totalLanguages: number;
  favouriteCount: number;
  recentlyViewedCount: number;
};

export function DashboardStats({
  totalCountries,
  totalContinents,
  totalLanguages,
  favouriteCount,
  recentlyViewedCount,
}: DashboardStatsProps) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
      <StatCard
        title="Total Countries"
        value={totalCountries}
      />

      <StatCard
        title="Total Continents"
        value={totalContinents}
      />

      <StatCard
        title="Total Languages"
        value={totalLanguages}
      />

      <StatCard
        title="Favourite Countries"
        value={favouriteCount}
      />

      <StatCard
        title="Recently Viewed"
        value={recentlyViewedCount}
      />
    </section>
  );
}