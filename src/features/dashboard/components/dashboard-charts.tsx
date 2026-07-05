import { useMemo } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type DashboardChartsProps = {
  dashboard: {
    countries: {
      continent: {
        name: string;
      };
      languages: {
        name: string;
      }[];
    }[];
  } ;
};

const COLORS = [
  '#2563EB',
  '#10B981',
  '#F59E0B',
  '#EF4444',
  '#8B5CF6',
  '#EC4899',
  '#06B6D4',
];

export function DashboardCharts({
  dashboard,
}: DashboardChartsProps) {
  const countriesByContinent = useMemo(() => {
    const map = new Map<string, number>();

    dashboard.countries.forEach((country) => {
      const continent = country.continent.name;

      map.set(continent, (map.get(continent) ?? 0) + 1);
    });

    return [...map.entries()].map(([name, value]) => ({
      name,
      value,
    }));
  }, [dashboard]);

  const topLanguages = useMemo(() => {
    const map = new Map<string, number>();

    dashboard.countries.forEach((country) => {
      country.languages.forEach((language) => {
        map.set(language.name, (map.get(language.name) ?? 0) + 1);
      });
    });

    return [...map.entries()]
      .map(([language, countries]) => ({
        language,
        countries,
      }))
      .sort((a, b) => b.countries - a.countries)
      .slice(0, 10);
  }, [dashboard]);

  return (
    <section className="mt-8 grid gap-8 xl:grid-cols-2">
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-lg font-semibold">
          Countries by Continent
        </h2>

        <ResponsiveContainer
          width="100%"
          height={320}
        >
          <PieChart>
            <Pie
              data={countriesByContinent}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              label
            >
              {countriesByContinent.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-lg font-semibold">
          Top Languages
        </h2>

        <ResponsiveContainer
          width="100%"
          height={320}
        >
          <BarChart data={topLanguages}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="language" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="countries" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}