//useCallback():
// - Reference type
// - React memo()
// ==> dùng memo() trong component con thì mới dùng useCallback trong component cha
import React, { useCallback, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Content from "./Content";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <div style={{ padding: "10px 30px" }}>
        <Content onIncrease={handleIncrease} />
        <h1>{count}</h1>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
