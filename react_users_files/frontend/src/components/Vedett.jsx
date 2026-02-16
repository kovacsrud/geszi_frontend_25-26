import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Vedett() {
  const navigate=useNavigate();
  const[vedettInfo,setVedettInfo]=useState(null);
  const token=sessionStorage.getItem('usertoken');

  const getVedettAdat=()=>{
    fetch("http://localhost:8000/api/user/vedett",{
      method:"GET",
      headers:{
        "Content-type":"application/json",
        "Authorization":`Bearer ${token}`
        
      }
    })
    .then(res=>res.text())
    .then(adat=>{
      if(!adat.message){
        setVedettInfo(adat);
      } else {
        alert(adat.message);
        navigate('/login');
      }
    })
    .catch(err=>alert(err));
  }

  useEffect(()=>{
    getVedettAdat();
  },[])

  return (
    <div>
      <h1 className="text-3xl text-center font-bold text-sky-800 m-5">Védett info</h1>
      <h2 className="text-2xl text-center">{vedettInfo}</h2>
    </div>
  )
}

export default Vedett