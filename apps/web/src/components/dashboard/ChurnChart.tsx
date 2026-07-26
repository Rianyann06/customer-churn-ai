import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

import type { DashboardResponse } from "@/services/dashboard";

const COLORS = [
  "#F43F5E",
  "#2563EB",
];

interface ChurnChartProps {
  data: DashboardResponse | null;
  loading: boolean;
}

export default function ChurnChart({
  data,
  loading,
}: ChurnChartProps) {
  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-96 animate-pulse rounded-xl border bg-muted" />

        <div className="h-64 animate-pulse rounded-xl border bg-muted" />

        <div className="h-96 animate-pulse rounded-xl border bg-muted" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="rounded-xl border bg-background p-12 text-center">
        <h3 className="text-lg font-semibold">
          Analytics Unavailable
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Unable to load dashboard analytics.
        </p>
      </div>
    );
  }

  const pieData = [
    {
      name: "Churn",
      value: data.distribution.churn,
    },
    {
      name: "No Churn",
      value: data.distribution.no_churn,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Pie Chart */}
      <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
        <div className="mb-6 flex items-center justify-between">

          <div>
            <h2 className="text-xl font-bold tracking-tight">
              Churn Distribution
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Customer churn vs retained customers.
            </p>
          </div>

          <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            Live
          </span>

        </div>
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              innerRadius={72}
              outerRadius={105}
              paddingAngle={3}
              stroke="none"
            >
              <Label
                value={`${data.summary.retention_rate.toFixed(0)}%`}
                position="center"
                className="fill-foreground text-2xl font-extrabold"
              />
              {pieData.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                borderRadius: 16,
                border: "1px solid rgba(0,0,0,.06)",
                boxShadow: "0 10px 30px rgba(0,0,0,.08)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-8 flex justify-center gap-8 text-sm font-medium">
          <div className="flex items-center gap-2">
            <div className="h-3.5 w-3.5 rounded-full bg-red-500 ring-4 ring-red-500/15" />
            <span>Churn</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-primary/15" />
            <span>No Churn</span>
          </div>
        </div>
      </div>

      {/* Top Risk */}
    </div>
  );
}