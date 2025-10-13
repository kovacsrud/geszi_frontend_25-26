import { useState,useEffect } from "react"

function Posts() {
    const [posts,setPosts]=useState([]);

    const getPosts=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(adat=>setPosts(adat))
        .catch(err=>alert(err));
    }
    useEffect(()=>{
        getPosts();
    },[])

  return (
    <div>
        <h2>Posztok</h2>
        {
           posts.map((post)=>(<p>{post.title}</p>)) 
        }
    </div>
  )
}

export default Posts