import React from 'react'
import Counter from './Counter'
import { useContext } from 'react'
import { counterContext } from './Context'

function Appcontext() {

    const counterState = useContext(counterContext);
    
  return (
    <>
      <h1>Context API By {counterState.name} </h1>
      <h1>Count is {counterState.count} </h1>
      <Counter />
    </>
  )
}

export default Appcontext
