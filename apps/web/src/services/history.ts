import { api } from "./api";

export interface PredictionHistory {
  id: number;
  customer: string;
  contract: string;
  internet_service: string;
  tenure: number;
  monthly_charges: number;
  prediction: string;
  churn_probability: number;
  date: string;
}

export async function getPredictionHistory(): Promise<PredictionHistory[]> {
  const response = await api.get("/history");
  return response.data;
}