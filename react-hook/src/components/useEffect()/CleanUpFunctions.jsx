import React, { useEffect, useState } from "react";

function CleanUpFunctions() {
  console.log("component render");
  const [count, setCount] = useState(0);
  //senario 1 : clean up functions will be executed only when component will be unmount means removed from the screen

  //senario 2 : if there is any value in dependancy array then
  //component will be rendered
  //clean up function will be called
  //useeffect will be called
  useEffect(() => {
    console.log("useEffect called");
    //cleanup functions
    return function () {
      console.log("cleanup function");
    };
  }, [count]);
  return (
    <div>
      <h1>Counter : {count} </h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default CleanUpFunctions;
