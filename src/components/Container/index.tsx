import Heading from '../Heading';
import CurrencyInput from '../CurrencyInput';

function Container() {
  return (
    <main className="h-screen px-4 flex flex-col items-center justify-evenly lg:px-8 lg:container lg:mx-auto">
      <Heading>Conversor de Moedas</Heading>
      <CurrencyInput />
    </main>
  );
}

export default Container;
