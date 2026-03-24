import { useState,useEffect } from "react";
import Termek from "./Termek";
import '../styles/Termekek.css';

function Termekek() {
  const[termekek,setTermekek]=useState([]);

  const getTermekek=()=>{
    fetch('http://localhost:8000/termekek')
    .then(res=>res.json())
    .then(adat=>setTermekek(adat))
    .catch(err=>alert(err));
  }

  useEffect(()=>{
    getTermekek();
  },[])

  return (
    <div className="cards-container">
      {
        termekek.map((termek)=>(<Termek key={termek.id} termek={termek} />))
      }
    </div>
  )
}

export default Termekek