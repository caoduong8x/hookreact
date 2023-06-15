//callback luôn được gọi sau khi component mounted
//cleanup function luôn được gọi trước khi component unmounted
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
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      setShowGoToTop(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScroll);

    //cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    //cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
      <h1>Width: {width}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
      {showGoToTop && (
        <button
          style={{ position: "fixed", right: 20, bottom: 20 }}
          onClick={() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}>
          Go to top
        </button>
      )}
    </>
  );
}
export default Content;
