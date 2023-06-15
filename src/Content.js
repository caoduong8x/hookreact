//useEffect()
//1. Cập nhật lại state
//2. Cập nhật DOM (mutated)
//3. Render lại UI
//4. Gọi cleanup function nếu deps thay đổi
//5. Gọi lại useEffect callback
//-------------------------------------------------
//useLayoutEffect()
//1. Cập nhật lại state
//2. Cập nhật DOM (mutated)
//3. Gọi cleanup function nếu deps thay đổi (sync)
//4. Gọi lại useLayoutEffect callback (synsc)
//5. Render lại UI
import React, { useState, useEffect, useLayoutEffect } from "react";

function Content() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   if (count > 3) setCount(0);
  // }, [count]);

  useLayoutEffect(() => {
    if (count > 3) setCount(0);
  }, [count]);

  const handleRun = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleRun}>Run</button>
    </div>
  );
}
export default Content;
