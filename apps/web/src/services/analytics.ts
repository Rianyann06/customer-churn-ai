import { getPredictionHistory } from "./history";

export async function getAnalytics() {
    const history = await getPredictionHistory();

    const totalCustomers = history.length;

    const highRisk = history.filter(
        (item) => item.churn_probability >= 70
    ).length;

    const mediumRisk = history.filter(
        (item) =>
            item.churn_probability >= 40 &&
            item.churn_probability < 70
    ).length;

    const lowRisk = history.filter(
        (item) => item.churn_probability < 40
    ).length;

    const churnCustomers = history.filter(
        (item) => item.prediction === "Churn"
    ).length;

    const retainedCustomers = totalCustomers - churnCustomers;

    const retentionRate =
        totalCustomers === 0
            ? 0
            : (retainedCustomers / totalCustomers) * 100;

    const averageProbability =
        totalCustomers === 0
            ? 0
            : history.reduce(
                (sum, item) => sum + item.churn_probability,
                0
            ) / totalCustomers;
    const contractMap: Record<string, number> = {};

    history.forEach((item) => {
        const contract = item.contract ?? "Unknown";

        contractMap[contract] = (contractMap[contract] || 0) + 1;
    });

    const predictionMap: Record<string, number> = {};

    history.forEach((item) => {
        predictionMap[item.prediction] =
            (predictionMap[item.prediction] || 0) + 1;
    });

    const predictionDistribution = Object.entries(predictionMap).map(
        ([name, value]) => ({
            name,
            value,
        })
    );

    const timelineMap: Record<string, number> = {};

    history.forEach((item) => {
        // Ambil tanggal saja: "2026-07-25"
        const day = item.date.split(" ")[0];

        timelineMap[day] = (timelineMap[day] || 0) + 1;
    });

    const predictionTimeline = Object.entries(timelineMap)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([date, total]) => ({
            date,
            total,
        }));

    const highestRiskCustomer = history.reduce((highest, current) => {
        return current.churn_probability > highest.churn_probability
            ? current
            : highest;
    }, history[0]);

    const churnCount = history.filter(
        (item) => item.prediction === "Churn"
    ).length;

    const noChurnCount = history.filter(
        (item) => item.prediction === "No Churn"
    ).length;
    const latestPrediction = history[0]?.date ?? "-";

    const churnRate =
        totalCustomers === 0
            ? 0
            : (churnCustomers / totalCustomers) * 100;
    return {
        totalCustomers,
        churnCustomers,
        retainedCustomers,
        retentionRate,
        averageProbability,
        predictionTimeline,
        highestRiskCustomer,
        churnCount,
        noChurnCount,
        latestPrediction,
        churnRate,

        riskDistribution: [
            {
                name: "High",
                value: highRisk,
            },
            {
                name: "Medium",
                value: mediumRisk,
            },
            {
                name: "Low",
                value: lowRisk,
            },
        ],

        predictionDistribution,
    };
}