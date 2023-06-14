import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//console.log(React);

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const storeTodos = JSON.parse(localStorage.getItem("todos"));
    return storeTodos ?? [];
  });
  const handleSubmit = () => {
    if (todo === "") {
      toast.warn("Please enter a todo", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    setTodos((prev) => {
      const newTodos = [...prev, todo];
      const jsonTodos = JSON.stringify(newTodos);
      localStorage.setItem("todos", jsonTodos);

      return newTodos;
    });
    setTodo("");
  };
  return (
    <>
      <div className="App" style={{ alignContent: "center" }}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
