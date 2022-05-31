import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Cart from "./Cart";

const Product = () => {
  const { isAuthorized } = useContext(AuthContext);
  return (
    <div>
      Product:{isAuthorized ? "LoggedIN" : "LoggedOut"}
      <Cart></Cart>
    </div>
  );
};

export default Product;
