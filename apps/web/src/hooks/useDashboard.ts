import { useCallback, useEffect, useState } from "react";
import {
  getDashboardData,
  type DashboardResponse,
} from "@/services/dashboard";

export function useDashboard(refreshInterval = 10000) {
  const [data, setData] = useState<DashboardResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadDashboard = useCallback(async () => {
    try {
      const result = await getDashboardData();
      setData(result);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to load dashboard.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDashboard();

    const interval = setInterval(loadDashboard, refreshInterval);

    return () => clearInterval(interval);
  }, [loadDashboard, refreshInterval]);

  return {
    data,
    loading,
    error,
    reload: loadDashboard,
  };
}