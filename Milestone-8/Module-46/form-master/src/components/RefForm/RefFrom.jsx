import { useEffect, useRef, useState } from "react";

const RefFrom = () => {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error,setError] = useState(null);

  useEffect(() =>{
    nameRef.current.focus();

  },[] )

   const handleSubmit = (e) =>{
      e.preventDefault();
      if (passwordRef.current.value.length < 6){
          setError('password must be at least 6 characters')
      } else{
        setError(' ');
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
      }
   }





  return (
    <div>
      <form onSubmit={handleSubmit} className="space-x-5">
        <input ref={nameRef}
          className="border py-3 p-3"
          type="text"
          name="name"
          id=""
          placeholder="Enter your Name"
        />
        <br></br>
        <input ref={emailRef}
          type="email"
          className="border py-3 p-3"
          name="email"
          id=""
          placeholder="Enter your Email"
          required
        />
        <br></br>
        <input ref={passwordRef}
          type="password"
          className="border py-3 p-3"
          name="password"
          id=""
          placeholder="Enter your password"
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

export default RefFrom;