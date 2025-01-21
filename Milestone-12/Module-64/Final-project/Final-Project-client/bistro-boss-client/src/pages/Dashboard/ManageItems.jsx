import { FaTrashAlt } from "react-icons/fa";
import DynamicTitle from "../../components/shared/DynamicTitle";
import useMenu from "../../hooks/useMenu";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu,loading, refetch] = useMenu();
  // console.log(menu)
  const axiosSecure = useAxiosSecure();

  const handleDelete = (item) => {
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
        axiosSecure.delete(`/menu/${item._id}`)
        .then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: `${item.name} has been deleted.`,
              icon: "success",
            });
            refetch()
          }
        });
      }
    });
  };
  const handleUpdate = (id) => {
    console.log(id);
  };

  return (
    <div>
      <DynamicTitle
        Heading={"Manage All Items"}
        subHeading={"Hurry Up"}
      ></DynamicTitle>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-amber-600 text-white ">
            <tr>
              <th></th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
                <th>
                  <Link to={`/dashboard/updateItems/${item._id}`}>
                    <button
                      onClick={() => {
                        handleUpdate(item._id);
                      }}
                      className="btn btn-ghost btn-xl  bg-amber-600 text-white"
                    >
                      <CiEdit className="text-xl" />
                    </button>
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => {
                      handleDelete(item);
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

export default ManageItems;
