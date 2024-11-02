import './User.css'

const User = ({user}) => {
  console.log(user);
  const {name,email,phone,website} = user;
  return (
    <div className='userStyle'>
      <h3> Name: {name}</h3>
      <p> Email: {email}</p>
      <p> Phone : {phone}</p>
      <p>Website : {website}</p>
  

      
    </div>
  );
};

export default User;