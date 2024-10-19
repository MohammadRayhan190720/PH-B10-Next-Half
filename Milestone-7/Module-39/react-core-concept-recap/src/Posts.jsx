import { useEffect, useState } from "react"
import Post from "./Post";

export default function Posts(){

  const [posts,setPosts] = useState([])

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setPosts(data))

  },[]);

  return(
    <div>
      <h2>Post :{posts.length} </h2>
      {
        posts.map(post => <Post post = {post}></Post>)
      }
    </div>
  )
}


/**
 * Load data step by step
 * 1. creat a state to store data
 * 2.creat useEffects with no dependencies
 * 3.load data useing fatch
 * 
 */