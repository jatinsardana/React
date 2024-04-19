import React from "react";
import { useState } from "react";

function Self2() {
  const [todos, setTodos] = useState([]);

  function addTodo() {
    const newTodo = [];
    newTodo.push(...todos,{
      tittle : "jatin",
      desc : "sardana"
    })
    setTodos(newTodo)
  }

  return (
    <>
      <center>
        <button onClick={addTodo}>Click me!</button>
        {todos.map(function (todo) {
          return <AddTit tittle={todo.tittle} desc={todo.desc} />;
        })}
      </center>
    </>
  );
}

function AddTit(props) {
  return (
    <div>
      <h1>{props.tittle}</h1>
      <h1>{props.desc}</h1>
    </div>
  );
}

export default Self2;
