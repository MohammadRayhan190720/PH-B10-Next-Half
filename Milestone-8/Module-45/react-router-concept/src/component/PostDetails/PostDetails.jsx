import { useLoaderData } from "react-router-dom";


const PostDetails = () => {

  const post = useLoaderData();
  console.log(post);
  const{title,userId} = post;
  return (
    <div>
      <h3>Post Details : </h3>
      <p>post id : {userId}</p>
      <p>Title{title}</p>
    </div>
  );
};

export default PostDetails;