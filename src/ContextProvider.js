import React, { createContext, useState } from "react";

export const StateContext = createContext();

function ContextProvider({ children }) {
  const [data, setData] = useState("");
  const [cart, setCart] = useState([]);
  const [isModal, setIsModal] = useState(false);

  return (
    <StateContext.Provider
      value={{ data, cart, isModal, setData, setCart, setIsModal }}
    >
      {children}
    </StateContext.Provider>
  );
}

export default ContextProvider;
