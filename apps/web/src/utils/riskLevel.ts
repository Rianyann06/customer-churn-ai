export interface RiskLevel {
  label: string;
  color: string;
  text: string;
}

export function getRiskLevel(probability: number): RiskLevel {
  if (probability >= 80) {
    return {
      label: "High Risk",
      color: "bg-red-500",
      text: "text-red-600",
    };
  }

  if (probability >= 50) {
    return {
      label: "Medium Risk",
      color: "bg-yellow-500",
      text: "text-yellow-600",
    };
  }

  return {
    label: "Low Risk",
    color: "bg-green-500",
    text: "text-green-600",
  };
}