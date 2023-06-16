//useMemo dùng để tránh lặp lại code không cần thiết nhiều lần
import React, { useCallback, useMemo, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Content from "./Content";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef();
  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };
  const total = useMemo(() => {
    const result = products.reduce((total, product) => {
      console.log("tinh toan lai");
      return total + product.price;
    }, 0);
    return result;
  }, [products]);
  return (
    <>
      <div style={{ padding: "10px 30px" }}>
        <input
          value={name}
          ref={nameRef}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          value={price}
          placeholder="Enter price"
          onChange={(e) => setPrice(e.target.value)}
        />{" "}
        <br />
        <button onClick={handleSubmit}>Add</button>
        <br />
        Total: {total}
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - {product.price}
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
