import { Sparkles, Activity, FileText } from "lucide-react";

export default function DashboardHeader() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning ☀️"
      : hour < 18
        ? "Good Afternoon 🌤️"
        : "Good Evening 🌙";

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-8 shadow-sm">

      {/* Background Decoration */}
      <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-16 left-1/3 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10"> 

        <p className="mt-5 text-sm font-semibold text-primary">
          {greeting}
        </p>

        <h1 className="mt-2 max-w-4xl text-4xl font-bold tracking-tight lg:text-5xl">
          Customer Churn
          <span className="text-primary"> Analytics </span>
          Dashboard
        </h1>

        <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">
          Monitor customer churn predictions, business performance,
          and AI-powered insights in one place. Track trends,
          evaluate model performance, and make smarter business
          decisions with confidence.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">

          <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-background/70 px-4 py-2 backdrop-blur">
            <Activity className="h-4 w-4 text-primary" />
            <span className="text-sm">Real-time Analytics</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-background/70 px-4 py-2 backdrop-blur">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm">AI Prediction</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-background/70 px-4 py-2 backdrop-blur">
            <FileText className="h-4 w-4 text-primary" />
            <span className="text-sm">PDF Reports</span>
          </div>

        </div>

      </div>

    </div>
  );
}