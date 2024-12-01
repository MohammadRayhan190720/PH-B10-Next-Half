import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const Product = ({ coffee,coffees, setCoffees }) => {
  const { _id, name, chef,  taste,  photo } = coffee;

  const handleDelete = (_id) => {
    // console.log("delete product", _id);

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
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remainingCoffees = coffees.filter(
                cof => cof._id !== _id
              );
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div className="card flex-row bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Shoes" />
      </figure>
      <div className="card-body justify-center">
        <h2 className="card-title">Name: {name}</h2>
        <h2 className="card-title">Chef: {chef}</h2>
        <h2 className="card-title">Taste:{taste}</h2>
      </div>
      <div className="flex flex-col justify-center items-center mr-8 text-2xl text-white space-y-3">
        <Link to={`/coffeedetails/${_id}`}>
          <button className="bg-[#D2B48C] p-2">
            <FaEye />
          </button>
        </Link>
        <Link to={`/updatecoffee/${_id}`}>
          <button className="bg-[#3C393B] p-2">
            <CiEdit />
          </button>
        </Link>
        <button
          onClick={() => {
            handleDelete(_id);
          }}
          className="bg-[#EA4744] p-2"
        >
          <AiTwotoneDelete />
        </button>
      </div>
    </div>
  );
};

export default Product;
