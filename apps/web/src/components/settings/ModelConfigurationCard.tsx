import {
  BrainCircuit,
  BadgeCheck,
  Gauge,
  ShieldCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function ModelConfigurationCard() {
  const accuracy = 81.7;
  const threshold = 50;

  return (
    <Card className="border-border/60 shadow-sm">
      <CardContent className="space-y-8 p-6">
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <div className="gradient-icon flex h-14 w-14 items-center justify-center rounded-2xl">
              <BrainCircuit className="h-7 w-7 text-primary" />
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Logistic Regression
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Production Machine Learning Model
              </p>
            </div>
          </div>

          <Badge>v1.0.0</Badge>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border p-4">
            <div className="mb-2 flex items-center gap-2">
              <Gauge className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">
                Model Accuracy
              </span>
            </div>

            <Progress value={accuracy} />

            <p className="mt-3 text-2xl font-bold">
              {accuracy}%
            </p>
          </div>

          <div className="rounded-xl border p-4">
            <div className="mb-2 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">
                Prediction Threshold
              </span>
            </div>

            <Progress value={threshold} />

            <p className="mt-3 text-2xl font-bold">
              {threshold}%
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border p-4">
            <p className="text-sm text-muted-foreground">
              Algorithm
            </p>

            <p className="mt-2 font-semibold">
              Logistic Regression
            </p>
          </div>

          <div className="rounded-xl border p-4">
            <p className="text-sm text-muted-foreground">
              Prediction Output
            </p>

            <p className="mt-2 font-semibold">
              Churn Probability
            </p>
          </div>

          <div className="rounded-xl border p-4">
            <p className="text-sm text-muted-foreground">
              Status
            </p>

            <div className="mt-2 flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-green-500" />

              <Badge
                variant="secondary"
                className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
              >
                Ready
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}