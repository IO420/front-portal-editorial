import Counter from './Counter';
import Text from './Text';
import './prueba.css';

export default function Page() {
  return (
    <div>
      <h1>
        <Counter />
        <Text />
      </h1>
    </div>
  );
}
