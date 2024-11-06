import {useEffect, useState} from 'react'
import api from './Api.jsx';

function ApiCalling () {

  const [data , setData] = useState(null);
  const [data1 , setData2] = useState(null);

  useEffect(()=>{
    api().then((value)=>{
      console.log(value);
      setData(value)
    })
  } , [] )

  setTimeout(()=>{
    setData2("jatin the JOD")
  }, 3000)

  return (
    <>
    <h1>{data1}</h1>
    {data ? data.map((e)=> (
      <h3>{e.title}</h3>
    )) : <>NO DATA</> }
  </>
  )
}

export default ApiCalling;

