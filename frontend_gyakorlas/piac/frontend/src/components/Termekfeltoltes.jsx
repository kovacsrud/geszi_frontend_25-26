import { useState } from "react";
import '../styles/Termekfeltoltes.css';

function Termekfeltoltes() {
  const[termeknev,setTermeknev]=useState("");
  const[termekleiras,setTermekleiras]=useState("");
  const[termekar,setTermekar]=useState("");
  const[eladoneve,setEladoneve]=useState("");
  const[email,setEmail]=useState("");
  const[telefon,setTelefon]=useState("");

  const adatkuldes=(adat)=>{
    fetch('http://localhost:8000/termekek',{
      method:'POST',
      headers:{ "Content-Type":"application/json"},
      body:JSON.stringify(adat)
    })
    .then(res=>res.text())
    .then(valasz=>alert(valasz))
    .catch(err=>alert(err));

  }
  const onSubmit=(e)=>{
    e.preventDefault();
    adatkuldes({
      "termekNev":termeknev,
      "leiras":termekleiras,
      "ar":termekar,
      "elado":eladoneve,
      "email":email,
      "telefonszam":telefon
    });
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
            <label>Termék neve:</label>
            <input type='text' value={termeknev} onChange={(e)=>setTermeknev(e.target.value)} required/>
            <label>Termék leírása:</label>
            <input type='text' value={termekleiras} onChange={(e)=>setTermekleiras(e.target.value)} required/>
            <label>Termék ára:</label>
            <input type='number' value={termekar} onChange={(e)=>setTermekar(e.target.value)} required/>
            <label>Eladó neve:</label>
            <input type='text' value={eladoneve} onChange={(e)=>setEladoneve(e.target.value)} required/>
            <label>Email cím:</label>
            <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <label>Telefonszám:</label>
            <input type='tel' value={telefon} onChange={(e)=>setTelefon(e.target.value)} required/>
            <button type='submit'>Termék feltöltése</button>
        </div>
    </form>
    </div>
  )
}

export default Termekfeltoltes