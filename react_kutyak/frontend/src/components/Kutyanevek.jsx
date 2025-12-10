import { useContext } from "react";
import KutyaContext from "../context/KutyaContext";
import Kutyanev from "./listaelemek/Kutyanev";

function Kutyanevek() {
  const {kutyanevek}=useContext(KutyaContext);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-lime-800">Kutyanevek:</h1>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {
            kutyanevek.map((kutyanev)=>(<Kutyanev key={kutyanev.Id} kutyanev={kutyanev} />))
        }
      </div>
    </div>
  )
}

export default Kutyanevek