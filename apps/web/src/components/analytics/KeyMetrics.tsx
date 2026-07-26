import {
  Activity,
  AlertTriangle,
  CalendarClock,
  TrendingUp,
} from "lucide-react";

interface Props {
  highestRiskCustomer: {
    customer: string;
    churn_probability: number;
  };
  latestPrediction: string;
  averageProbability: number;
  churnRate: number;
}

export default function KeyMetrics({
  highestRiskCustomer,
  latestPrediction,
  averageProbability,
  churnRate,
}: Props) {
  const metrics = [
    {
      title: "Highest Risk",
      value: highestRiskCustomer.customer,
      subtitle: `${highestRiskCustomer.churn_probability.toFixed(2)}% Probability`,
      icon: AlertTriangle,
    },
    {
      title: "Latest Prediction",
      value: latestPrediction,
      subtitle: "Most Recent Activity",
      icon: CalendarClock,
    },
    {
      title: "Average Probability",
      value: `${averageProbability.toFixed(2)}%`,
      subtitle: "Average Churn Risk",
      icon: Activity,
    },
    {
      title: "Churn Rate",
      value: `${churnRate.toFixed(1)}%`,
      subtitle: "Predicted Churn",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;

        return (
          <div
            key={metric.title}
            className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="gradient-icon flex h-12 w-12 items-center justify-center rounded-xl">
                <Icon className="h-6 w-6 text-primary" />
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              {metric.title}
            </p>

            <h3 className="mt-2 text-xl font-bold">
              {metric.value}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {metric.subtitle}
            </p>
          </div>
        );
      })}
    </div>
  );
}