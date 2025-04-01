import React, { useState } from "react";
import { v4 as uuid } from "uuid";
function ArrayInState() {
  const [fruits, setFruits] = useState(["Apple", "Mango", "banana"]);
  function addNewFruit() {
    setFruits((prevState) => {
      return [...prevState, "new Fruit"];
    });
  }
  console.log(fruits);
  return (
    <>
      <h1>Update in State</h1>
      {fruits.map((fruit) => (
        <li key={uuid()}>{fruit}</li>
      ))}
      <button onClick={addNewFruit}>Click</button>
    </>
  );
}

export default ArrayInState;
