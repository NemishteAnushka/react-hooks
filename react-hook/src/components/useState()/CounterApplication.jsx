import React, { useState } from "react";

function CounterApplication() {
  const [count, setCount] = useState(0);
  function handleIncrease() {
    setCount(count + 1);
  }
  function handleReset() {
    setCount(0);
  }
  function handleDecrease() {
    setCount(count - 1);
  }
  return (
    <>
      <h1>Counter Application</h1>
      <h4>Count : {count}</h4>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrease}>Decrease</button>
    </>
  );
}

export default CounterApplication;
