import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "@/layouts/DashboardLayout";
import Dashboard from "@/pages/Dashboard";
import Prediction from "@/pages/Prediction";
import Customer from "@/pages/Customer";
import Analytics from "@/pages/Analytics";
import Settings from "@/pages/Settings/index";



function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">404 Not Found</h1>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
} 