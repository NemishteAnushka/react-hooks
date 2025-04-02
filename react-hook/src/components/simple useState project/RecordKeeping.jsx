import React, { useState } from "react";
import { v4 as uuid } from "uuid";
function RecordKeeping() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [records, setRecords] = useState([]);
  console.log(records);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    console.log("name", { name, email });
    const newRecords = { id: uuid(), name, email };
    setRecords((prevState) => {
      return [...prevState, newRecords];
    });
    setEmail("");
    setName("");
  };
  //remove user
  const deleteUser = (id) => {
    setRecords((prevState) => {
      return prevState.filter((user) => {
        return user.id !== id;
      });
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
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id=""
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
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
