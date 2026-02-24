import Termek from "./Termek";
import { useState,useEffect } from "react";

function Termekek() {
    const [termekek,setTermekek]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8000/termekek")
        .then(res=>res.json())
        .then(termekek=>setTermekek(termekek))
        .catch(err=>alert(err))
    },[]);
  return (
    <div>
        <h1 className="p-5 text-3xl font-bold text-indigo-500 text-center">A webshop termékei:</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center">  
            {
                termekek.map((termek)=>(<Termek key={termek.id} termek={termek} />))
            }
            </div>
        </div>
  )
}

export default Termekek