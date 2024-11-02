import { useId } from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './Posts.css'

const Posts = () => {
  const posts = useLoaderData();
 
  return (
    <div>
      <h3>This is Posts Components: {posts.length} </h3>

      <div className="postsStyle">
        {posts.map((post) => (
          <Post post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;