import React from 'react'

function Todos({todos}) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div>
            <h1 className=' text-xl font-semibold px-1 mx-1 text-pretty cursor-text text-blue-800'>{todo.tittle}</h1>
            <h2 className=' text-xl font-semibold px-1 mx-1 text-pretty cursor-text text-blue-800'>{todo.description}</h2>
            <button className=' text-xl font-semibold px-1 mx-1 text-pretty cursor-text text-black rounded-full border border-black my-2 bg-violet-300'>{todo.complete==true?"completed" : "mark as complete"}</button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos
