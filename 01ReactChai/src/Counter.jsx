import './App.css'
import './index.css'
import { useState } from 'react'

function Counter(){

    const [count,setCount] = useState(10);

    const addval = ()=>{
        setCount(count+1);
    }
    const subval = ()=>{
        if(count>0){
            setCount(count-1);
        }
    }

    return(
        <>
        <h1>Welcome to Club</h1>
        <h2>count value : {count} </h2>
        <button onClick={addval}>add value</button>
        <br /><br />
        <button onClick={subval}>sub value</button>
        </>
    )
}
export default Counter