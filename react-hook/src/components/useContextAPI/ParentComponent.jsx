import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  return (
    <div
      style={{
        background: "pink",
        color: "white",
        height: "470px",
      }}
    >
      <h1>Parent Component</h1>
      <ChildComponent />
    </div>
  );
}

export default ParentComponent;
