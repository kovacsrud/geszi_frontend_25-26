import { useState,useEffect,createContext } from "react";
import {useNavigate} from 'react-router-dom';

const KutyaContext=createContext();

export const KutyaProvider=({children})=>{
    //state-ek, függvények
    const[kutyak,setKutyak]=useState([]);
    const[kutyanevek,setKutyanevek]=useState([]);
    const[kutyafajtak,setKutyafajtak]=useState([]);
    const[refresh,setRefresh]=useState(false);

    const getKutyak=()=>{
        fetch("http://localhost:8000/kutyak")
        .then(res=>res.json())
        .then(adat=>setKutyak(adat))
        .catch(err=>alert(err));

    }
    const getKutyanevek=()=>{
         fetch("http://localhost:8000/kutyanevek")
        .then(res=>res.json())
        .then(adat=>setKutyanevek(adat))
        .catch(err=>alert(err));

    }
    const getKutyafajtak=()=>{
         fetch("http://localhost:8000/kutyafajtak")
        .then(res=>res.json())
        .then(adat=>setKutyafajtak(adat))
        .catch(err=>alert(err));

    }
    useEffect(()=>{
        getKutyak();
        getKutyanevek();
        getKutyafajtak();
    },[refresh]);

    const update=()=>{
        setRefresh(prev=>!prev);
    }

    const backendMuvelet=async (adat,method,url)=>{

        const keres=await fetch(url,{
            method:method,
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(adat)
        });
        const valasz=await keres.text();
        update();
        alert(valasz);

    }


    return <KutyaContext.Provider value={{
        kutyak,
        kutyanevek,
        kutyafajtak,
        update,
        backendMuvelet

    }}>{children}</KutyaContext.Provider>
}


export default KutyaContext;