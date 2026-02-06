import { useState,useEffect } from "react";
import type { Post } from "../types/Post";


function TypiCode() {
    const[posts,setPosts]=useState(Array<Post>);

    const getPosts=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(adat=>setPosts(adat))
        .catch(err=>alert(err));
    }

    useEffect(()=>{
        getPosts();
    },[])

  return (
    <div>
        <h3 className="text-2xl text-center font-bold">Posztok</h3>
        {
            posts.map((post)=>(<p key={post.id}>{post.title}</p>))
        }
    </div>
  )
}

export default TypiCode