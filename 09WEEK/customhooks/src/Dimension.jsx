import React from 'react'

import { useEffect, useState } from 'react'

function onWidth(){
  const [widthi , setWidth] = useState({width : 0 , height : 0});

  const dimension = (e)=>{
    setWidth({
      width : e.clientX,
      height : e.clientY
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove' , dimension)
    return()=>{
      window.removeEventListener('mousemove' , dimension)
    }
  }, [])

  return widthi;
}

function Dimension() {

  const set = onWidth();

  return (
    <>
    <center>
      <p>{set.height}.x</p>
      <p>{set.width}.y</p>
    <button className=' flex justify-center text-center items-center border border-black'>Click me</button>
    </center>
    </>
  )
}

export default Dimension
