import React, { useState } from "react";
import { v4 as uuid } from "uuid";
function RecordKeeping() {
  const [state, setState] = useState({
    name: "",
    email: "",
  });
  // const [email, setEmail] = useState("");
  const [records, setRecords] = useState([]);
  console.log(records);
  const onSubmit = (e) => {
    e.preventDefault();

    const newRecords = { id: uuid(), name: state.name, email: state.email };
    setRecords((prevState) => {
      return [...prevState, newRecords];
    });
  };
  //remove user
  const deleteUser = (id) => {
    setRecords((prevState) => {
      return prevState.filter((user) => {
        return user.id !== id;
      });
    });
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Enter name"
          value={state?.name}
          onChange={handleOnChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id=""
          placeholder="Enter email"
          value={state?.email}
          onChange={handleOnChange}
        />
        <button type="submit">add</button>
      </form>
      <div>
        {records.map((record) => (
          <>
            <ul key={uuid()}>
              <li>{record.name}</li>
              <li>{record.email}</li>
            </ul>
            <button
              onClick={() => {
                deleteUser(record.id);
              }}
            >
              Delete
            </button>
          </>
        ))}
      </div>
    </>
  );
}

export default RecordKeeping;
