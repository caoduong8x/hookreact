//Lưu các giá trị qua 1 tham chiếu bên ngoài function component
import React, { useState, useRef, useEffect } from "react";

function Content() {
  const [count, setCount] = useState(60);
  const timerId = useRef();
  const prevCount = useRef();
  useEffect(() => {
    prevCount.current = count;
  }, [count]);
  const handleStart = () => {
    timerId.current = setInterval(() => setCount((prev) => prev - 1), 1000);
  };
  const handleStop = () => {
    clearInterval(timerId.current);
  };
  console.log(count, prevCount.current);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
export default Content;
