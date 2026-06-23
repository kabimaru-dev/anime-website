import { useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);

  function increment() {
    setCounter(count + 10);
  }

  function decrement() {
    setCounter(count - 10);
  }

  return (
    <div>
      <h1>Reputation: {count}</h1>
      <h1>
        Increment <button onClick={increment}>+</button>
      </h1>
      <h1>
        Decrement <button onClick={decrement}>-</button>
      </h1>
    </div>
  );
};

export default Counter;
