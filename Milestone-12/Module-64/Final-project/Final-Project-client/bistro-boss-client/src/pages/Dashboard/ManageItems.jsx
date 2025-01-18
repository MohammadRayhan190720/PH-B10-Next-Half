import { FaTrashAlt } from "react-icons/fa";
import DynamicTitle from "../../components/shared/DynamicTitle";
import useMenu from "../../hooks/useMenu";
import { CiEdit } from "react-icons/ci";


const ManageItems = () => {

  const [menu] = useMenu();

  const handleDelete = id =>{

  }
  const handleUpdate = id =>{
    console.log(id)
  }


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
                  <button
                    onClick={() => {
                      handleUpdate(item._id);
                    }}
                    className="btn btn-ghost btn-xl  bg-amber-600 text-white"
                  >
                    <CiEdit className="text-xl" />
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => {
                      handleDelete(item._id);
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