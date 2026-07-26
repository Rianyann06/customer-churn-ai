import { getRiskLevel } from "@/utils/riskLevel";
import { getRecommendations } from "@/utils/recommendation";
import { generateInsight } from "@/utils/aiInsight";
import { exportPredictionPdf } from "@/utils/exportPredictionPdf";
import {
  BrainCircuit,
  TrendingUp,
  ShieldAlert,
  ShieldCheck,
  Download,
  User,
  FileText,
  Globe,
  DollarSign,
  Clock3,
  Sparkles,
  CircleCheckBig,
} from "lucide-react";
interface PredictionResultProps {
  formData: any;

  result: {
    prediction: number;
    prediction_label: string;
    probability: {
      churn: number;
      no_churn: number;
    };
  } | null;
}

export default function PredictionResult({
  result,
  formData,
}: PredictionResultProps) {
  if (!result) {
    return (
      <div className="rounded-xl border bg-white p-8 shadow">
        <h2 className="text-2xl font-bold">
          Prediction Result
        </h2>

        <div className="mt-8 flex flex-col items-center text-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-4xl">
            🤖
          </div>

          <h3 className="text-lg font-semibold">
            AI Ready
          </h3>

          <p className="mt-3 text-sm text-gray-500 leading-6">
            Fill in the customer information and click
            <strong> Predict Customer </strong>
            to generate an AI prediction.
          </p>
        </div>

        <div className="mt-8 rounded-lg border border-dashed p-4 text-center text-sm text-gray-500">
          No prediction available yet.
        </div>
      </div>
    );
  }

  const churn = result.probability.churn * 100;

  const isChurn = result.prediction === 1;

  const risk = getRiskLevel(churn);

  const recommendations = getRecommendations(churn);

  const insights = generateInsight(formData, churn);

  const handleDownloadPdf = () => {
    exportPredictionPdf({
      formData,
      result,
      insights,
      recommendations,
    });
  };


  return (
    <div className="bg-white rounded-xl shadow p-8 space-y-6">

      <h2 className="text-3xl font-bold">
        Prediction Result
      </h2>

      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 via-background to-background p-6">

        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative">

          <div className="flex items-center justify-between">

            <div className="flex-1">

              {/* Subtitle */}
              <p className="ml-[72px] text-sm font-medium text-muted-foreground">
                AI Prediction
              </p>

              {/* Icon + Title */}
              <div className="flex items-start gap-4">

                <div className="gradient-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl">
                  <BrainCircuit className="h-7 w-7 text-primary" />
                </div>

                <div>

                  <h3 className="text-xl font-bold leading-tight tracking-tight">
                    Customer Churn
                    <br />
                    Analysis
                  </h3>

                </div>

              </div>

            </div>

          </div>

          <div className="mt-8">

            <div className="flex items-end gap-2">

              <h1 className="text-6xl font-bold tracking-tight">
                {churn.toFixed(1)}
              </h1>

              <span className="mb-2 text-2xl font-semibold text-muted-foreground">
                %
              </span>

            </div>

            <p className="mt-2 text-muted-foreground">
              Probability of customer churn
            </p>

          </div>

          <div className="mt-6 flex items-center justify-between rounded-xl border border-border/60 bg-background/70 px-4 py-3 backdrop-blur">

            <div className="flex items-center gap-2">

              {isChurn ? (
                <ShieldAlert className="h-5 w-5 text-red-500" />
              ) : (
                <ShieldCheck className="h-5 w-5 text-green-500" />
              )}

              <span className="text-sm font-medium">
                Model Confidence
              </span>

            </div>

            <div className="flex items-center gap-2">

              <TrendingUp className="h-4 w-4 text-primary" />

              <span className="font-semibold">
                {(Math.max(
                  result.probability.churn,
                  result.probability.no_churn
                ) * 100).toFixed(1)}
                %
              </span>

            </div>

          </div>

        </div>

      </div>

      <div className="rounded-xl border p-5">
        <div className="flex items-center justify-between">
          <span className="font-medium">
            Risk Level
          </span>

          <span className={`${risk.text} text-lg font-bold`}>
            {risk.label}
          </span>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-lg">
          Summary
        </h3>

        <p className="text-gray-600 mt-2">
          {isChurn
            ? "This customer has a high risk of leaving the service."
            : "This customer is likely to remain subscribed."}
        </p>
      </div>

      <div>

        <div className="mb-2 flex justify-between">

          <span className="font-medium">

            Churn Probability

          </span>

          <span>

            {churn.toFixed(2)}%

          </span>

        </div>

        <div className="h-3 w-full rounded-full bg-gray-200">

          <div
            className={`h-3 rounded-full ${risk.color}`}
            style={{
              width: `${churn}%`,
            }}
          />

        </div>

      </div>

      <div className="rounded-2xl border border-border/60 bg-card p-6">

        <div className="mb-6 flex items-center gap-4">

          <div className="gradient-icon flex h-12 w-12 items-center justify-center rounded-2xl">
            <User className="h-6 w-6 text-primary" />
          </div>

          <div>

            <h3 className="text-lg font-semibold tracking-tight">
              Customer Summary
            </h3>

            <p className="text-sm text-muted-foreground">
              Customer profile overview
            </p>

          </div>

        </div>

        <div className="divide-y divide-border">

          <div className="flex items-center justify-between py-4">

            <div className="flex items-center gap-3">

              <User className="h-4 w-4 text-primary" />

              <span className="text-sm text-muted-foreground">
                Gender
              </span>

            </div>

            <span className="text-sm font-semibold">
              {formData.gender}
            </span>

          </div>

          <div className="flex items-center justify-between py-4">

            <div className="flex items-center gap-3">

              <FileText className="h-4 w-4 text-primary" />

              <span className="text-sm text-muted-foreground">
                Contract
              </span>

            </div>

            <span className="max-w-[160px] text-right text-sm font-semibold">
              {formData.Contract}
            </span>

          </div>

          <div className="flex items-center justify-between py-4">

            <div className="flex items-center gap-3">

              <Clock3 className="h-4 w-4 text-primary" />

              <span className="text-sm text-muted-foreground">
                Tenure
              </span>

            </div>

            <span className="text-sm font-semibold">
              {formData.tenure} Months
            </span>

          </div>

          <div className="flex items-center justify-between py-4">

            <div className="flex items-center gap-3">

              <DollarSign className="h-4 w-4 text-primary" />

              <span className="text-sm text-muted-foreground">
                Monthly Charges
              </span>

            </div>

            <span className="text-sm font-semibold">
              ${Number(formData.MonthlyCharges).toFixed(2)}
            </span>

          </div>

          <div className="flex items-center justify-between py-4">

            <div className="flex items-center gap-3">

              <Globe className="h-4 w-4 text-primary" />

              <span className="text-sm text-muted-foreground">
                Internet
              </span>

            </div>

            <span className="max-w-[160px] text-right text-sm font-semibold">
              {formData.InternetService}
            </span>

          </div>

        </div>

      </div>

      <div className="rounded-xl border p-5">
        <h3 className="text-lg font-semibold">
          🤖 AI Analysis
        </h3>

        <ul className="mt-5 space-y-3">

          {insights.map((item) => (

            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border/60 bg-primary/5 p-3"
            >

              <Sparkles className="mt-0.5 h-5 w-5 text-primary" />

              <span className="text-sm leading-6">
                {item}
              </span>

            </li>

          ))}

        </ul>
      </div>

      <div className="rounded-xl border p-5">
        <h3 className="font-semibold text-lg">
          🎯 Recommendation
        </h3>

        <ul className="mt-5 space-y-3">

          {recommendations.map((item) => (

            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border/60 bg-green-500/5 p-3"
            >

              <CircleCheckBig className="mt-0.5 h-5 w-5 text-green-600" />

              <span className="text-sm leading-6">
                {item}
              </span>

            </li>

          ))}

        </ul>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleDownloadPdf}
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 font-medium text-primary-foreground shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
        >
          <Download className="h-4 w-4" />
          Export PDF Report
        </button>
      </div>

    </div>
  );
}