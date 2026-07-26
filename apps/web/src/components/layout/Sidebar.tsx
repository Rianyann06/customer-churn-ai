import {
  LayoutDashboard,
  BrainCircuit,
  Users,
  ChartColumnIncreasing,
  Settings,
  LogOut,
  TrendingUp,
} from "lucide-react";
import NavItem from "./NavItem";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col border-r bg-background">

      <div className="border-b p-6">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/20 to-primary/5 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight">
              Customer Churn
            </h1>

            <p className="text-xs text-muted-foreground">
              AI Analytics Platform
            </p>
          </div>

        </div>

      </div>

      <nav className="flex-1 space-y-2 p-4">

        <NavItem
          to="/"
          icon={LayoutDashboard}
          label="Dashboard"
        />

        <NavItem
          to="/prediction"
          icon={BrainCircuit}
          label="Prediction"
        />

        <NavItem
          to="/customers"
          icon={Users}
          label="Customers"
        />

        <NavItem
          to="/analytics"
          icon={ChartColumnIncreasing}
          label="Analytics"
        />

        <NavItem
          to="/settings"
          icon={Settings}
          label="Settings"
        />

      </nav>

      <div className="border-t p-4">

        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-muted-foreground transition-all duration-300 hover:bg-muted hover:text-foreground">

          <LogOut className="h-5 w-5" />

          Logout

        </button>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Version 1.0.0
        </p>

      </div>

    </aside>
  );
}