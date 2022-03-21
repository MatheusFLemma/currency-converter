import Heading from '../Heading';
import CurrencyInput from '../CurrencyInput/index';

function Container() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-evenly container mx-auto max-w-5xl">
      <Heading>Conversor de Moedas</Heading>
      <CurrencyInput />
    </main>
  );
}

export default Container;
