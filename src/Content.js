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

function Content() {
  const [countDown, setCountDown] = useState(180);
  useEffect(() => {
    const timerID = setInterval(() => setCountDown((pre) => pre - 1), 1000);
    return () => clearInterval(timerID);
  }, []);

  // hoac dung
  // useEffect(() => {
  //   const timerID = setTimeout(() => setCountDown(countDown - 1), 1000);
  //   return () => clearTimeout(timerID);
  // }, [countDown]);

  return <h1>{countDown}</h1>;
}
export default Content;
