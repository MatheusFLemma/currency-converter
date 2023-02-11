import axios from "axios";

export const api = axios.create({
  baseURL: "https://v6.exchangerate-api.com/v6/",
});
