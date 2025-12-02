import Tanulo from "./Tanulo"
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
      <h1 className="text-3xl font-bold text-center text-emerald-800">Tanulóink:</h1>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {
          tanulok.map((tanulo)=>(<Tanulo key={tanulo.id} tanulo={tanulo} />))
        }
      </div>
    </div>
  )
}

export default Tanulok