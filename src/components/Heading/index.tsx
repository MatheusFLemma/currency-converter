import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
}

function Heading({ children }: HeadingProps) {
  return <h1 className="text-6.5xl font-bold text-dark">{children}</h1>;
}

export default Heading;
