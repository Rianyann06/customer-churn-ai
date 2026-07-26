export function generateInsight(
  formData: any,
  churn: number
): string[] {
  const insights: string[] = [];

  if (formData.Contract === "Month-to-month") {
    insights.push(
      "The customer uses a month-to-month contract, which is generally associated with higher churn."
    );
  }

  if (formData.tenure < 12) {
    insights.push(
      "The customer's tenure is relatively short, indicating a weaker long-term relationship."
    );
  }

  if (formData.MonthlyCharges > 80) {
    insights.push(
      "Monthly charges are relatively high compared to many customers."
    );
  }

  if (formData.TechSupport === "No") {
    insights.push(
      "The customer does not subscribe to technical support services."
    );
  }

  if (formData.OnlineSecurity === "No") {
    insights.push(
      "The customer has no online security service."
    );
  }

  if (formData.PaperlessBilling === "Yes") {
    insights.push(
      "Paperless billing is enabled, which has shown correlation with churn in some customer segments."
    );
  }

  if (insights.length === 0) {
    insights.push(
      "Customer characteristics indicate a relatively stable subscription profile."
    );
  }

  return insights;
}