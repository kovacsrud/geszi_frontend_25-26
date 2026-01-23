import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate=useNavigate();

  const kuldes=(formData,method,url)=>{
    fetch(url,{
      method:method,
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(token=>{
      if(!token.message){
        sessionStorage.setItem('usertoken',token);
        alert("Sikeres belépés!");
        navigate("/");
      } else {
        alert(token.message);
      }
    })
    .catch(err=>alert(err));

  }

  const onSubmit=(e)=>{
    e.preventDefault();
    kuldes(formData,"POST","http://localhost:8000/api/user/belepes");

  }

  let formObj={
    username:"",
    password:""
  };

  const[formData,setFormData]=useState(formObj);

  const writeData=(e)=>{
    setFormData((prevState)=>({...prevState,[e.target.id]:e.target.value}))
  }

  return (
    <div>
      <h1 className="text-3xl text-center font-bold text-sky-800 m-5">Login</h1>
      <form onSubmit={onSubmit} className="flex flex-col items-center justify-center">
        <input type="text" id="username" value={formData.username} onChange={writeData} required placeholder="username" className="input input-accent m-5"/>
        <input type="password" id="password" value={formData.password} onChange={writeData} required placeholder="password" className="input input-accent m-5"/>
        <button className="btn btn-accent" type="submit">Belépés</button>

      </form>
    </div>
  )
}

export default Login