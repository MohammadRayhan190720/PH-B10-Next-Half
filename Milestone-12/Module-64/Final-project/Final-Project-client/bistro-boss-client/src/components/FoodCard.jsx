import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const FoodCard = ({item}) => {

  const {user} = useAuth()
  const navigate = useNavigate()
  const location = useLocation();
  const axiosSecure = useAxiosSecure()

const { name, recipe, image, price,_id } = item;

const handleAddToCart=(item) =>{
  console.log(item)

   if(user && user?.email){

    //send to item to the database

    const cartItem = {
      menuId:_id,
      email:user?.email,
      name,
      image,
      price
    }
    axiosSecure.post("/carts",cartItem)
    .then(res=>{
      if(res.data.insertedId){
        Swal.fire({
          title: "Good job!",
          text: `${name} Successfully Added To Cart`,
          icon: "success",
          showConfirmButton:false,
          timer: 1500,
        });
      }
    })


   }else{
    Swal.fire({
      title: "You are not authorized",
      text: "You Need to Login Frist",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,Login",
    }).then((result) => {
      if (result.isConfirmed) {
       navigate('/login',{state:{from:location.pathname}})
      }
    });

   }

}

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mt-4 mr-4 p-2"> ${price}</p>
      <div className="card-body">
        <h2  className="card-title">{name}</h2>
        <p title={recipe}>{recipe.substring(0,50)}</p>
        <div className="text-center mt-6">
          <button onClick={()=>{handleAddToCart(item)}} className="btn border-b-black border-b-4 ">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;