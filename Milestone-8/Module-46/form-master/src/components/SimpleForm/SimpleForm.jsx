

const SimpleForm = () => {

  const handleSubmit = e =>{
    e.preventDefault();
    console.log(e.target.name.value)
    console.log(e.target.email.value)
    console.log(e.target.number.value)
    console.log("form submitted")
  }
  return (
    <form onSubmit={handleSubmit} className="space-x-5">
      <input className="border py-3 p-3" type="text" name="name" id="" placeholder="Enter your Name" />
      <br></br>
      <input type="email" className="border py-3 p-3" name="email" id="" placeholder="Enter your Email" />
      <br></br>
      <input type="number" className="border py-3 p-3" name="number" id="" placeholder="Enter your Phone" />
      <br></br>
      <button className="border px-5 py-3" type="submit">Submit</button>

    </form>
  );
};

export default SimpleForm;