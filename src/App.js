//1. memo() -> Higher Order Component (HOC)
//2. useCallback()
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Content from "./Content";

function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div style={{ padding: "10px 30px" }}>
        <Content Count={count} />
        <h1>{count}</h1>
        <button onClick={increase}>Increase</button>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
