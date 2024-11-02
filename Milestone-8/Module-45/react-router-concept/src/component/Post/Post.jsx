
import { Link } from 'react-router-dom';
import './Post.css'
const Post = ({post}) => {
  console.log(post)
  const{id,userId,title,body} = post;
  return (
    <div className='post'>
      <h2>Post Id ={id}</h2>
      <h3>Title:{title}</h3>
      <h2>Body: {body}</h2>
      <p>UserId : {userId}</p>

      <Link to={`/post/${id}`}>View Details</Link>
      
    </div>
  );
};

export default Post;