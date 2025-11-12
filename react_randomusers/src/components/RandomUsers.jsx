import { useState,useEffect } from "react";
import RandomUser from "./RandomUser";
import UserSelect from "./UserSelect";

function RandomUsers() {
    const[users,setUsers]=useState([]);
    const[userNumber,setUserNumber]=useState(5);

    const getUsers=()=>{
        fetch(`http://randomuser.me/api/?results=${userNumber}`)
        .then(res=>res.json())
        .then(adatok=>setUsers(adatok.results))
        .catch(err=>alert(err));
    }

    useEffect(()=>{
        getUsers();
    },[userNumber])

  return (
    <div>
        <h1 className="text-3xl text-sky-700 text-center">Felhasználók adatai</h1>
        <UserSelect setUserNumber={setUserNumber} />
        <div className="flex flex-row flex-wrap items-center justify-center">
        {
            users.map((user,i)=>(<RandomUser key={i} user={user} />))
        }
        </div>
    </div>
  )
}

export default RandomUsers