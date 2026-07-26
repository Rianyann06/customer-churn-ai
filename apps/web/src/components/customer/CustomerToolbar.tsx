import { Search, RotateCw, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CustomerToolbarProps {
  keyword: string;
  setKeyword: (value: string) => void;

  predictionFilter: string;
  setPredictionFilter: (value: string) => void;

  riskFilter: string;
  setRiskFilter: (value: string) => void;

  onRefresh: () => void;
  onExport: () => void;
}

export default function CustomerToolbar({
  keyword,
  setKeyword,
  predictionFilter,
  setPredictionFilter,
  riskFilter,
  setRiskFilter,
  onRefresh,
  onExport,
}: CustomerToolbarProps) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-6">

      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

        <div className="relative flex-1">

          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search customer..."
            className="pl-10"
          />

        </div>

        <div className="flex flex-wrap items-center gap-3">

          <select
            value={predictionFilter}
            onChange={(e) => setPredictionFilter(e.target.value)}
            className="h-10 rounded-lg border bg-background px-3 text-sm"
          >
            <option value="All">All Predictions</option>
            <option value="Churn">Churn</option>
            <option value="No Churn">No Churn</option>
          </select>

          <select
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value)}
            className="h-10 rounded-lg border bg-background px-3 text-sm"
          >
            <option value="All">All Risks</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <Button
            variant="outline"
            onClick={onRefresh}
          >
            <RotateCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>

          <Button onClick={onExport}>
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>

        </div>

      </div>

    </div>
  );
}