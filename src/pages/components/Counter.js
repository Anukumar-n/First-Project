import React, { useState } from "react";

export default function Counter()  {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ marginTop: "50px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment} style={{ margin: "5px" }}>
        + Increment
      </button>
      <button onClick={decrement} style={{ margin: "5px" }}>
        - Decrement
      </button>
      <button onClick={reset} style={{ margin: "5px" }}>
        Reset
      </button>
    </div>
  );
};

