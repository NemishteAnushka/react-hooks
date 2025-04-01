import React from "react";

function StateExample1User({ item, handleIncreaseAge }) {
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
      <hr />
    </>
  );
}

export default StateExample1User;
