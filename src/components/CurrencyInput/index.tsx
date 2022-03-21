import { exchangeRatesApi } from '../../services/exchangeRatesApi';
import { useEffect, useState } from 'react';

import Text from '../Text';
import CurrencyDetected from '../CurrencyDetected';

const tokenAccessKey = 'e7c262ff4aa23ad0a9ca62d40ccbf137';

function CurrencyInput() {
  const [rates, setRates] = useState([]);

  const fetchExchangeRates = () => {
    exchangeRatesApi.get(`/latest?access_key=${tokenAccessKey}`).then(({ data }) => {
      setRates(data.rates);
    });
  };

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  return (
    <section className="w-full grid grid-rows-2 gap-y-4">
      <div className="flex gap-x-1 w-full justify-evenly items-center">
        <select className="h-full text-dark bg-white border-2 border-gray rounded-xl p-4 text-base w-96">
          {Object.keys(rates).map((rate) => (
            <option key={rate}>{rate}</option>
          ))}
        </select>
        <Text>para</Text>
        <select className="h-full text-dark bg-white border-2 border-gray rounded-xl p-4 text-base w-96">
          {Object.keys(rates).map((rate) => (
            <option key={rate}>{rate}</option>
          ))}
        </select>
      </div>

      <div className="flex gap-x-1 w-full justify-center items-baseline">
        <CurrencyDetected>USD</CurrencyDetected>
        <input className="text-dark text-4xl max-w-xs w-full" type="text" value={''} />
        <Text>vale</Text>
        <CurrencyDetected>USD</CurrencyDetected>
        <input className="text-dark text-4xl max-w-xs" type="text" value={''} />
        <Text>hoje</Text>
      </div>
    </section>
  );
}

export default CurrencyInput;
