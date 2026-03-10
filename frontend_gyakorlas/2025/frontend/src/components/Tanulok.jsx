import TanuloCard from "./TanuloCard";
import { useState,useEffect } from "react";


function Tanulok() {
  const [tanulok,setTanulok]=useState([]);
  
  const getTanulok=()=>{
    fetch(`${import.meta.env.VITE_BASE_URL}/tanulok`)
    .then(res=>res.json())
    .then(adat=>setTanulok(adat))
    .catch(err=>alert(err));
  }

  useEffect(()=>{
    getTanulok();
  },[])

  return (
    <div>
      <h1 className="text-3xl text-center font-bold text-green-800 m-5">Tanulók</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
        {
          tanulok.map((tanulo)=>(<TanuloCard key={tanulo.oktazon} tanulo={tanulo} /> ))
        }
      </div>
    </div>
  )
}

export default Tanulok