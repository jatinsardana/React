import React from "react";

function Todo() {
  return (
    <>
    <div className=' bg-white h-screen w-full'>

      <center>
        <div className="text-3xl font-extrabold p-9">TODO APP</div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4 ">
            <input type="text" placeholder="Enter your TODO..." className="placeholder:bg-stone-700   h-9 placeholder:text-center placeholder:text-orange-400" />
          </div>
          <div className="col-start-1 col-end-3 ...">
            <input type="date" />
          </div>
          <div className="col-end-7 col-span-2 ...">
          <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add</button>
          </div>
        </div>
      </center>
    </div>
    </>
  );
}

export default Todo;
