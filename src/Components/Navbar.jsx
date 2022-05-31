import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { CartContext } from "../Context/CartContext";
import { ThemeContext } from "../Context/ThemeContext";
import Wishlist from "./Wishlist";

const Navbar = () => {
  const { isAuthorized, login, logout } = useContext(AuthContext);
  const { buy } = useContext(CartContext);
  const { isLight, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      Navbar
      <button
        onClick={() => {
          if (isAuthorized) {
            logout();
          } else {
            login("R", "Z");
            console.log("R", "Z");
          }
        }}
      >
        {isAuthorized ? "Logout" : "Login"}
      </button>
      <button onClick={buy}>Buy</button>
      <button onClick={toggleTheme}>{`Make ${
        isLight ? "Dark" : "Light"
      }`}</button>
      <Wishlist></Wishlist>
    </div>
  );
};

export default Navbar;
