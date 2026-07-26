import { useEffect, useState } from "react";

import FadeIn from "@/components/common/FadeIn";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import BusinessMetricsCards from "@/components/dashboard/BusinessMetricsCards";
import ChurnChart from "@/components/dashboard/ChurnChart";
import ModelInfo from "@/components/dashboard/ModelInfo";
import TopRiskCustomers from "@/components/dashboard/TopRiskCustomers";
import AboutCard from "@/components/settings/AboutCard";

import { getMetrics, type Metrics } from "@/services/metrics";
import {
  getDashboardData,
  type DashboardResponse,
} from "@/services/dashboard";

export default function Dashboard() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [dashboard, setDashboard] =
    useState<DashboardResponse | null>(null);
  const [loadingDashboard, setLoadingDashboard] =
    useState(true);

  useEffect(() => {
    getMetrics()
      .then(setMetrics)
      .catch(console.error);
  }, []);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const result = await getDashboardData();
        setDashboard(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingDashboard(false);
      }
    }

    loadDashboard();
  }, []);

  return (
    <div className="space-y-6">
      <FadeIn direction="up">
        <DashboardHeader />
      </FadeIn>

      <FadeIn
        direction="right"
        delay={0.1}
      >
        <BusinessMetricsCards
          data={dashboard}
          loading={loadingDashboard}
        />
      </FadeIn>

      <div className="grid gap-6 xl:grid-cols-3">
        <FadeIn
          direction="left"
          delay={0.2}
          className="xl:col-span-2"
        >
          <section className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300">
            <div className="mb-6">
              <h2 className="text-xl font-semibold tracking-tight">
                Analytics Overview
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Customer churn distribution and prediction trends.
              </p>
            </div>

            <ChurnChart
              data={dashboard}
              loading={loadingDashboard}
            />
          </section>
        </FadeIn>

        <FadeIn
          direction="right"
          delay={0.3}
        >
          <aside className="space-y-6">
            <ModelInfo metrics={metrics} />
          </aside>
        </FadeIn>
      </div>
      <FadeIn
        direction="up"
        delay={0.4}
      >
        {dashboard && (
          <TopRiskCustomers data={dashboard} />
        )}
      </FadeIn>

      <FadeIn
        direction="up"
        delay={0.5}
      >
        <AboutCard />
      </FadeIn>
    </div>
  );
}