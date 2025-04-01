import React, { useState } from "react";
import StateExample1Users from "./StateExample1Users";

function UseStateExample1() {
  const [users, setUsers] = useState([
    { id: 1, firstName: "Anushka", lastName: "Nemishte", age: 23 },
    { id: 2, firstName: "Anuja", lastName: "Nemishte", age: 18 },
    { id: 3, firstName: "john", lastName: "Doe", age: 20 },
  ]);

  //function to increase age for perticular user
  const handleIncreaseAge = (id) => {
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        } else {
          return user;
        }
      });
    });
  };
  //function to delete user
  const handleDeleteUser = (id) => {
    setUsers((prevState) => {
      return prevState.filter((user) => {
        return user.id !== id;
      });
    });
  };
  return (
    <>
      <h1>UseState real world example</h1>
      <StateExample1Users
        users={users}
        handleIncreaseAge={handleIncreaseAge}
        handleDeleteUser={handleDeleteUser}
      />
    </>
  );
}

export default UseStateExample1;
