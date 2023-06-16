//memo:khi component cha re-render nếu prop của content thay đổi thì re-render content,
//nếu prop comtent không thay đổi thì ko re - render content
//truyền prop Count từ cha vao con
import React, { useState, useRef, useEffect, memo } from "react";

function Content({ onIncrease }) {
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
  console.log("re-render");
  //console.log(count, prevCount.current);
  return (
    <div>
      <h1>{count}</h1>

      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={onIncrease}>Increase</button>
    </div>
  );
}
export default memo(Content);
