import axios from "axios";

export const api = axios.create({
  baseURL: "https://customer-churn-ai-iykz.onrender.com",
});