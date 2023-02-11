import { useEffect, useReducer, useState } from "react";

import { Text } from "../Text";
import { CurrencySelect } from "../CurrencySelect";
import { ContainerSkeleton } from "../Container/Skeleton";

import { toast } from "react-toastify";

import { getExchangeRates } from "../../services/exchangeRatesApi";

import { CurrencyRatesData } from "./types";
import { Heading } from "../Heading";
import { CurrencyReducer, currencyInitialValues } from "./utils/reducer";
import { CurrencyInput } from "../CurrencyInput";

export function Container() {
  const [isLoading, setIsLoading] = useState(false);
  const [rates, setRates] = useState<CurrencyRatesData>({} as CurrencyRatesData);
  const [state, dispatch] = useReducer(CurrencyReducer, currencyInitialValues);

  useEffect(() => {
    setIsLoading(true);

    getExchangeRates(state.currencyOne)
      .then((res) => {
        const ratesData = res.data.conversion_rates;
        
        setRates(ratesData);
      })
      .catch((err) => toast.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  function handleChangeCurrency(ev: React.ChangeEvent<HTMLSelectElement>, select: "one" | "two") {
    const value = ev.target.value;

    if (select === "one") {
      dispatch({ type: "CURRENCY_ONE", payload: value });
    } else {
      dispatch({ type: "CURRENCY_TWO", payload: value });
    }
  }

  function handleCurrencyInputChange(
    ev: React.ChangeEvent<HTMLInputElement>,
    input: "one" | "two",
  ) {
    const value = Number(ev.target.value);
    const calculatedValueOfFirstInput = format(
      (value * rates[state.currencyTwo]) / rates[state.currencyOne],
    );
    const calculatedValueOfSecondInput = format(
      (value * rates[state.currencyOne]) / rates[state.currencyTwo],
    );

    if (input === "one") {
      dispatch({ type: "INPUT_TWO", payload: String(calculatedValueOfFirstInput) });
      dispatch({ type: "INPUT_ONE", payload: String(value) });
    } else {
      dispatch({ type: "INPUT_ONE", payload: String(calculatedValueOfSecondInput) });
      dispatch({ type: "INPUT_TWO", payload: String(value) });
    }
  }

  function format(number: number) {
    const formattedValue = number.toFixed(4);

    return formattedValue;
  }

  if (isLoading) return <ContainerSkeleton />;

  return (
    <main className="h-screen px-4 flex flex-col items-center justify-evenly lg:px-8 lg:container lg:mx-auto">
      <Heading>Conversor de Moedas</Heading>
      <section className="w-full grid grid-rows-2 lg:gap-y-6">
        <div className="flex flex-col w-full justify-evenly items-center lg:flex-row">
          <CurrencySelect
            data={rates}
            onChange={(ev) => handleChangeCurrency(ev, "one")}
            value={state.currencyOne}
          />
          <Text>para</Text>
          <CurrencySelect
            data={rates}
            onChange={(ev) => handleChangeCurrency(ev, "two")}
            value={state.currencyTwo}
          />
        </div>

        <div className="flex flex-col gap-x-1 w-full justify-center items-baseline lg:flex-row">
          <CurrencyInput
            label={state.currencyOne}
            value={state.valueOne}
            onChange={(ev) => handleCurrencyInputChange(ev, "one")}
          />
          <Text>vale</Text>
          <CurrencyInput
            label={state.currencyTwo}
            value={state.valueTwo}
            onChange={(ev) => handleCurrencyInputChange(ev, "two")}
          />
          <Text>hoje</Text>
        </div>
      </section>
    </main>
  );
}
