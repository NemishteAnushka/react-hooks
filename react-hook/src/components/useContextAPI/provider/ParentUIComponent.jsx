import React from "react";
import UserComponent from "./UserComponent";

function ParentUIComponent() {
  return (
    <div>
      <h1>Hello from parent component</h1>
      <UserComponent />
    </div>
  );
}

export default ParentUIComponent;
