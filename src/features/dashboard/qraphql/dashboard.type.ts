import type { Continent, Country, Language } from "@/types";

export interface GetDashboardQueryResult {
    countries: Country[];
    continents: Continent[];
    languages: Language[];
}

