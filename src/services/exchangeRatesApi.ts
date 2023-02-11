import { api } from "../lib/axios";

export async function getExchangeRates(rate: string) {
  return await api.get(`/${import.meta.env.VITE_TOKEN_ACCESS_KEY}/latest/${rate}`);
}