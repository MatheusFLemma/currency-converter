import { TextProps } from "./types";

export function Text({ children }: TextProps) {
  return <p className="text-[#3861FB] text-lg">{children}</p>;
}
