import useGlobalState from '../utils/useGlobalState';
import CountChild1 from '../components/CountChild1';

function CountPage() {
  const [count, setCount] = useGlobalState<number>(['count'], 0);
  return (
    <div className="px-10">
      <CountChild1 />
      <p className="my-2">count: {count}</p>
      <button
        className="rounded-lg bg-blue-500 hover:bg-blue-600 duration-200 text-white px-3 py-1"
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>
      <button
        className="rounded-lg bg-blue-500 hover:bg-blue-600 duration-200 text-white px-3 py-1 ml-2"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
    </div>
  );
}

export default CountPage;
