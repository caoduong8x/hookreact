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

function Content() {
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar);
    };
  }, [avatar]);
  const handlePreview = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setAvatar(url);
  };
  return (
    <>
      <input type="file" onChange={handlePreview} />
      <img src={avatar} alt="" width="80%" />
    </>
  );
}
export default Content;
