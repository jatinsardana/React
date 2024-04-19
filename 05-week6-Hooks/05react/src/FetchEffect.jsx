import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
      });
  }, []);

  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} tittle={todo.tittle} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ tittle, description }) {
  return (
    <div>
      <h1>{tittle}</h1>
      <h3>{description}</h3>
    </div>
  );
  
}

export default App;
