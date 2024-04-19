import React from "react";
import { useState, useEffect } from "react";

function Practice() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
      const jm = await res.json();
      setTodos(jm.todos);
    });
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <List
          key={todo.id}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </>
  );
}

function List({ title, description}) {
  return (
    <div className="font-bold text-3xl border border-black p-2 m-2">
      <h1 className=" font-bold">{title}</h1>
      <h2 className="bg-green-500 text-blue-900">{description}</h2>
    </div>
  );
}

export default Practice;
