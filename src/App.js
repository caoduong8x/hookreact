import React, { useState } from "react";
//console.log(React);

const orders = [100, 200, 300];

function App() {
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, i) => total + i);
    return total;
  });
  const [info, setInfo] = useState({ name: "abc", age: "25" });
  const handleClick = () => {
    setCounter((a) => a + 1);
    setCounter((a) => a + 1);
    // setCounter(counter + 1);
  };
  const handleAddInfo = () => {
    setInfo((pre) => ({ ...pre, bio: "Love pink" }));
    // setInfo({ ...info, bio: "Love pink" });
  };
  return (
    <div className="App" style={{ padding: 10 }}>
      <h1>{counter}</h1>
      <button onClick={handleClick}>Increase</button>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleAddInfo}>Add Proper</button>
    </div>
  );
}

export default App;
