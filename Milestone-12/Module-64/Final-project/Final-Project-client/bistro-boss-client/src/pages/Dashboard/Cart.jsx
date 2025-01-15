import React from 'react';
import useCart from '../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import DynamicTitle from '../../components/shared/DynamicTitle';


const Cart = () => {

  const [cart,refetch] = useCart();
  const totalPrice = cart.reduce((acc,item)=> acc+item.price ,0);
  console.log(totalPrice)
  const axiosSecure = useAxiosSecure();

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
        axiosSecure.delete(`/carts/${id}`)
        .then(res =>{
          console.log(res.data)
          if(res.data.deletedCount > 0){
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch()
          }
        })

        
      }
    });
  }
  return (
    <div>
      <div className='border'>
        <DynamicTitle
          Heading="Wanna add More?"
          subHeading="My Cart"
        ></DynamicTitle>
      </div>

      <div className="flex justify-between items-center my-5">
        <h3 className="text-3xl font-semibold uppercase">
          Total Orders : {cart.length}
        </h3>

        <h3 className="text-3xl font-semibold uppercase">
          Total Price : ${totalPrice}
        </h3>

        <button className="btn bg-amber-500 text-white">Pay</button>
      </div>

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
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
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

export default Cart;