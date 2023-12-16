import useCounterStore from './store';

const Counter = () => {
  //   const [value, setValue] = useState(0);
  // const [value, dispatch] = useReducer(counterReducer, 0);
  const { counter, increment, reset } = useCounterStore();

  return (
    <div>
      Counter ({counter})<button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
