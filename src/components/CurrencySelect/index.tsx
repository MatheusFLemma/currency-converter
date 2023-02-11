import { CurrencySelectProps } from "./types";

export function CurrencySelect({ onChange, value, data, ...props }: CurrencySelectProps) {
  return (
    <select
      className="h-full text-[#171924] bg-white border-2 border-[#D8D8D8] rounded-xl p-4 text-base w-full max-h-14 lg:w-96"
      {...{
        onChange,
        value
      }}
      {...props}
    >
      {Object.keys(data).map((rate) => (
        <option key={rate}>{rate}</option>
      ))}
    </select>
  );
}
