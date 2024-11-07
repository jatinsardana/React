import React, { useEffect, useState } from 'react'

function useInterval(fn , timeout){
  
  useEffect(() => {
    setInterval(() => {
      // fn()
    }, timeout);
  }, [])
  
}

function Count() {

  const[count , setCount] = useState(0);

  useInterval(() => {
    setCount(c => c+1)
  }, 1000);

  return (
    <div>
      timer is {count}
    </div>
  )
}

export default Count
