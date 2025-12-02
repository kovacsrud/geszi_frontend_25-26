import {useState} from "react";
import { useNavigate } from "react-router-dom";

function UjTanulo() {
    const navigate=useNavigate();
    const [vezeteknev,setVezeteknev]=useState("");
    const [keresztnev,setKeresztnev]=useState("");
    const [magassag,setMagassag]=useState("");
    const [email,setEmail]=useState("");

    const adatkuldes=(adat,method,url)=>{
        fetch(url,{
            method:method,
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(adat)
        })
        .then(res=>res.text())
        .then(valasz=>{alert(valasz);navigate('/')})
        .catch(err=>alert(err));

    }

    const onSubmit=(e)=>{
        e.preventDefault();
        adatkuldes(
            {vezeteknev,keresztnev,magassag,email},
            "POST",
            `${import.meta.env.VITE_BASE_URL}/tanulok`
        );
    }


  return (
    <div>
        <h2 className="text-3xl font-bold text-center text-emerald-800">Új tanuló felvitele</h2>
        <form onSubmit={onSubmit} className="m-5 flex flex-col items-center justify-center bg-emerald-100">
            <input type="text" required value={vezeteknev} onChange={(e)=>setVezeteknev(e.target.value)} placeholder="Vezetéknév" className="m-3 input" />
            <input type="text" required value={keresztnev} onChange={(e)=>setKeresztnev(e.target.value)} placeholder="Keresztnév" className="m-3 input" />
            <input type="text" required value={magassag} onChange={(e)=>setMagassag(e.target.value)} placeholder="Magasság" className="m-3 input" />
            <input type="text" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="m-3 input" />
            <button type="submit" className="btn btn-primary">Küldés</button>

        </form>
    </div>
  )
}

export default UjTanulo