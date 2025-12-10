import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import KutyaContext from "../../context/KutyaContext";

function Kutyanev({ kutyanev }) {
  const navigate=useNavigate();
  const {backendMuvelet}=useContext(KutyaContext);

  const modosit=()=>{
    navigate('/kutyanevform',{state:{kutyanev}})    
  }
  const torol=()=>{
    const url="http://localhost:8000/kutyanevek";
    backendMuvelet(kutyanev,'DELETE',url);
  }


  return (
    <div className="m-5 card card-border bg-lime-400 w-96">
      <div className="card-body">
        <h2 className="card-title">{kutyanev.kutyanev}</h2>
        <p>
         Id:{kutyanev.Id}
        </p>
        <div className="card-actions justify-end">
         <button onClick={()=>modosit()} className="btn btn-primary">Módosítás</button>
         <button onClick={()=>torol()} className="btn btn-primary">Törlés</button>
        </div>
      </div>
    </div>
  );
}

export default Kutyanev;
