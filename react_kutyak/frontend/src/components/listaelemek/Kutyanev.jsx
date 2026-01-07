import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import KutyaContext from "../../context/KutyaContext";
import Modal from "../modal/Modal";

function Kutyanev({ kutyanev }) {
  const navigate=useNavigate();
  const {backendMuvelet}=useContext(KutyaContext);
  const[isDelete,setIsDelete]=useState(false);
  const[isModify,setIsModify]=useState(false);

  const openDelete=()=>{
    setIsDelete(true);
  }

  const closeDelete=()=>{
    setIsDelete(false);
  }

  const openModify=()=>{
    setIsModify(true);
  }

  const closeModify=()=>{
    setIsModify(false);
  }

  const modosit=()=>{
    navigate('/kutyanevform',{state:{kutyanev}})    
  }
  const torol=()=>{
    const url="http://localhost:8000/kutyanevek";
    backendMuvelet(kutyanev,'DELETE',url);
  }


  return (
    <div className="m-5 card card-border bg-lime-400 w-96">
      {
        isModify && (<Modal title="Módosítás" body="Biztosan módosítja?" commitFunction={()=>modosit()} closeFunction={()=>closeModify()}/>)
      }
      {
        isDelete && (<Modal title="Törlés" body="Biztosan törli?" commitFunction={()=>torol()} closeFunction={()=>closeDelete()}/>)
      }
      <div className="card-body">
        <h2 className="card-title">{kutyanev.kutyanev}</h2>
        <p>
         Id:{kutyanev.Id}
        </p>
        <div className="card-actions justify-end">
         <button onClick={()=>openModify()} className="btn btn-primary">Módosítás</button>
         <button onClick={()=>openDelete()} className="btn btn-primary">Törlés</button>
        </div>
      </div>
    </div>
  );
}

export default Kutyanev;
