import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
}

function Text({ children }: TextProps) {
  return <p className="text-blue text-lg">{children}</p>;
}

export default Text;
