import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Content from "./Content";
//console.log(React);

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="App" style={{ padding: 10 }}>
        <button
          onClick={() => {
            setShow(!show);
            toast.success(show ? "Hide" : "Show", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }}>
          Toggle
        </button>
        {show && <Content />}
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
