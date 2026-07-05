import { useQuery } from '@apollo/client/react';
import { GET_DASHBOARD } from '../qraphql/dashboard.queries';
import type { GetDashboardQueryResult } from '../qraphql/dashboard.type';


export function useDashboard() {
    console.log("Query useDashboard");

  const { data, loading, error, refetch } = useQuery<GetDashboardQueryResult>(GET_DASHBOARD);

  return {
    dashboard: data,
    loading,
    error,
    refetch
  };
}
