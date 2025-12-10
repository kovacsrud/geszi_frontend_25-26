import { useContext,useState } from "react";
import KutyaContext from "../../context/KutyaContext";
import { useLocation,useNavigate } from "react-router-dom";

function KutyanevForm() {
  const {backendMuvelet}=useContext(KutyaContext);
  let cim="Új kutyanév felvitele";
  const navigate=useNavigate();
  const {state}=useLocation();
  let formObj={};
  let url="http://localhost:8000/kutyanevek";
  let method="POST";

  if(state!==null){
    //adatmódosítás
    const {kutyanev}=state;
    cim="Kutyanév módosítása";
    method="PUT",
    formObj={
      Id:kutyanev.Id,
      kutyanev:kutyanev.kutyanev
    }
  } else {
    //új adat felvitele
    formObj={
      kutyanev:""
    }
  }

  const[formData,setFormData]=useState(formObj);

  const writeData=(e)=>{
    setFormData((prevState=>({...prevState,[e.target.id]:e.target.value})));
  }

  const onSubmit=(e)=>{
    e.preventDefault();
    backendMuvelet(formData,method,url);
    navigate('/kutyanevek');
  }


  return (
    <div>
      <h1 className="m-10 text-3xl font-bold text-center text-lime-800">Kutyanevek:</h1>
      <form onSubmit={onSubmit} className="flex flex-col items-center justify-center">
        <input type="text" id="kutyanev" value={formData.kutyanev} required onChange={writeData}  placeholder="Kutya neve" className="m-5 input input-accent" />
        <button type="submit" className="btn btn-accent">Küldés</button>

      </form>
    </div>
  )
}

export default KutyanevForm