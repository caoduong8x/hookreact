// useState
//1. init state
//2. action: up/down
//----------------------------------------------------------------
// useReduce
//1. init state
//2. action: up/down
//3. reducer
//4. dispatch
import React, { useReducer, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Content from "./Content";

//1. init state
const initState = {
  job: "",
  jobs: [],
};
//2. action
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const REMOVE_JOB = "remove_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const removeJob = (payload) => {
  return {
    type: REMOVE_JOB,
    payload,
  };
};
//3. reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return { ...state, job: action.payload };
    case ADD_JOB:
      return { ...state, jobs: [...state.jobs, action.payload] };
    case REMOVE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return { ...state, jobs: newJobs };
    default:
      throw new Error("Invalid action");
  }
};
//4. dispatch

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const inputRef = useRef();
  return (
    <>
      <div style={{ padding: "10px 10px" }}>
        <input
          type="text"
          placeholder="Enter todo here"
          value={job}
          ref={inputRef}
          onChange={(e) => dispatch(setJob(e.target.value))}
        />
        <button
          onClick={() => {
            dispatch(addJob(job));
            dispatch(setJob(""));
            inputRef.current.focus();
          }}>
          Add
        </button>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              {job}{" "}
              <span onClick={() => dispatch(removeJob(index))}>&times;</span>
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
