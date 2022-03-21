import axios from 'axios';

export const exchangeRatesApi = axios.create({
  baseURL: 'http://api.exchangeratesapi.io/v1',
});
