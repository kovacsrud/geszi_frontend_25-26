import {useState} from 'react';
import '../styles/UjSzallitmany.css';

//  "id": "#1",
//   "nev": "Példa Péter",
//   "email": "peter@peter.com",
//   "telefonszam": "06000000001",
//   "irszam": 3478,
//   "varos": "Lazacfalva",
//   "utca": "Bordó utca",
//   "hazszam": 34,
//   "megjegyzes": "Törékeny csomag!"


function UjSzallitmany() {
  const[id,setId]=useState("");
  const[nev,setNev]=useState("");
  const[email,setEmail]=useState("");
  const[telefonszam,setTelefonszam]=useState("");
  const[irszam,setIrszam]=useState("");
  const[varos,setVaros]=useState("");
  const[utca,setUtca]=useState("");
  const[hazszam,setHazszam]=useState("");
  const[megjegyzes,setMegjegyzes]=useState("");

  const adatkuldes=(adat)=>{
    fetch('http://localhost:8000/szallitmanyok',{
      method:'POST',
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(adat)
    })
    .then(res=>res.text())
    .then(valasz=>alert(valasz))
    .catch(err=>alert(err));

  }

  const onSubmit=(e)=>{
    e.preventDefault();
    adatkuldes({
      id,
      nev,
      email,
      telefonszam,
      irszam,
      varos,
      utca,
      hazszam,
      megjegyzes
    })
  }

  return (
   <div>
    <form onSubmit={onSubmit}>
        <div>
            <label>Adjon meg egy egyedi azonosítót:</label>
            <input type='text' value={id} onChange={(e)=>setId(e.target.value)} required/>
            <label>Adja meg nevét:</label>
            <input type='text' value={nev} onChange={(e)=>setNev(e.target.value)} required/>
            <label>Adja meg az email címét:</label>
            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <label>Adja meg a telefonszámát:</label>
            <input type='tel' value={telefonszam} onChange={(e)=>setTelefonszam(e.target.value)} required/>
            <label>Adjon meg a irányítószámot:</label>
            <input type='number' value={irszam} onChange={(e)=>setIrszam(e.target.value)} required/>
            <label>Adja meg a városát:</label>
            <input type='text' value={varos} onChange={(e)=>setVaros(e.target.value)} required/>
            <label>Adja meg a utcáját:</label>
            <input type='text' value={utca} onChange={(e)=>setUtca(e.target.value)} required/>
            <label>Adja meg a házszámát:</label>
            <input type='number' value={hazszam} onChange={(e)=>setHazszam(e.target.value)} required/>
            <label>Megjegyzés (Opcionális):</label>
            <input type='textarea' value={megjegyzes} onChange={(e)=>setMegjegyzes(e.target.value)}/>
            <button type='submit'>Szállítmány felvétele</button>
        </div>
    </form>
</div>
  )
}

export default UjSzallitmany