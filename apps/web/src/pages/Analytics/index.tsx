import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import AnalyticsHero from "@/components/analytics/AnalyticsHero";
import AnalyticsCards from "@/components/analytics/AnalyticsCards";
import RiskDistributionChart from "@/components/analytics/RiskDistributionChart";
import { getAnalytics } from "@/services/analytics";
import PredictionDistributionChart from "@/components/analytics/PredictionDistributionChart";
import PredictionTimelineChart from "@/components/analytics/PredictionTimelineChart";
import KeyMetrics from "@/components/analytics/KeyMetrics";

export default function Analytics() {
    const [analytics, setAnalytics] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadAnalytics() {
            try {
                setLoading(true);

                const data = await getAnalytics();

                setAnalytics(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        loadAnalytics();
    }, []);

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    if (!loading && !analytics) {
        return (
            <div className="p-6 text-center text-muted-foreground">
                Analytics data not available.
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.4 }}
            >
                <AnalyticsHero />
            </motion.div>

            {loading ? (
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {[1, 2, 3, 4].map((item) => (
                        <div
                            key={item}
                            className="h-40 animate-pulse rounded-2xl border bg-muted"
                        />
                    ))}
                </div>
            ) : (
                <>
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.1, duration: 0.4 }}
                    >
                        <AnalyticsCards
                            totalCustomers={analytics.totalCustomers}
                            highRisk={analytics.riskDistribution[0].value}
                            retentionRate={analytics.retentionRate}
                            averageProbability={analytics.averageProbability}
                        />
                    </motion.div>

                    <motion.div
                        className="grid gap-6 lg:grid-cols-2"
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >
                        <RiskDistributionChart
                            data={analytics.riskDistribution}
                        />

                        <PredictionDistributionChart
                            data={analytics.predictionDistribution}
                        />
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.3, duration: 0.4 }}
                    >
                        <PredictionTimelineChart
                            data={analytics.predictionTimeline}
                        />
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4, duration: 0.4 }}
                    >
                        <KeyMetrics
                            highestRiskCustomer={analytics.highestRiskCustomer}
                            latestPrediction={analytics.latestPrediction}
                            averageProbability={analytics.averageProbability}
                            churnRate={analytics.churnRate}
                        />
                    </motion.div>
                </>
            )}
        </div>
    );
}