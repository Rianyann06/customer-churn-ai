export function getRecommendations(probability: number): string[] {
  if (probability >= 80) {
    return [
      "Contact the customer within 7 days.",
      "Offer a loyalty discount.",
      "Assign a retention specialist.",
    ];
  }

  if (probability >= 50) {
    return [
      "Send a promotional campaign.",
      "Monitor customer engagement.",
      "Schedule a follow-up call.",
    ];
  }

  return [
    "Maintain current service quality.",
    "Continue customer engagement.",
    "Recommend premium services when appropriate.",
  ];
}