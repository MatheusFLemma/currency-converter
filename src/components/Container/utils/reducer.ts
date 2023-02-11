import { CurrencyReducerState, CurrencyReducerAction } from "../types";

export const currencyInitialValues: CurrencyReducerState = {
  currencyOne: "BRL",
  currencyTwo: "USD",
  valueOne: 0,
  valueTwo: 0
};

export function CurrencyReducer(state: CurrencyReducerState, action: CurrencyReducerAction) {
  const { type, payload } = action;

  switch (type) {
    case "CURRENCY_ONE":
      return {
        ...state,
        currencyOne: payload,
      };
    case "CURRENCY_TWO":
      return {
        ...state,
        currencyTwo: payload,
      };
    case "INPUT_ONE":
      return {
        ...state,
        valueOne: Number(payload),
      };
    case "INPUT_TWO":
      return {
        ...state,
        valueTwo: Number(payload),
      };
    default:
      return state;
  }
}
