import { useState } from "react";
import toast from "react-hot-toast";
import { predictCustomer } from "@/services/prediction";
import PredictionResult from "@/components/prediction/PredictionResult";
import FadeIn from "@/components/common/FadeIn";
import CustomerSection from "@/components/prediction/CustomerSection";
import ServiceSection from "@/components/prediction/ServiceSection";
import BillingSection from "@/components/prediction/BillingSection";
import axios from "axios";
import {
  BrainCircuit,
  Sparkles,
  Loader2,
} from "lucide-react";

export default function Prediction() {
  const [formData, setFormData] = useState({
    gender: "Male",
    SeniorCitizen: 0,

    Partner: "Yes",
    Dependents: "No",

    PhoneService: "Yes",
    MultipleLines: "No",

    InternetService: "Fiber optic",

    OnlineSecurity: "No",
    OnlineBackup: "No",
    DeviceProtection: "No",
    TechSupport: "No",
    StreamingTV: "No",
    StreamingMovies: "No",

    Contract: "Month-to-month",
    PaperlessBilling: "Yes",
    PaymentMethod: "Electronic check",

    tenure: 12,
    MonthlyCharges: 70.25,
    TotalCharges: 1200.5,
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handlePredict = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const startTime = Date.now();

      const response = await predictCustomer(formData);

      // Minimal tampilkan loading selama 1.5 detik
      const elapsed = Date.now() - startTime;

      if (elapsed < 1500) {
        await new Promise((resolve) =>
          setTimeout(resolve, 1500 - elapsed)
        );
      }

      setResult(response);

      toast.success(
        "Customer churn prediction generated successfully."
      );
    } catch (err) {
      console.error(err);

      if (axios.isAxiosError(err)) {
        if (!err.response) {
          toast.error("Cannot connect to the server.");
        } else if (err.response.status === 422) {
          toast.error("Invalid input. Please check the form.");
        } else if (err.response.status === 500) {
          toast.error("Server error. Please try again later.");
        } else {
          toast.error(`Request failed (${err.response.status}).`);
        }
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">

      <FadeIn direction="up">
        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-primary/10 to-background p-8">

          <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative flex items-center">

            <div className="flex items-center gap-5">

              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-primary/25 blur-xl" />
                <div className="gradient-icon relative flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg">
                  <BrainCircuit className="h-8 w-8 text-primary" />
                </div>
              </div>

              <div>

                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">

                  <Sparkles className="h-3.5 w-3.5 text-primary" />

                  <span className="text-xs font-medium text-primary">
                    Prediction Directory
                  </span>

                </div>

                <h1 className="text-4xl font-bold tracking-tight">
                  Customer Churn Prediction
                </h1>

                <p className="mt-2 text-muted-foreground">
                  Predict customer churn using AI-powered analytics and gain actionable insights to support smarter retention strategies.
                </p>

              </div>

            </div>

          </div>

        </div>


      </FadeIn>

      <form onSubmit={handlePredict}>
        <div className="grid gap-6 xl:grid-cols-3">

          {/* Left Side */}
          <div className="space-y-6 xl:col-span-2">
            {/* Customer Information */}
            <FadeIn direction="right" delay={0.1}>
              <CustomerSection
                formData={formData}
                setFormData={setFormData}
              />
            </FadeIn>

            {/* Service Information */}
            <FadeIn direction="left" delay={0.2}>
              <ServiceSection
                formData={formData}
                setFormData={setFormData}
              />
            </FadeIn>

            {/* Billing Information */}
            <FadeIn direction="right" delay={0.3}>
              <BillingSection
                formData={formData}
                setFormData={setFormData}
              />
            </FadeIn>

            <FadeIn direction="up" delay={0.35}>
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-xl
    bg-primary
    px-8
    py-3
    font-medium
    text-primary-foreground
    shadow-md
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:shadow-lg
    disabled:cursor-not-allowed
    disabled:opacity-70
"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Predicting Customer...
                    </>
                  ) : (
                    <>
                      Predict Customer
                    </>
                  )}
                </button>
              </div>
            </FadeIn>

          </div>

          {/* Right Side */}
          <div className="xl:col-span-1">
            <FadeIn direction="left" delay={0.4}>
              <div className="sticky top-6">
                <PredictionResult
                  result={result}
                  formData={formData}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </form>
    </div>
  );
}