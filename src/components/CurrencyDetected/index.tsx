import { ReactNode } from 'react';

interface CurrencyDetectedProps {
  children: ReactNode;
}

function CurrencyDetected({ children }: CurrencyDetectedProps) {
  return <span className="text-4xl text-gray">{children}</span>;
}

export default CurrencyDetected;
