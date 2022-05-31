import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const { isAuthorized } = useContext(AuthContext);

  const AddTocart = (value) => {
    setCounter(counter + value);
  };

  const buy = () => {
    if (isAuthorized) {
      console.log("Can Buy");
    } else {
      console.log("Cannot Buy Without Log-In");
    }
  };
  return (
    <CartContext.Provider value={{ counter, AddTocart, buy }}>
      {children}
    </CartContext.Provider>
  );
};
