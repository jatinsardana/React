import React, { useEffect } from "react";
import { useState } from "react";

function Countersum() {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    let finalsum = 0;
    for(let i = 1;i<=sum;i++){
      finalsum+=i;
    }
    setUpdate(finalsum);
  }, [sum])
  

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleSum = () => {};

  return (
    <>
      <div className="border text-black font-semibold border-black p-2 m-2">
        <input
          className=" text-black border border-black mx-2"
          type="text"
          placeholder="enter the value"
          onChange={function (e) {
            setSum(e.target.value);
          }}
        />
        <button
          className="border border-black text-white bg-black"
          onClick={handleClick}
        >
          CLick me!
        </button>
        <div>count is {count}</div>
        <div>sum is {update}</div>
      </div>
    </>
  );
}

export default Countersum;
