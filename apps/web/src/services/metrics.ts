import { api } from "./api";

export interface Metrics {
  model: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1_score: number;
}

export async function getMetrics(): Promise<Metrics> {
  const response = await api.get("/metrics");
  return response.data;
}