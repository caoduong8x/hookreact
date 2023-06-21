import React, { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import Content from "./Content";
import "./App.css";
import { ThemeContext } from "./ThemeContext";

function App() {
  const click = useContext(ThemeContext);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={click.toggleTheme}>Toggle</button>
      <br />
      <Content />
    </div>
  );
}

export default App;
