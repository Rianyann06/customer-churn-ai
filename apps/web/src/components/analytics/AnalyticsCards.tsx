import {
  Users,
  ShieldAlert,
  TrendingUp,
  BrainCircuit,
} from "lucide-react";

interface AnalyticsCardsProps {
  totalCustomers: number;
  highRisk: number;
  retentionRate: number;
  averageProbability: number;
}

export default function AnalyticsCards({
  totalCustomers,
  highRisk,
  retentionRate,
  averageProbability,
}: AnalyticsCardsProps) {
  const cards = [
    {
      title: "Customers",
      value: totalCustomers.toLocaleString(),
      subtitle: "Prediction Records",
      icon: Users,
    },
    {
      title: "High Risk",
      value: highRisk.toLocaleString(),
      subtitle: "High Risk Customers",
      icon: ShieldAlert,
    },
    {
      title: "Retention Rate",
      value: `${retentionRate.toFixed(1)}%`,
      subtitle: "Customer Retention",
      icon: TrendingUp,
    },
    {
      title: "Average Risk",
      value: `${averageProbability.toFixed(1)}%`,
      subtitle: "Average Churn Probability",
      icon: BrainCircuit,
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="card-hover rounded-2xl border border-border/60 bg-card p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="gradient-icon flex h-12 w-12 items-center justify-center rounded-xl">
                <Icon className="h-6 w-6 text-primary" />
              </div>
            </div>

            <p className="text-sm font-medium text-muted-foreground">
              {card.title}
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              {card.value}
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              {card.subtitle}
            </p>
          </div>
        );
      })}
    </div>
  );
}