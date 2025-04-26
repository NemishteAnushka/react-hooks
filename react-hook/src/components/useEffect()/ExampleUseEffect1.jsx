import React, { useEffect, useState } from "react";

function ExampleUseEffect1() {
  console.log("component rendered");
  const [count, setCount] = useState(0);
  //1st argument callback function
  //   useEffect(() => {
  //     console.log("useEffect called");
  //   });

  //if you want to run useeffect only once when component rendered use dependancy array 2nd arrgument
  //   useEffect(() => {
  //     console.log("useEffect called");
  //   }, []);

  //using value in dependancy array
  useEffect(() => {
    console.log("useEffect called");
  }, [count]); //this will call useeffect whenever the state will be rendered
  return (
    <div>
      <h1>UseEffect()</h1>
      <h3>{count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </div>
  );
}

export default ExampleUseEffect1;
