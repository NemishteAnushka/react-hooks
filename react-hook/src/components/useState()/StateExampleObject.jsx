import React, { useState } from "react";

function StateExampleObject() {
  const [person, setPerson] = useState({
    id: 1,
    firstName: "Anushka",
    lastName: "Nemishte",
    email: "anushka@gmail.com",
    phone: 8010133160,
    age: 23,
  });
  const IncreaseAge = () => {
    setPerson((prevState) => {
      return { ...prevState, age: prevState.age + 1 };
    });
  };
  return (
    <>
      <h1>State Example using Object</h1>
      <p>FirstName : {person.firstName}</p>
      <p>LastName : {person.lastName}</p>
      <p>Email : {person.email}</p>
      <p>Phone : {person.phone}</p>
      <p>Age : {person.age}</p>
      <button onClick={IncreaseAge}>Increase Age</button>
    </>
  );
}

export default StateExampleObject;
