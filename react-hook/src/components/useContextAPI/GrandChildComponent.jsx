import React, { useContext } from "react";
import { MyContext } from "./MyApp";

function GrandChildComponent() {
  const myFunc = useContext(MyContext);
  return (
    <div
      style={{
        background: "red",
        color: "white",
        height: "270px",
      }}
    >
      <h1>Grand Child Compoent</h1>
      <button onClick={myFunc}>Call Function</button>
    </div>
  );
}

export default GrandChildComponent;
