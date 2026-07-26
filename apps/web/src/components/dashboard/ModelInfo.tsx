import type { Metrics } from "@/services/metrics";
import {
  BrainCircuit,
  Database,
  FileBarChart,
  Layers3,
  Sigma,
  BadgeCheck,
} from "lucide-react";

interface Props {
  metrics: Metrics | null;
}

const items = [
  {
    label: "Algorithm",
    value: "Logistic Regression",
    icon: Sigma,
  },
  {
    label: "Dataset",
    value: "IBM Telco Customer Churn",
    icon: Database,
  },
  {
    label: "Features",
    value: "19 Features",
    icon: Layers3,
  },
  {
    label: "Samples",
    value: "7,043 Records",
    icon: FileBarChart,
  },
];

export default function ModelInfo({ metrics }: Props) {
  return (
    <div className="rounded-xl border bg-background shadow-sm">
      <div className="relative overflow-hidden border-b p-6">

        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-transparent" />

        <div className="relative flex items-start justify-between">

          <div className="flex items-center gap-4">

            <div className="gradient-icon flex h-14 w-14 items-center justify-center rounded-2xl">
              <BrainCircuit className="h-7 w-7 text-primary" />
            </div>

            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                AI Model
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Machine Learning Information
              </p>
            </div>

          </div>

          <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Ready
          </span>

        </div>

      </div>

      <div className="space-y-5 p-6">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="group flex items-center justify-between rounded-2xl border border-border/60 bg-background p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-primary/5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/15">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-semibold tracking-tight">
                  {item.label}
                </span>
              </div>

              <span className="text-right text-sm font-medium text-muted-foreground">
                {item.value}
              </span>
            </div>
          );
        })}

        {metrics && (
          <div className="rounded-xl bg-primary/10 p-5">
            <div className="flex items-center gap-3">
              <BadgeCheck className="h-6 w-6 text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Model Accuracy
                </p>

                <p className="text-3xl font-bold">
                  {(metrics.accuracy * 100).toFixed(2)}%
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}