import useGlobalState from '../utils/useGlobalState';

function CountChild2() {
  const [count] = useGlobalState<number>(['count'], 0);

  return (
    <div className="border p-4 mt-2">
      <h3>Child 2</h3>
      <p>count: {count}</p>
    </div>
  );
}

export default CountChild2;
