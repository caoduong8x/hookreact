//callback luôn được gọi sau khi component mounted
//1.useEffect(callback);
//  - Gọi sau mỗi khi component re-render
//2.useEffect(callback,[]);
//  - Chỉ gọi callback 1 lần sau khi component mounted
//3.useEffect(callback,[deps]);
//Chức năng useEffect
//1. Update DOM
//2. Call API
//-------------------------------------------------

import React, { useState, useEffect } from "react";
function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    document.title = title;
  });
  useEffect(() => {
    // document.title = title;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((r) => r.json())
      .then((p) => {
        setPosts(p);
      });
  }, []);
  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
export default Content;
