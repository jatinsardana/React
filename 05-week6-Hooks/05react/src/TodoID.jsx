import React from "react";
import { useState, useEffect } from "react";

function TodoID() {
  const [clicker, setCLicker] = useState(1);

  return (
    <>
      <div className=" p-2 m-2 border border-black w-min flex gap-4">
        <button onClick={() => setCLicker(1)}>1</button>
        <button onClick={() => setCLicker(2)}>2</button>
        <button onClick={() => setCLicker(3)}>3</button>
        <button onClick={() => setCLicker(4)}>4</button>
      </div>
      <Todo id={clicker} />
    </>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id).then(async function (
      res
    ) {
      const jsn = await res.json();
      setTodo(jsn.todo);
    });
  }, [id]);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </div>
  );
}

export default TodoID;
