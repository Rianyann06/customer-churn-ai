import { Bell, Search } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface Props {
  title: string;
}

export default function TopNavbar({ title }: Props) {
  return (
    <header className="border-b bg-background">
      <div className="flex items-center justify-between px-8 py-5">
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>

          <p className="text-muted-foreground mt-1">
            Welcome back! Here's your customer churn analytics.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border hover:bg-muted transition"
            aria-label="Search"
          >
            <Search size={18} />
          </button>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border hover:bg-muted transition"
            aria-label="Notifications"
          >
            <Bell size={18} />
          </button>

          <ThemeToggle />

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
            M
          </div>
        </div>
      </div>
    </header>
  );
}