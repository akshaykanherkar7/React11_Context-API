import { useContext } from "react";
import "./App.css";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const { isLight } = useContext(ThemeContext);
  return (
    <div className={`App ${isLight ? "light" : "dark"}`}>
      <Navbar></Navbar>
      <Body></Body>
    </div>
  );
}

export default App;
