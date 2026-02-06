import { useState,useEffect } from "react";
import type { Result } from "../types/Result";
import RandomUser from "./RandomUser";

function RandomUsers() {
    const [users,setUsers]=useState(Array<Result>);

    const getUsers=()=>{
        fetch('https://randomuser.me/api/?results=10')
        .then(res=>res.json())
        .then(adat=>setUsers(adat.results))
        .catch(err=>alert(err));
    }
    useEffect(()=>{
        getUsers();
    },[])

  return (
    <div>
        <h2 className="text-2xl text-center">Users</h2>
        {
            //users.map((user,i)=>(<p key={i}>{user.name.title} {user.name.first} {user.name.last}</p>))
            users.map((user,i)=>(<RandomUser key={i} result={user} />))
        }
    </div>
  )
}

export default RandomUsers