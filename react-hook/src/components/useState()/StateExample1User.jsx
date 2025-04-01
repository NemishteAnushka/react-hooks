import React from "react";

function StateExample1User({ item, handleIncreaseAge, handleDeleteUser }) {
  return (
    <>
      <h2>FirstName : {item?.firstName}</h2>
      <h2>LastName : {item?.lastName}</h2>
      <h2>Age : {item?.age}</h2>
      <button
        onClick={() => {
          handleIncreaseAge(item?.id);
        }}
      >
        Increase age
      </button>
      <button
        onClick={() => {
          handleDeleteUser(item?.id);
        }}
      >
        Delete user
      </button>
      <hr />
    </>
  );
}

export default StateExample1User;
