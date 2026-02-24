import JaratCard from "./JaratCard";
import { useState,useEffect } from "react";

function Jaratok() {
  const[jaratok,setJaratok]=useState([]);

  const getJaratok=()=>{
    fetch("http://localhost:8000/jaratok")
    .then(res=>res.json())
    .then(adatok=>setJaratok(adatok))
    .catch(err=>alert(err))

  }

  useEffect(()=>{
    getJaratok();
  },[]);

  return (
    <div className=" bg-red-100">
        <h1 className="text-2xl text-red-800 text-center">Jelenlegi járatok</h1>
        <div className="flex flex-row flex-wrap items-center justify-center">
        {
          jaratok.map((jarat)=>(<JaratCard key={jarat.id} jarat={jarat}  />))          
        }
        </div>
    </div>
  )
}

export default Jaratok