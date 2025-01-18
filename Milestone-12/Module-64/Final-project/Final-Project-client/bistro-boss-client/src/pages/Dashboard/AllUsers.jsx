import { useQuery } from "@tanstack/react-query";
import DynamicTitle from "../../components/shared/DynamicTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUsers = () => {

  const axiosSecure = useAxiosSecure();

  const{data : users = [],refetch} = useQuery({
    queryKey: ['users'],
    queryFn: async () =>{
      const res = await axiosSecure.get('/users');
      return res.data;
    }
  })

  const handleDelete = id =>{
    // console.log(id)
    
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
            axiosSecure.delete(`/users/${id}`)
            .then(res =>{
              console.log(res.data)
              if(res.data.deletedCount > 0){
                Swal.fire({
                  title: "Deleted!",
                  text: "Users has been deleted.",
                  icon: "success",
                });
                refetch()
              }
            })
    
            
          }
        });
  }

  const handleMakeAdmin = user =>{
      Swal.fire({
        title: "Are you sure?",
        text: "You Want To Make Admin This Person!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Make Admin",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.patch(`/users/admin/${user._id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                title: "Created!",
                text: `${user.name} is New Admin`,
                icon: "success",
              });
              refetch();
            }
          });
        }
      });
  }

  return (
    <div>
      <DynamicTitle
        Heading={"Manage All Users"}
        subHeading={"How Many ??"}
      ></DynamicTitle>

      <div>
        <h3 className="text-3xl font-semibold">Total Users: {users.length}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-amber-600 text-white ">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    {/* <div className="avatar"> */}
                    <div>
                      <p>{user.name}</p>
                    </div>
                    {/* </div> */}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => {
                        handleMakeAdmin(user);
                      }}
                      className="btn bg-orange-400 btn-xl  text-white"
                    >
                      <FaUsers />
                    </button>
                  )}
                </td>
                <th>
                  <button
                    onClick={() => {
                      handleDelete(user._id);
                    }}
                    className="btn btn-ghost btn-xl  bg-red-600 text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;