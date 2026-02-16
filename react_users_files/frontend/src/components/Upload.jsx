import { useState,useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

function Upload() {
    const navigate=useNavigate();
    const{update}=useContext(UserContext);
    const token=sessionStorage.getItem('usertoken');
    const [images,setImages]=useState([]);

    useEffect(()=>{
        if(!token){
            navigate('/login');
        }
    },[token]);

    const onSubmit=(e)=>{
        e.preventDefault();
        const formData=new FormData();
        for(let i=0;i<images.length;i++){
            formData.append("file"+i,images[i]);
        }
        kuldes(formData);
        navigate('/images');

    }

    const kuldes=(adat)=>{
        fetch('http://localhost:8000/api/files/upload',{
            method:'POST',
            headers:{
                "Authorization":`Bearer ${token}`
            },
            body:adat
        })
        .then(res=>res.json())
        .then(valasz=>{update();alert(valasz.message)})
        .catch(err=>alert(err));

    }

    const imageChange=(e)=>{
        setImages([...images,...e.target.files])
    }


  return (
    <div>
        <h2 className="text-2xl text-center font-bold text-sky-800">Képek feltöltése</h2>
        <div className="flex flex-col items-center justify-center">
            <form onSubmit={onSubmit}>
            <input onChange={imageChange} className="file-input file-input-primary" type="file" multiple required/>
            <button type="submit" className="btn btn-primary m-10">Feltöltés</button>
            </form>
        </div>
    </div>
  )
}

export default Upload