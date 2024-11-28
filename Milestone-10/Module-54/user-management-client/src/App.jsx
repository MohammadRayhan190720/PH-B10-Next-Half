
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [users,setUsers] = useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  //handle form

  const handleSubmit = e =>{
    e.preventDefault();
    const form =e.target;
    const name = form.name.value;
    const email = form.email.value;

    const user = {name,email}
   console.log(user);
  }

  return (
    <>

      <h1>User Management System</h1>

      <form onSubmit={handleSubmit}>
        <h3 className='text-3xl'>Your Information</h3>
        <input type="text" name="name" id=""placeholder='your name' />
        <br></br>
        <input type="email" name="email" id=""placeholder='your Email' />
        <br></br>
        <button type="submit">Submit</button>
      </form>


      <p>Total Users : {users.length}</p>
      <div>
        {
          users.map(user => <p key={user.id}>{user.id}: {user.name} : {user.email}</p>)
        }
      </div>

    </>
  )
}

export default App
