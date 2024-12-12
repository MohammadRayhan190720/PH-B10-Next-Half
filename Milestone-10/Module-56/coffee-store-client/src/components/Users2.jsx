import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";

const Users2 = () => {

  // use Query

  const {isPending,data : users,error} = useQuery({
      queryKey:['users'],
      queryFn: async () =>{
        const res = await fetch('https://coffee-store-server-eight-red.vercel.app/users');
        return res.json();
      }

  })

  if(isPending){
    return 'Loading...';
  }

 if(error){
  return "An error has occurred: " + error.message;
 }



  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch("https://coffee-store-server-eight-red.vercel.app/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const handleDelete = (_id) => {
    // console.log("please delete", _id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //delete from database
        fetch(`https://coffee-store-server-eight-red.vercel.app/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              // const remainingUsers = users.filter((user) => user._id !== _id);

              // setUsers(remainingUsers);
            }
          });
      }
    });
  };

  return (
    <div className="font-fontRailway max-w-7xl mx-auto mt-10 lg:mt-16">
      <h3 className="text-4xl font-bold text-center">Users List </h3>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Creat At</th>
                <th>last SignIn Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user) => (
                <tr key={user._id} className="hover">
                  <th>1</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user?.creatAt}</td>
                  <td>{user?.lastSignInTime}</td>
                  <td className="text-2xl space-x-3">
                    <button
                      onClick={() => {
                        handleDelete(user._id);
                      }}
                      className="px-3 py-1 bg-orange-400"
                    >
                      <AiFillDelete />
                    </button>
                    <button className="px-3 py-1 bg-green-400">
                      <CiEdit />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users2;
