import { useState } from "react";
import {useNavigate} from "react-router-dom";

function UjTermek() {
    const navigate=useNavigate();
    const [megnevezes,setMegnevezes]=useState("");
    const [ar,setAr]=useState("");

    const kuldes=()=>{
        fetch("http://localhost:8000/termekek",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({megnevezes,ar})
        })
        .then(res=>res.json())
        .then(valasz=>{alert(valasz.message);navigate("/")})
        .catch(err=>alert(err));

    }
    const onSubmit=(e)=>{
        e.preventDefault();
        kuldes();

    }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow" />
      <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        Új termék felvitele
      </h2>

    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form method="POST" onSubmit={onSubmit}>
          <div>
            <label for="megnevezes" className="block text-sm font-medium leading-5  text-gray-700">Megnevezés</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input id="megnevezes" name="megnevezes" type="text" value={megnevezes} onChange={(e)=>setMegnevezes(e.target.value)}   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />                
            </div>
          </div>
        

          <div className="mt-6">
            <label for="ar" className="block text-sm font-medium leading-5  text-gray-700">
              Ár
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input id="ar" name="ar"  type="text" value={ar} onChange={(e)=>setAr(e.target.value)}   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
              
            </div>
          </div>                   

          <div className="mt-6">
            <span className="block w-full rounded-md shadow-sm">
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                Küldés
              </button>
            </span>
          </div>
          
        </form>

      </div>
    </div>
  </div>
  )
}

export default UjTermek