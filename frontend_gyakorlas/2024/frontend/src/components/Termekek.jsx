import Termek from "./Termek"
import { useState,useEffect } from "react"

function Termekek() {
    const[termekek,setTermekek]=useState([]);

    const getTermekek=()=>{
        fetch('http://localhost:8000/termekek')
        .then(res=>res.json())
        .then(adatok=>setTermekek(adatok))
        .catch(err=>alert(err));
    }

    useEffect(()=>{
        getTermekek();
    },[])


  return (
    <div>
        <h1 className="text-3xl text-center text-indigo-800 font-bold m-5">A webshop termékei</h1>
        <div className="flex flex-row flex-wrap items-center justify-center">
        {
            termekek.map((termek)=>(<Termek key={termek.id} termek={termek}  />))
        }
        </div>
    </div>
  )
}

export default Termekek