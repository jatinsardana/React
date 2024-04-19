import React, { Children, memo } from 'react'
import { useState } from 'react'

function Childrender() {

  const [count , setCount] = useState(0)

  const handleClick = ()=>{
    setCount(count+1)
  }

  const Childfunc =memo(()=>{
    console.log("child render");
    return (
      <button className=' p-2'>hey</button>
    )
  })

  return (
    <div>
      <Childfunc/>
      <button onClick={handleClick}>click me</button>
      <h1>count is {count}</h1>
    </div>
  )
}


export default Childrender
