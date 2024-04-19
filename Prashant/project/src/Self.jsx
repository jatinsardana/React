import React from "react";
import { useState } from "react";

function Self() {
  const [todo, setTodo] = useState([]);

  function addTodo() {
    let newTo = [];
    for (let i = 0; i < todo.length; i++) {
      newTo.push(todo[i]);
    }
    newTo.push({
      tittle: "jatin",
      description: "my name is jatin",
    });
    setTodo(newTo);
  }

  return (
    <>
      <center>
        <button onClick={addTodo}>Button</button>
        {todo.map(function (todo) {
          return <Todo tittle={todo.tittle} description={todo.description} />;
        })}
      </center>
    </>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.tittle}</h1>
      <h1>{props.description}</h1>
    </div>
  );
}

export default Self;
