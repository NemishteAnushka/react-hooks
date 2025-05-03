import React from "react";
import GrandChildComponent from "./GrandChildComponent";

function ChildComponent() {
  return (
    <div
      style={{
        background: "purple",
        color: "white",
        height: "370px",
      }}
    >
      <h1>Child component</h1>
      <GrandChildComponent />
    </div>
  );
}

export default ChildComponent;
