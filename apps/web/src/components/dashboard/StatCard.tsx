import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
}: StatCardProps) {
  return (
    <Card className="group overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
      <CardContent className="relative p-6">
        <div className="mb-6 h-1 w-14 rounded-full bg-gradient-to-r from-primary to-primary/20" />
        <div className="flex items-start justify-between">

          <div>
            <p className="text-sm font-medium text-muted-foreground">
              {title}
            </p>

            <h2 className="mt-3 text-4xl font-extrabold tracking-tight transition-all duration-300 group-hover:scale-[1.03] group-hover:text-primary">
              {value}
            </h2>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/15 to-primary/5 text-primary transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-primary/10">
            <Icon className="h-6 w-6 transition-transform duration-300 ease-out group-hover:rotate-3" />
          </div>

        </div>

        <div className="mt-6 flex items-center justify-between">

          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium text-primary transition-all duration-300 group-hover:bg-primary/10">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Live Data
          </span>

          <span className="text-xs text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70">
            Updated now
          </span>

        </div>

      </CardContent>
    </Card>
  );
}