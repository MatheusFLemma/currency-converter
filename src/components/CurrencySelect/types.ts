import { CurrencyRatesData } from "../Container/types";

export interface CurrencySelectProps {
  onChange: React.ChangeEventHandler<HTMLSelectElement>
  value: string | number | readonly string[];
  data: CurrencyRatesData;
}