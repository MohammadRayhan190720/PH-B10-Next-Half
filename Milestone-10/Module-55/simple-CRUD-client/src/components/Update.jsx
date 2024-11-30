import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loderUser = useLoaderData();
  console.log(loderUser);

  const handleUpdate = e =>{
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updateUser = {name, email}
    console.log(updateUser)

    fetch(`http://localhost:5000/users/${loderUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
          alert("User updated successfully")
          form.reset()
        }
      });


  }
  return (
    <div>
      <p>Update user name : {loderUser.name}</p>

      <form onSubmit={handleUpdate}>
        <h3>Update Information</h3>
        <input type="text" defaultValue={loderUser?.name} name="name" id="" placeholder="name" />
        <br></br>
        <input type="email" defaultValue={loderUser?.email} name="email" id="" placeholder="email" />
        <br></br>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;