import React from 'react';

const ReuseAbleForm = ({title, handleSubmit ,buttonText = "Submit" , children}) => {

  const handleLocalSubmit = e =>{
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }
    handleSubmit(data)
  }


  return (
    <div>
      {/* <h2>{title} </h2> */}
      <h2>{children}</h2>
      <form onSubmit={handleLocalSubmit} className="space-y-5">
        <input
          className="border py-3 p-3"
          type="text"
          name="name"
          id=""
          placeholder="Enter your Name"
        />
        <br></br>
        <input
          type="email"
          className="border py-3 p-3"
          name="email"
          id=""
          placeholder="Enter your Email"
        />
        <br></br>
        <input
          type="password"
          className="border py-3 p-3"
          name="password"
          id=""
          placeholder="Enter your password"
        />
        <br></br>
        <button className="border px-5 py-3" type="submit" value={buttonText}>
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default ReuseAbleForm;