import { api } from "./api";

export interface DashboardResponse {
  summary: {
    total_predictions: number;
    churn_customers: number;
    retention_rate: number;
    average_risk: number;
  };

  distribution: {
    churn: number;
    no_churn: number;
  };

  trend: {
    date: string;
    total: number;
  }[];

  top_risk: {
    customer: string;
    risk: number;
  }[];
}

export async function getDashboardData(): Promise<DashboardResponse> {
  const response = await api.get("/dashboard");
  return response.data;
}