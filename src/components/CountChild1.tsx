import useGlobalState from '../utils/useGlobalState';
import CountChild2 from '../components/CountChild2';

function CountChild1() {
  const [count] = useGlobalState<number>(['count'], 0);

  return (
    <div className="border p-4">
      <h3>Child 1</h3>
      <p>count: {count ?? 0}</p>
      <CountChild2 />
    </div>
  );
}

export default CountChild1;
