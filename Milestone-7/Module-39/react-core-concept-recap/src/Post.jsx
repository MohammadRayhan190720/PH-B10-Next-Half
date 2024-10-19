import './post.css'

export default function Post({post}){
  console.log(post);
const{title,userId ,id} = post;
  return(
    <div className='post-box'>
      <h2>Title :{title} </h2>
      <p>UserId :{userId} </p>
      <p>PostId :{id} </p>
    </div>
  )
}