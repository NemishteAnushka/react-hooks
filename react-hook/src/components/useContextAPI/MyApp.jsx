import React from "react";
import ParentComponent from "./ParentComponent";
import { createContext } from "react";

export const MyContext = createContext();
function MyApp() {
  const passFunction = () => {
    console.log("This is function in My App i want to pass in grandChild");
  };
  return (
    <MyContext.Provider value={passFunction}>
      <div
        style={{
          background: "black",
          color: "white",
          height: "570px",
        }}
      >
        <h1>App Component</h1>
        <ParentComponent />
      </div>
    </MyContext.Provider>
  );
}

export default MyApp;
