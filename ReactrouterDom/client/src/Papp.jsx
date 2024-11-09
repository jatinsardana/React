import React from "react";
import "./index.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Router,
  Route,
  useNavigate,
  NavLink,
  useParams,
} from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
  
    return (
      <>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <br />
        <button onClick={()=> navigate('/posts')} className="rounded-3xl bg-black text-white h-8">Click to Post</button>
      </>
    );
  };
  
  const Posts = () =>{
  
    const [data , setData] = useState([])
  
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
      
    } , [])
    
  
    return (
      <>
      {
        data && data.map((e)=> <NavLink to={`/posts/${e.id}`} > -- {e.title} </NavLink> )
      }
      </>
    )
  }
  
  const OnePost = () =>{
    const params = useParams();
    console.log(params);
    
    const [data1 , setData1] = useState([]);
  
    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => res.json())
      .then((data) => setData1(data));
    } , [])
    
    
    return (
      <>
        <h1>Your post {params.id} </h1>
        {
          data1 && <>
          <h1 className=" text-3xl bg-red-100"> {data1.title} </h1> 
          <h3 className=" text-2xl bg-green-200"> {data1.body }</h3>
          </>
        }
      </>
    )
  }

function Papp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<OnePost />} />
      </Routes>
    </>
  );
}

export default Papp;
