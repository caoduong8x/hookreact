import React, { useState } from "react";
//console.log(React);
const gifts = ["Cpu i9", "Memory 32GB RBG", "SSD 1TB"];
const courses = [
  { id: 1, name: "HTML, CSS" },
  { id: 2, name: "JavaScript" },
  { id: 3, name: "React" },
];
function App() {
  const [gift, setGift] = useState();
  const [radioChecked, setRadioChecked] = useState();
  const [checkBoxChecked, setCheckBoxChecked] = useState([]);
  const handleLayThuong = () => {
    setGift(gifts[Math.floor(Math.random() * gifts.length)]);
  };
  const checkBoxChange = (id) => {
    setCheckBoxChecked((prev) => {
      const checked = checkBoxChecked.includes(id);
      if (checked) {
        return checkBoxChecked.filter((i) => i !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSubmit = () => {};
  return (
    <>
      <div className="App" style={{ textAlign: "center" }}>
        <h1>{gift || "Chưa có phần thưởng!"}</h1>
        <button onClick={handleLayThuong}>Lấy thưởng</button>
      </div>

      <br />
      <div style={{ textAlign: "center" }}>
        {courses.map((course) => (
          <div key={course.id}>
            <input
              type="radio"
              checked={radioChecked === course.id}
              onChange={() => setRadioChecked(course.id)}
            />
            {course.name}
          </div>
        ))}
        <button onClick={handleSubmit}>Register</button>
      </div>

      <br />
      <div style={{ textAlign: "center" }}>
        {courses.map((course) => (
          <div key={course.id}>
            <input
              type="checkbox"
              checked={checkBoxChecked.includes(course.id)}
              onChange={() => checkBoxChange(course.id)}
            />
            {course.name}
          </div>
        ))}
        <button onClick={handleSubmit}>Register</button>
      </div>
    </>
  );
}

export default App;
