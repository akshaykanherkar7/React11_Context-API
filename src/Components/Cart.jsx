import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const {AddTocart } = useContext(CartContext);
  return (
    <div>
      Cart
      <button onClick={() => AddTocart(1)}>Add To Cart</button>
    </div>
  );
};

export default Cart;
