// useState
//1. init state
//2. action: up/down
//----------------------------------------------------------------
// useReduce
//1. init state
//2. action: up/down
//3. reducer
//4. dispatch
import React, {
  useCallback,
  useMemo,
  useState,
  useRef,
  useReducer,
} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Content from "./Content";

//init state
const initState = 0;

//action
const UP_ACTION = "up";
const DOWN_ACTION = "down";

const reducer = (state, action) => {
  console.log("reducer running");
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Action is not valid");
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <>
      <div style={{ padding: "10px 30px" }}>
        <h1>{count}</h1>
        <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
        <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
