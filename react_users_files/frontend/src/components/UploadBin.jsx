import { useState,useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

function UploadBin() {
  const {update}=useContext(UserContext);
  const navigate=useNavigate();
  const [images,setImages]=useState([]);
  const token=sessionStorage.getItem('usertoken');

  useEffect(()=>{
    if(!token){
      navigate('/login');
    }
  },[token])

  const onSubmit=(e)=>{
    e.preventDefault();
    const formData=new FormData();
    for(let i=0;i<images.length;i++){
      formData.append("file"+i,images[i])
    }
    kuldes(formData);
    navigate('/imagesbin');
  }

  const kuldes=(adat)=>{
    fetch('http://localhost:8000/api/imagesbin',{
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
    setImages([...images,...e.target.files]);
  }

  return (
    <div>
      <h2 className="text-2xl text-sky-800 text-center">Képek feltöltése(b)</h2>
      <div className="flex flex-col items-center justify-center">
        <form onSubmit={onSubmit}>
          <input onChange={imageChange} className="file-input file-input-primary" type="file" multiple required />
          <button className="btn btn-primary m-10">Küldés</button>

        </form>
      </div>
    </div>
  )
}

export default UploadBin