import { CurrencyDetected } from "../CurrencyDetected";
import { CurrencyInputProps } from "./types";

export function CurrencyInput({ label, value, onChange }: CurrencyInputProps) {
  return (
    <>
      <CurrencyDetected>{label}</CurrencyDetected>
      <input
        className="text-[#171924] text-4xl w-full"
        type="number"
        {...{
          value,
          onChange,
        }}
      />
    </>
  );
}
