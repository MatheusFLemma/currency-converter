export interface CurrencyInputProps {
  label: string;
  value: string | number | readonly string[];
  onChange: React.ChangeEventHandler<HTMLInputElement>
}