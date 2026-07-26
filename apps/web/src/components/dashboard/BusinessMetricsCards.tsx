import {
  Users,
  UserX,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

import type { DashboardResponse } from "@/services/dashboard";
import StatCard from "./StatCard";

interface BusinessMetricsCardsProps {
  data: DashboardResponse | null;
  loading: boolean;
}

export default function BusinessMetricsCards({
  data,
  loading,
}: BusinessMetricsCardsProps) {
  if (loading) {
    return (
      <section className="space-y-4">
        <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="text-sm font-medium text-primary">
              Overview
            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight">
              Business Overview
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Key business indicators generated from customer churn analysis.
            </p>
          </div>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-36 animate-pulse rounded-2xl border border-border/60 bg-muted/40"
            />
          ))}
        </div>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="rounded-2xl border border-border/60 bg-card p-8 text-center shadow-sm">
        <h3 className="text-lg font-semibold">
          Business Overview
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Unable to load business statistics.
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-4">

      <div>
        <h2 className="text-xl font-semibold">
          Business Overview
        </h2>

        <p className="text-sm text-muted-foreground">
          Key business indicators generated from customer churn analysis.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Predictions"
          value={data.summary.total_predictions.toString()}
          icon={Users}
        />

        <StatCard
          title="Churn Customers"
          value={data.summary.churn_customers.toString()}
          icon={UserX}
        />

        <StatCard
          title="Retention Rate"
          value={`${data.summary.retention_rate.toFixed(1)}%`}
          icon={ShieldCheck}
        />

        <StatCard
          title="Average Risk"
          value={`${data.summary.average_risk.toFixed(1)}%`}
          icon={AlertTriangle}
        />
      </div>

    </section>
  );
}