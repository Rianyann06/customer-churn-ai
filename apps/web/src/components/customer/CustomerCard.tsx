import { Eye, ShieldAlert, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface CustomerCardProps {
  id: number;
  customer: string;
  prediction: string;
  probability: number;
  risk: "High" | "Medium" | "Low";
  date: string;
}

export default function CustomerCard({
  customer,
  prediction,
  probability,
  risk,
  date,
}: CustomerCardProps) {
  const initials = customer
    .split(" ")
    .map((name) => name[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  const avatarColor = (() => {
    const colors = [
      "bg-blue-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-cyan-500",
      "bg-emerald-500",
      "bg-orange-500",
    ];

    let hash = 0;

    for (let i = 0; i < customer.length; i++) {
      hash += customer.charCodeAt(i);
    }

    return colors[hash % colors.length];
  })();

  const riskStyle = {
    High: {
      badge: "bg-red-100 text-red-700 border-red-200",
      bar: "bg-red-500",
      icon: <ShieldAlert className="h-4 w-4" />,
    },
    Medium: {
      badge: "bg-yellow-100 text-yellow-700 border-yellow-200",
      bar: "bg-yellow-500",
      icon: <ShieldAlert className="h-4 w-4" />,
    },
    Low: {
      badge: "bg-green-100 text-green-700 border-green-200",
      bar: "bg-green-500",
      icon: <ShieldCheck className="h-4 w-4" />,
    },
  }[risk];

  return (
    <div className="card-hover rounded-2xl border border-border/60 bg-card p-6">

      <div className="flex items-start justify-between">

        <div className="flex items-center gap-4">

          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-bold text-white ${avatarColor}`}
          >
            {initials}
          </div>

          <div>

            <h3 className="text-lg font-semibold">
              {customer}
            </h3>

            <p className="text-sm text-muted-foreground">
              Last prediction • {date}
            </p>

          </div>

        </div>

        <Button variant="outline" size="icon">
          <Eye className="h-4 w-4" />
        </Button>

      </div>

      <div className="mt-6 flex flex-wrap gap-3">

        <Badge
          variant="secondary"
          className={
            prediction === "Churn"
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }
        >
          {prediction}
        </Badge>

        <Badge
          variant="outline"
          className={`flex items-center gap-1 ${riskStyle.badge}`}
        >
          {riskStyle.icon}
          {risk} Risk
        </Badge>

      </div>

      <div className="mt-6">

        <div className="mb-2 flex items-center justify-between">

          <span className="text-sm text-muted-foreground">
            Churn Probability
          </span>

          <span className="font-semibold">
            {probability.toFixed(1)}%
          </span>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-muted">

          <div
            className={`h-full rounded-full transition-all ${riskStyle.bar}`}
            style={{
              width: `${probability}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}