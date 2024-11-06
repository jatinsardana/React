import React, { useEffect, useState } from 'react'
import Userapi from './Userapi.jsx'

function Userdisplay() {

    const [state, setState] = useState(null);

    const fetchData = () => {
        Userapi().then((value)=>{
            console.log(value.results);
            setState(value.results)
        })
    }

    useEffect(()=>{
        fetchData();
    },[])

    const handleClick = () =>{
        fetchData();
    }

  return (
    <>

    { state && state.map((e) => (
        <>
        <h1> {e.name.title} {e.name.first} {e.name.last}</h1>
        <h1>{e.email}</h1>
        <h1>{e.location.city} , {e.location.state} , {e.location.coordinates.latitude}</h1>
        <h1>{e.phone}</h1>
        <h1>{e.nat}</h1>
        <button onClick={handleClick} > REFRESH </button>
        </>
    )) }

    </>
  )
}

export default Userdisplay
