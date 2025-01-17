import './User.css'
import { Link } from 'react-router-dom';

const User = ({user}) => {
  console.log(user);
  const {id,name,email,phone,website} = user;
  return (
    <div className="userStyle">
      <h3> Name: {name}</h3>
      <p> Email: {email}</p>
      <p> Phone : {phone}</p>
      <p>Website : {website}</p>

      <Link to={`/user/${id}`}>View Details</Link>
      <Link to ={`/user/${id}`}><button>Details</button></Link>
    </div>
  );
};

export default User;