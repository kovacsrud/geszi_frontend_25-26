import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TanuloForm() {
  const navigate = useNavigate();
  const [oktazon,setOktazon]=useState("");
  const [nev,setNev]=useState("");
  const [hozottpontszam,setHozottPontszam]=useState("");
  const [kozpontiMagyar,setKozpontiMagyar]=useState("");
  const [kozpontiMatek,setKozpontiMatek]=useState("");

  const adatkuldes=(adat)=>{
    fetch(`${import.meta.env.VITE_BASE_URL}/tanulo`,{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(adat)
    })
    .then(res=>res.json())
    .then(valasz=>{
      alert(valasz.message);
      navigate("/");
    })
    .catch(err=>alert(err));

  }

  const onSubmit=(e)=>{
    e.preventDefault();
    adatkuldes({
      "oktazon":oktazon,
      "nev":nev,
      "hozott":hozottpontszam,
      "kpmagy":kozpontiMagyar,
      "kpmat":kozpontiMatek});
  }


  return (

    <div>
      <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-2xl py-4 px-6 bg-green-600 text-white text-center font-bold uppercase">
          Új tanuló felvitele
        </div>
        <form className="py-4 px-6" onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="oktazon">
              Oktatási azonosító
            </label>
            <input value={oktazon} onChange={(e)=>setOktazon(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="oktazon" type="text" required placeholder="" />
            <label className="block text-gray-700 font-bold mb-2" htmlFor="nev">
              Név
            </label>
            <input value={nev} onChange={(e)=>setNev(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nev" type="text" required placeholder="" />
              <label className="block text-gray-700 font-bold mb-2" htmlFor="hozottpontszam">
              Hozott pontszám
            </label>
            <input value={hozottpontszam} onChange={(e)=>setHozottPontszam(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="hozottpontszam" type="text" required placeholder="" />
              <label className="block text-gray-700 font-bold mb-2" htmlFor="kozpontimagyar">
              Központi magyarból
            </label>
            <input value={kozpontiMagyar} onChange={(e)=>setKozpontiMagyar(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="kozpontimagyar" type="text" required placeholder="" />
              <label className="block text-gray-700 font-bold mb-2" htmlFor="kozpontimatek">
              Központi matekból
            </label>
            <input value={kozpontiMatek} onChange={(e)=>setKozpontiMatek(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="kozpontimatek" type="text" required placeholder="" />
          </div>

          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              type="submit">
              Küldés
            </button>
          </div>

        </form>
      </div>
    </div>

  )
}

export default TanuloForm