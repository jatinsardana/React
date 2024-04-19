import React from "react";

function Createtodo() {
  return (
    <>
      <input type="text" placeholder="Tittle" className=" p-2 m-2 border border-black h-10 bg-green-200 text-black font-medium text-xl rounded-full" /> <br />
      <input type="text" placeholder="description" className=" p-2 m-2 border border-black h-10 bg-green-200 text-black font-medium text-xl rounded-full" /> <br />
      <button className="border border-black p-2 m-2 h-10 bg-black text-white rounded-full hover:bg-red-400 hover:text-black">Click to Add!</button>
    </>
  );
}

export default Createtodo;
