import { useState,useEffect } from "react"

function Users() {
    const [users,setUsers]=useState([]);

    const getUsers=()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(adat=>setUsers(adat))
        .catch(err=>alert(err));

    }

    useEffect(()=>{
        getUsers();
    },[])

  return (
    <div>Users
        {
            users.map((user)=>(<p key={user.id}>{user.name} {user.email}</p>))
        }
    </div>
  )
}

export default Users