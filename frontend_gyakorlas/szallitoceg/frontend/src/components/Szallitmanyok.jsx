import '../styles/Szallitmanyok.css';
import { useState,useEffect } from 'react';
import Szallitmany from './Szallitmany';

function Szallitmanyok() {
  const[szallitmanyok,setSzallitmanyok]=useState([]);

  const getSzallitmanyok=()=>{
    fetch('http://localhost:8000/szallitmanyok')
    .then(res=>res.json())
    .then(adat=>setSzallitmanyok(adat))
    .catch(err=>alert(err));
  }

  useEffect(()=>{
    getSzallitmanyok()
  },[])


  return (
    <div className="cards-container">
      {
        szallitmanyok.map((szallitmany)=>(<Szallitmany key={szallitmany.id} szallitmany={szallitmany} />))
      }
    </div>
  )
}

export default Szallitmanyok