import React from "react";
import { useState } from "react";
let count = 4;

function Todo() {
  const [todo, setTodo] = useState([
    {
      tittle: "Gym",
      desc: "go to gym",
      id: 2,
    },
    {
      tittle: "food",
      desc: "eat your food",
      id: 1,
    },
    {
      tittle: "sleep",
      desc: "take your sleep",
      id: 3,
    },
  ]);

  const handleCLick = () => {
    setTodo([
      ...todo,
      {
        tittle: Math.random(),
        desc: Math.random(),
        id: count++,
      },
    ]);
  };

  return (
    <>
      <center>
        {todo.map(function (todos) {
          return (
            <div className="flex gap-2">
              <h1>{todos.tittle}</h1>
              <h1>{todos.desc}</h1>
              <h1>{todos.id}</h1>
              <br />
            </div>
          );
        })}

        <button onClick={handleCLick}>Click me!</button>
      </center>
    </>
  );
}

function list({ tittle, desc }) {
  return;
  <div>
    <h1>{tittle}</h1>
    <h1>{desc}</h1>
  </div>;
}

export default Todo;
