import { useState,useEffect } from "react";
import Vevo from "../components/Vevo";


function Vevok() {

  const [vevok,setVevok]=useState([]);

  const getVevok=()=>{
    fetch("http://localhost:8000/vevok")
    .then(res=>res.json())
    .then(vevok=>setVevok(vevok))
    .catch(err=>alert(err));
  }

  useEffect(()=>{
    getVevok();
  },[])

  return (
    <div>
      <h1 className="p-5 text-3xl font-bold text-indigo-500 text-center">A webshop eddigi vevői:</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
        {
          vevok.map((vevo,i)=>(<Vevo key={i} vevo={vevo} />))
        }

      </div>
    </div>
  )
}

export default Vevok