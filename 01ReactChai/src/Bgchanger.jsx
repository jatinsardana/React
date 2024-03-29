import React from 'react'
import { useState } from 'react'

function Bgchanger() {
    const [Color,setColor] = useState("white");

  return (
    <>
    <div className='w-full h-screen' style={{backgroundColor:Color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 px-3 m-1 bg-red-700 rounded-3xl">
                <button className=" outline-none px-4 mx-3 " onClick={()=>setColor("red")}>red</button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 px-3 m-1 bg-green-500 rounded-3xl">
                <button className=" outline-none px-4 mx-3 " onClick={()=>setColor("green")}>green</button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 px-3 m-1 bg-orange-500 rounded-3xl">
                <button className=" outline-none px-4 mx-3 " onClick={()=>setColor("orange")}>orange</button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 px-3 m-1 bg-blue-500 rounded-3xl">
                <button className=" outline-none px-4 mx-3 " onClick={()=>setColor("blue")}>blue</button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 px-3 m-1 bg-yellow-300 rounded-3xl">
                <button className=" outline-none px-4 mx-3 " onClick={()=>setColor("yellow")}>yellow</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Bgchanger
