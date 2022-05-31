import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Wishlist = () => {
  const { counter } = useContext(CartContext);
  return <div>Wishlist: {counter}</div>;
};

export default Wishlist;
