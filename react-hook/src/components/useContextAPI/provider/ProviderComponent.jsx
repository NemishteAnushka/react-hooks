import React, { createContext, useContext } from "react";

export const MyContextProvider = createContext();
function ProviderComponent({ children }) {
  return (
    <MyContextProvider.Provider
      value={{ userName: "Anushka", email: "anushka@gail.com" }}
    >
      <h1>Provider</h1>
      {children}
    </MyContextProvider.Provider>
  );
}

export function useProviderContext() {
  return useContext(MyContextProvider);
}

export default ProviderComponent;
