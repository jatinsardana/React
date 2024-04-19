import React, { useState } from "react";

function EffectTodo() {
  return <></>;
}

function Todo({ id }) {
  const [todos, setTodos] = useState({});
  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos?id=" + id).then(async function (res) {
    const json = await res.json();
    setTodos(json.todos);
  });
  }, [])
  
  
}

export default EffectTodo;
