import { useState } from "react";

const StateForm = () => {

  const [name,setName] = useState(null);
  const [email,setEmail] = useState(null);
  const [number ,setNumber] = useState(null);
  const [error,setError] = useState(null);
  
  const handleSubmit = e =>{
    e.preventDefault();

    if(number.length < 11){
      setError('Number must be 11 digit')
    } else{
      setError('')
      console.log(name,email,number);
    }

  }

  const handleChangeName = e =>{
    setName(e.target.value);
  }

  const handleChangeEmail = e =>{
    setEmail(e.target.value);
  }

  const handleChangeNumber = e =>{
    setNumber(e.target.value);
  }



  return (
    <div>
      <form onSubmit={handleSubmit} className="space-x-5">
        <input
          onChange={handleChangeName}
          className="border py-3 p-3"
          type="text"
          name="name"
          id=""
          placeholder="Enter your Name"
        />
        <br></br>
        <input onChange={handleChangeEmail}
          type="email"
          className="border py-3 p-3"
          name="email"
          id=""
          placeholder="Enter your Email" required
        />
        <br></br>
        <input onChange={handleChangeNumber}
          type="number"
          className="border py-3 p-3"
          name="number"
          id=""
          placeholder="Enter your Phone"
        />
        <br></br>
        <button className="border px-5 py-3" type="submit">
          Submit
        </button>
      </form>
      {
        error && <p>{error}</p>
      }
    </div>
  );
};

export default StateForm;