import React, { useRef } from "react";

//diff between usestate and use ref
//useState re-renders the component and useref do not re render the component
//useref  store a mutable value that does not cause a re-render when updated.
//Accessing DOM elements, tracking previous values, timers, storing non-UI data across renders.
function ExampleUseRef() {
  console.log("component rendered");
  const refValue = useRef("Anushka");
  console.log(refValue);

  const handleOnChange = () => {
    console.log("changed name");
    const h1Element = refValue.current;
    console.log(h1Element);
    h1Element.textContent = "Hi anuu";
  };
  return (
    <div>
      <h1 ref={refValue}>Anushka</h1>
      <button onClick={handleOnChange}>Change Name</button>
    </div>
  );
}

export default ExampleUseRef;
