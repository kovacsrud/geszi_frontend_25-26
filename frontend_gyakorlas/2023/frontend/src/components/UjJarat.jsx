import { useState } from "react"
import { useNavigate } from "react-router-dom"

function UjJarat() {
    const navigate=useNavigate();

    const[id,setId]=useState("");
    const[jaratSzam,setJaratSzam]=useState("");
    const[jaratTipus,setJaratTipus]=useState("");
    const[elsoAjtos,setElsoAjtos]=useState("");


  return (
   <div className='bg-red-100 h-screen'>
    <h1 className="text-2xl text-center p-2 bg-red-100 text-red-800">Új járat</h1>
    <form >
      <div className='flex flex-col items-center p-5'>
        <label>Adja meg az Id-t</label>
        <input type='text'  className='input input-bordered m-2'  value={id} onChange={(e)=>{setId(e.target.value)}} />
        <label>Adja meg a járatszámot:</label>
        <input type='text'  className='input input-bordered m-2'  value={jaratSzam} onChange={(e)=>setJaratSzam(e.target.value)} />
        <label>A járat típusa:</label>
        <select className='select select-bordered w-60' value={jaratTipus} onChange={(e)=>setJaratTipus(e.target.value)}>
          
          <option value="M">Metró</option>
          <option value="T" selected>Troli</option>
          <option></option>
        </select>
        <label>Elsőajtós felszállás:</label>
        <select className='select select-bordered w-60' value={elsoAjtos} onChange={(e)=>setElsoAjtos(e.target.value)}>
          <option value="1" selected>Igen</option>
          <option value="0">Nem</option>
        </select>          
      

      <button type='submit' className='btn btn-secondary my-5'>Küldés</button>
      </div>
    </form>
  </div>
  )
}

export default UjJarat