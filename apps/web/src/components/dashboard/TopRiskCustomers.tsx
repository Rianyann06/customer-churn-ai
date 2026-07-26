import {
  AlertTriangle,
  ChevronRight,
} from "lucide-react";

import type { DashboardResponse } from "@/services/dashboard";

interface Props {
  data: DashboardResponse;
}

export default function TopRiskCustomers({
  data,
}: Props) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight">
            Top High Risk Customers
          </h2>

          <p className="text-sm text-muted-foreground">
            Customers with the highest churn probability
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-200 bg-red-50 text-red-500">
          <AlertTriangle className="h-5 w-5" />
        </div>
      </div>

      <div className="space-y-4">
        {data.top_risk.map((customer) => (
          <div
            key={customer.customer}
            className="group flex items-center justify-between rounded-2xl border border-border/60 bg-background p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-primary/5"
          >
            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                {customer.customer
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)}
              </div>

              <div>
                <p className="font-semibold tracking-tight">
                  {customer.customer}
                </p>

                <p className="text-sm text-muted-foreground">
                  High Risk
                </p>
              </div>

            </div>

            <div className="flex items-center gap-3">
              <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-semibold text-red-600">
                {customer.risk.toFixed(2)}%
              </span>

              <ChevronRight
                size={18}
                className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}