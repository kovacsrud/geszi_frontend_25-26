import { useNavigate } from "react-router-dom";

function Vevo({vevo}) {

  const navigate=useNavigate();

  const torles=(id)=>{
    fetch(`http://localhost:8000/vevok/${id}`,{
      method:"DELETE",
      headers:{"Content-type":"application/json"}
    })
    .then(res=>res.json())
    .then(valasz=>{alert(valasz.message);navigate("/")})
    .catch(err=>alert(err));
  }


  return (
    <div className="flex justify-center my-5">
  <div
    className="block w-96 max-w-[18rem] rounded-lg border border-primary bg-white shadow-secondary-1 dark:bg-surface-dark">
    <div
      className="border-b-2 border-neutral-100 px-6 py-3 text-surface dark:border-white/10 dark:text-white">
      
    </div>
    <div className="p-6">
      <h5 className="mb-2 text-xl font-medium leading-tight text-primary">
       {vevo.nev}
      </h5>
      <p className="text-base text-primary ">
        Irányítószám:{vevo.iranyitoszam}
      </p>
      <p className="text-base text-primary ">
       {vevo.telepules}
      </p>
      <p className="text-base text-primary ">
        {vevo.utcahazszam}
      </p>
    </div>
    <button onClick={()=>torles(vevo.id)} className="btn btn-primary">Törlés</button>
  </div>
</div>
  )
}

export default Vevo