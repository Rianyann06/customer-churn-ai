import { useEffect, useMemo, useState } from "react";
import CustomerToolbar from "@/components/customer/CustomerToolbar";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Users,
  Sparkles,
} from "lucide-react";
import {
  getPredictionHistory,
  type PredictionHistory,
} from "@/services/history";

export default function Customer() {
  const [history, setHistory] = useState<PredictionHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [predictionFilter, setPredictionFilter] = useState("All");
  const getRisk = (probability: number) => {
    if (probability >= 70) return "High";
    if (probability >= 40) return "Medium";
    return "Low";
  };
  const [riskFilter, setRiskFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  async function loadHistory() {
    try {
      setLoading(true);
      const data = await getPredictionHistory();
      setHistory(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadHistory();
  }, []);

  const filteredHistory = useMemo(() => {
    return history.filter((item) => {
      const matchKeyword = item.customer
        .toLowerCase()
        .includes(keyword.toLowerCase());

      const matchPrediction =
        predictionFilter === "All" ||
        item.prediction === predictionFilter;

      const risk = getRisk(item.churn_probability);

      const matchRisk =
        riskFilter === "All" ||
        risk === riskFilter;

      return (
        matchKeyword &&
        matchPrediction &&
        matchRisk
      );
    });
  }, [
    history,
    keyword,
    predictionFilter,
    riskFilter,
  ]);


  const totalPages = Math.ceil(
    filteredHistory.length / ITEMS_PER_PAGE
  );

  const paginatedHistory = filteredHistory.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  function exportCSV() {
    const headers = [
      "Customer",
      "Prediction",
      "Risk",
      "Probability (%)",
      "Date",
    ];

    const rows = paginatedHistory.map((item) => [
      item.customer,
      item.prediction,
      getRisk(item.churn_probability),
      item.churn_probability.toFixed(2),
      item.date,
    ]);

    const csv = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "customer_directory.csv";

    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-6">

      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-primary/10 to-background p-8">

        <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative flex items-center">

          <div className="flex items-center gap-5">

            <div className="gradient-icon flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">

              <Users className="h-8 w-8 text-primary" />

            </div>

            <div>

              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">

                <Sparkles className="h-3.5 w-3.5 text-primary" />

                <span className="text-xs font-medium text-primary">
                  Customer Directory
                </span>

              </div>

              <h1 className="text-4xl font-bold tracking-tight">
                Customer Management
              </h1>

              <p className="mt-2 text-muted-foreground">
                Explore customer information, manage records, and analyze churn profiles.
              </p>

            </div>

          </div>

        </div>

      </div>

      <div className="rounded-xl border bg-card p-6 shadow-sm">

        <CustomerToolbar
          keyword={keyword}
          setKeyword={(value) => {
            setKeyword(value);
            setCurrentPage(1);
          }}
          predictionFilter={predictionFilter}
          setPredictionFilter={(value) => {
            setPredictionFilter(value);
            setCurrentPage(1);
          }}
          riskFilter={riskFilter}
          setRiskFilter={(value) => {
            setRiskFilter(value);
            setCurrentPage(1);
          }}
          onRefresh={loadHistory}
          onExport={exportCSV}
        />

        {loading ? (
          <p className="text-center py-10">
            Loading history...
          </p>
        ) : (
          <div className="overflow-hidden rounded-xl border bg-background">

            <table className="w-full border-collapse">

              <thead>
                <tr className="border-b">
                  <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Customer
                  </th>

                  <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Prediction
                  </th>

                  <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Risk
                  </th>

                  <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Probability
                  </th>

                  <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Date
                  </th>

                  <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {paginatedHistory.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b transition-colors hover:bg-muted/40"
                  >
                    {/* Customer */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div
                          className="
        flex h-11 w-11 items-center justify-center
        rounded-xl
        bg-primary/10
        text-sm
        font-bold
        text-primary
      "
                        >
                          {item.customer
                            .split(" ")
                            .map((word) => word[0])
                            .join("")
                            .slice(0, 2)
                            .toUpperCase()}
                        </div>

                        <div>
                          <p className="font-semibold">
                            {item.customer}
                          </p>

                          <p className="text-xs text-muted-foreground">
                            Customer Profile
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Prediction */}
                    <td className="px-6 py-3 text-center">
                      <div className="flex justify-center">
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${item.prediction === "Churn"
                            ? "bg-red-100 text-red-700"
                            : "bg-green-100 text-green-700"
                            }`}
                        >
                          {item.prediction}
                        </span>
                      </div>
                    </td>

                    {/* Risk */}
                    <td className="px-6 py-3 text-center">
                      <div className="flex justify-center">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${getRisk(item.churn_probability) === "High"
                            ? "bg-red-100 text-red-700"
                            : getRisk(item.churn_probability) === "Medium"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-green-100 text-green-700"
                            }`}
                        >
                          {getRisk(item.churn_probability)}
                        </span>
                      </div>
                    </td>

                    {/* Probability */}
                    <td className="px-6 py-4">
                      <div className="space-y-2">

                        <div className="flex justify-between text-sm">
                          <span className="font-semibold">
                            {item.churn_probability.toFixed(1)}%
                          </span>
                        </div>

                        <div className="h-2 rounded-full bg-muted overflow-hidden">

                          <div
                            className={`h-full rounded-full transition-all ${item.churn_probability >= 70
                              ? "bg-red-500"
                              : item.churn_probability >= 40
                                ? "bg-yellow-500"
                                : "bg-green-500"
                              }`}
                            style={{
                              width: `${item.churn_probability}%`,
                            }}
                          />

                        </div>

                      </div>
                    </td>


                    {/* Date */}
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-muted-foreground">
                      {formatDate(item.date)}
                    </td>

                    {/* Action */}
                    <td className="px-6 py-4 text-center">
                      <Button variant="outline" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>


            <div className="mt-6 flex items-center justify-between px-6 pb-6 pt-2">
              <p className="text-sm text-muted-foreground">
                Showing{" "}
                {filteredHistory.length === 0
                  ? 0
                  : (currentPage - 1) * ITEMS_PER_PAGE + 1}
                {" - "}
                {Math.min(
                  currentPage * ITEMS_PER_PAGE,
                  filteredHistory.length
                )}{" "}
                of {filteredHistory.length} records
              </p>

              <div className="flex gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage((page) => page - 1)
                  }
                  className="rounded-lg border px-4 py-2 disabled:opacity-50"
                >
                  Previous
                </button>

                <span className="flex items-center px-3">
                  Page {currentPage} of {Math.max(totalPages, 1)}
                </span>

                <button
                  disabled={currentPage === totalPages || totalPages === 0}
                  onClick={() =>
                    setCurrentPage((page) => page + 1)
                  }
                  className="rounded-lg border px-4 py-2 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}