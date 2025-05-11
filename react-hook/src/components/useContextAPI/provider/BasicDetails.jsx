import React from "react";
import { useProviderContext } from "./ProviderComponent";

function BasicDetails() {
  const { userName, email } = useProviderContext();
  return (
    <div>
      <h1>Basic details</h1>
      <h4>Name:{userName}</h4>
      <h4>Email : {email}</h4>
    </div>
  );
}

export default BasicDetails;
