//callback luôn được gọi sau khi component mounted
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
const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];

function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");

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

  useEffect(() => {
    // document.title = title;
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((r) => r.json())
      .then((p) => {
        setPosts(p);
      });
  }, [type]);
  return (
    <>
      {tabs.map((tab) => (
        <button
          key={tab}
          stype={type === tab ? { color: "#fff", background: "#333" } : {}}
          onClick={() => {
            setType(tab);
          }}>
          {tab}
        </button>
      ))}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </>
  );
}
export default Content;
