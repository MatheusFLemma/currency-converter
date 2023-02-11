import { HeadingProps } from "./types";

export function Heading({ children }: HeadingProps) {
  return <h1 className="text-5xl font-bold text-[#171924] text-center sm:text-6.5xl">{children}</h1>;
}
