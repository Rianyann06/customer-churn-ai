import { ChartColumnIncreasing, Sparkles } from "lucide-react";

export default function AnalyticsHero() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-primary/10 to-background p-8">
      <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative flex items-center">
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-primary/25 blur-xl" />

            <div className="gradient-icon relative flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg">
              <ChartColumnIncreasing className="h-8 w-8 text-primary" />
            </div>
          </div>

          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
              <Sparkles className="h-3.5 w-3.5 text-primary" />

              <span className="text-xs font-medium text-primary">
                Analytics Directory
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight">
              Customer Analytics
            </h1>

            <p className="mt-2 max-w-2xl text-muted-foreground leading-relaxed">
              Analyze customer behavior, identify churn trends, and discover
              actionable insights powered by machine learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}