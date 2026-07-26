import { TrendingUp } from "lucide-react";
import {
    SiReact,
    SiFastapi,
    SiScikitlearn,
    SiSqlite,
    SiTailwindcss,
} from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutCard() {
    return (
        <Card className="overflow-hidden border-border/60 shadow-sm">
            <CardContent className="flex flex-col items-center px-12 py-16 text-center">

                <div className="gradient-icon flex h-24 w-24 items-center justify-center rounded-3xl shadow-xl">
                    <TrendingUp className="h-12 w-12 text-primary" />
                </div>

                <h1 className="mt-8 text-4xl font-bold tracking-tight">
                    Customer Churn AI
                </h1>

                <p className="mt-3 text-lg text-muted-foreground">
                    Predict. Analyze. Retain Customers.
                </p>

                <p className="mt-8 max-w-2xl leading-8 text-muted-foreground">
                    Customer Churn AI is an intelligent analytics platform that
                    leverages machine learning to predict customer churn, monitor
                    business performance, and deliver actionable insights through a
                    clean and modern dashboard experience.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <SiReact className="h-5 w-5 text-[#61DAFB]" />
                        <span>React 19</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <SiFastapi className="h-5 w-5 text-[#009688]" />
                        <span>FastAPI</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <SiScikitlearn className="h-5 w-5 text-[#F7931E]" />
                        <span>Scikit-learn</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <SiSqlite className="h-5 w-5 text-[#003B57]" />
                        <span>SQLite</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <SiTailwindcss className="h-5 w-5 text-[#06B6D4]" />
                        <span>Tailwind CSS</span>
                    </div>
                </div>

                <div className="mt-12 h-px w-24 bg-border" />

                <div className="mt-8 space-y-1 text-sm text-muted-foreground">

                    <p>Version 1.0.0</p>

                    <p>Developed by Muhammad Fakhrul Hizrian</p>

                </div>

            </CardContent>
        </Card>
    );
}