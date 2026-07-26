import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

interface RiskDistributionChartProps {
    data: {
        name: string;
        value: number;
    }[];
}

export default function RiskDistributionChart({
    data,
}: RiskDistributionChartProps) {
    return (
        <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-xl font-semibold">
                    Risk Distribution
                </h2>

                <p className="text-sm text-muted-foreground">
                    Customer distribution by predicted churn risk.
                </p>
            </div>

            <ResponsiveContainer width="100%" height={320}>
                <BarChart
                    data={data}
                    layout="vertical"
                    margin={{
                        left: 20,
                        right: 20,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis type="number" />

                    <YAxis
                        type="category"
                        dataKey="name"
                        width={80}
                    />

                    <Tooltip />

                    <Bar
                        dataKey="value"
                        fill="#3b82f6"
                        radius={[0, 8, 8, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}