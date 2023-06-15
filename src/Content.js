//callback luôn được gọi sau khi component mounted
//cleanup function luôn được gọi trước khi component unmounted
//cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)
//1.useEffect(callback);
//  - Gọi sau mỗi khi component re-render
//2.useEffect(callback,[]);
//  - Chỉ gọi callback 1 lần sau khi component mounted
//3.useEffect(callback,[deps]);
//  - Callback chỉ được gọi lại mỗi khi deps thay đổi
//Chức năng useEffect
//1. Update DOM
//2. Call API
//-------------------------------------------------

import React, { useState, useEffect } from "react";
const lessons = [
  {
    id: 1,
    name: "React",
  },
  {
    id: 2,
    name: "React Hooks",
  },
  {
    id: 3,
    name: "React Component",
  },
];

function Content() {
  const [lessonID, setLessonID] = useState(1);
  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };
    window.addEventListener(`lesson-${lessonID}`, handleComment);
    return () => {
      window.removeEventListener(`lesson-${lessonID}`, handleComment);
    };
  }, [lessonID]);

  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={
              lessonID === lesson.id ? { color: "red" } : { color: "#333" }
            }
            // style={{ color: lessonID === lesson.id ? "red" : "#333" }}
            onClick={() => setLessonID(lesson.id)}>
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Content;
