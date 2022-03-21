import { exchangeRatesApi } from '../../services/exchangeRatesApi';
import { useEffect, useState } from 'react';

import Text from '../Text';
import CurrencyDetected from '../CurrencyDetected';

const tokenAccessKey = 'e7c262ff4aa23ad0a9ca62d40ccbf137';

function CurrencyInput() {
  const [rates, setRates] = useState<any[]>([]);
  const [amount1, setAmount1] = useState<number>(0);
  const [amount2, setAmount2] = useState<number>(0);
  const [currency1, setCurrency1] = useState<any>('USD');
  const [currency2, setCurrency2] = useState<any>('BRL');
  const [selectedCurrencyOne, setSelectedCurrencyOne] = useState<string>('USD');
  const [selectedCurrencyTwo, setSelectedCurrencyTwo] = useState<string>('BRL');

  const fetchExchangeRates = () => {
    exchangeRatesApi.get(`/latest?access_key=${tokenAccessKey}`).then(({ data }) => {
      setRates(data.rates);
    });
  };

  function handleChangeCurrencyOne(e: any) {
    setSelectedCurrencyOne(e.target.value);
    setCurrency1(e.target.value);
  }

  function format(number: any) {
    return number.toFixed(4);
  }

  function handleChangeCurrencyTwo(e: any) {
    setSelectedCurrencyTwo(e.target.value);
    setCurrency2(e.target.value);
  }

  function handleAmount1Change(amount1: any) {
    if (
      currency1 !== undefined ||
      (NaN && currency2 !== undefined) ||
      (NaN && amount1 !== undefined) ||
      (NaN && amount2 !== undefined) ||
      NaN
    ) {
      setAmount2(format((amount1.target.value * rates[currency2]) / rates[currency1]));
      setAmount1(amount1);
    }
  }

  function handleAmount2Change(amount2: any) {
    if (
      currency1 !== undefined ||
      (NaN && currency2 !== undefined) ||
      (NaN && amount1 !== undefined) ||
      (NaN && amount2 !== undefined) ||
      NaN
    ) {
      setAmount1(format((amount2.target.value * rates[currency1]) / rates[currency2]));
      setAmount2(amount2);
    }
  }

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  return (
    <section className="w-full grid grid-rows-2 gap-y-4">
      <div className="flex gap-x-1 w-full justify-evenly items-center">
        <select
          onChange={handleChangeCurrencyOne}
          className="h-full text-dark bg-white border-2 border-gray rounded-xl p-4 text-base w-96"
          value={currency1}
        >
          {Object.keys(rates).map((rate) => (
            <option key={rate}>{rate}</option>
          ))}
        </select>
        <Text>para</Text>
        <select
          onChange={handleChangeCurrencyTwo}
          className="h-full text-dark bg-white border-2 border-gray rounded-xl p-4 text-base w-96"
          value={currency2}
        >
          {Object.keys(rates).map((rate) => (
            <option key={rate} value={rate}>
              {rate}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-x-1 w-full justify-center items-baseline">
        <CurrencyDetected>{selectedCurrencyOne}</CurrencyDetected>
        <input
          className="text-dark text-4xl max-w-xs w-full"
          type="number"
          value={amount1}
          onChange={handleAmount1Change}
        />
        <Text>vale</Text>
        <CurrencyDetected>{selectedCurrencyTwo}</CurrencyDetected>
        <input
          className="text-dark text-4xl max-w-xs w-full"
          type="number"
          value={amount2}
          onChange={handleAmount2Change}
        />
        <Text>hoje</Text>
      </div>
    </section>
  );
}

export default CurrencyInput;
