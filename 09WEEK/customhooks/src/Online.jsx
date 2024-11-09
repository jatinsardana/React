import React, { useEffect } from "react";
import { useState } from "react";

function isOnline(){
  const [online , setOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener("online" , ()=>{
      setOnline(true)
    })  
    window.addEventListener("offline" , ()=>{
      setOnline(true)
    })  
  }, [])

  return online;  
}

function App() {

  const Online = isOnline();

  if(Online){
    return "you're online"
  }

  return (
    <>
    you're offline
    </>
  )
}

export default App;
