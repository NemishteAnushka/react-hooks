import React, { useState } from "react";

function ReactUseState1() {
  const [firstName, setFirstName] = useState("Anushka");
  const changeName = () => {
    if (firstName === "Anushka") {
      setFirstName("Anuja");
    } else {
      setFirstName("Anushka");
    }
  };
  return (
    <>
      <h1>{firstName}</h1>
      <button onClick={changeName}>Click me</button>
    </>
  );
}

export default ReactUseState1;
