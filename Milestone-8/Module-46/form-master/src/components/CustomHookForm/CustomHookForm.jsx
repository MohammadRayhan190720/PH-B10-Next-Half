import useInputState from "../../Hooks/UseInputState";

const CustomHookForm = () => {

  // const [name , handleNameChange] = useInputState('Rayhan')

  const emailState = useInputState('rafirayhn@gmail.com')

  const handleSubmit = e => {
   e.preventDefault();
   console.log('submitted' , emailState.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-x-5">
        {/* <input value={name} onChange={handleNameChange}
          className="border py-3 p-3"
          type="text"
          name="name"
          id=""
          placeholder="Enter your Name"
        />
        <br></br> */}
        <input {...emailState}
          type="email"
          className="border py-3 p-3"
          name="email"
          id=""
          placeholder="Enter your Email"
          required
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
        <button className="border px-5 py-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CustomHookForm;