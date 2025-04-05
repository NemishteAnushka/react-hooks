import React, { useState } from "react";

function SimpleForm() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
  });

  const { firstName, lastName, userName, phoneNumber } = userInfo;
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  const handleOnChange = (e) => {
    setUserInfo((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="">First Name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleOnChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleOnChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">User Name</label>
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={handleOnChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleOnChange}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default SimpleForm;
