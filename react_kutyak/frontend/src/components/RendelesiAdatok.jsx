import RendelesiAdat from "./listaelemek/RendelesiAdat";
import { useContext } from "react";
import KutyaContext from "../context/KutyaContext";

function RendelesiAdatok() {
  const {kutyak}=useContext(KutyaContext);
  return (
    <div>
      <h1 className="text-3xl text-center font-bold text-green-800">Rendelési adatok</h1>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {
          kutyak.map((kutya,i)=>(<RendelesiAdat key={i} kutya={kutya} />))
        }
      </div>
    </div>
  )
}

export default RendelesiAdatok