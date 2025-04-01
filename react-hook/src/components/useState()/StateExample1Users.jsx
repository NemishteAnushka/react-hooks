import React from "react";
import StateExample1User from "./StateExample1User";

function StateExample1Users({ users, handleIncreaseAge, handleDeleteUser }) {
  console.log(users);
  return (
    <>
      <h1>Users</h1>
      {users.map((item) => (
        <StateExample1User
          key={item?.id}
          item={item}
          handleIncreaseAge={handleIncreaseAge}
          handleDeleteUser={handleDeleteUser}
        />
      ))}
    </>
  );
}

export default StateExample1Users;
