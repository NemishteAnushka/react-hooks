import React, { useRef } from "react";

function FormUseRef() {
  const userRef = useRef("Anushka");
  console.log(userRef);
  const passwordRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userRef.current);
    const userInputField = userRef.current;
    const use = userInputField.value;

    const passwordFieldRef = passwordRef.current;
    const pass = passwordFieldRef.value;

    console.log({ use, pass });
  };
  return (
    <div>
      <h1>Form using Use Ref</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">User Name</label>
          <input type="text" name="userName" id="userName" ref={userRef} />
        </div>
        <div>
          <label htmlFor="userName">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormUseRef;
