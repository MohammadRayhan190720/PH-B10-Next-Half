
import './App.css'

function App() {

  const handleSubmit = e =>{
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name,email}
    console.log(user);

    fetch("http://localhost:5000/users",{
      method: 'POST',
      headers:{
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
      console.log( 'new user' , data);
      if(data.insertedId){
        alert("user added successfully")
        form.reset();
      }
    })

  }

  return (
    <>

      <h1>Simple CRUD Client</h1>
      <form onSubmit={handleSubmit}>
        <h3>User Information</h3>
        <input type="text" name="name" id="" placeholder='name' />
        <br></br>
        <input type="email" name="email" id="" placeholder='email' />
        <br></br>

        <button type="submit">Submit</button>
      </form>


    </>
  )
}

export default App
