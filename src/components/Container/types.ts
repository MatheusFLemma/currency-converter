export type CurrencyRatesData = { [key: string]: number };

export interface CurrencyReducerState {
  currencyOne: string;
  currencyTwo: string;
  valueOne: number;
  valueTwo: number;
}

export type Currencies = "CURRENCY_ONE" | "CURRENCY_TWO" | "INPUT_ONE" | "INPUT_TWO";

export interface CurrencyReducerAction {
  type: Currencies;
  payload: string;
}
