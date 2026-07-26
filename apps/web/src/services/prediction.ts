import { api } from "./api";

export interface PredictionRequest {
  gender: string;
  SeniorCitizen: number;
  tenure: number;
  MonthlyCharges: number;
  TotalCharges: number;
}

export interface PredictionResponse {
  prediction: number;
  prediction_label: string;
  probability: {
    churn: number;
    no_churn: number;
  };
}

export async function predictCustomer(
  data: PredictionRequest
): Promise<PredictionResponse> {
  const response = await api.post("/predict", data);
  return response.data;
}