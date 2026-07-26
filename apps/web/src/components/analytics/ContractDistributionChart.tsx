import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

interface ContractDistributionChartProps {
  data: {
    name: string;
    value: number;
  }[];
}

const COLORS = ["#3b82f6", "#8b5cf6", "#10b981"];

export default function ContractDistributionChart({
  data,
}: ContractDistributionChartProps) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Contract Distribution
        </h2>

        <p className="text-sm text-muted-foreground">
          Customer distribution by contract type.
        </p>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={data}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis type="number" />

          <YAxis
            type="category"
            dataKey="name"
            width={120}
          />

          <Tooltip />

          <Bar
            dataKey="value"
            radius={[0, 8, 8, 0]}
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}