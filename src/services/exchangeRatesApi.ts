import { api } from "../lib/axios";

export async function getExchangeRates() {
  return await api.get(`/latest?access_key=${import.meta.env.VITE_TOKEN_ACCESS_KEY}`);
}