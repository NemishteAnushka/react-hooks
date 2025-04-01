import React, { useState } from "react";

function RecordKeeping() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
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
  );
}

export default RecordKeeping;
