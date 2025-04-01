import React, { useState } from "react";
//We use a callback function in the useState setter when we need to update the state based on the previous state. This is important because state updates in React are asynchronous, and using the previous state directly ensures that we are always working with the latest state value.

//Without a callback, you might reference an outdated state value due to the asynchronous nature of useState.
function StateUsingCallBack() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>State using callback</h1>
      <h2>{counter}</h2>
      <button
        onClick={() => {
          setCounter((prevState) => {
            return prevState + 1;
          });
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setCounter((prevState) => {
            return prevState - 1;
          });
        }}
      >
        Decrease
      </button>
    </>
  );
}

export default StateUsingCallBack;
