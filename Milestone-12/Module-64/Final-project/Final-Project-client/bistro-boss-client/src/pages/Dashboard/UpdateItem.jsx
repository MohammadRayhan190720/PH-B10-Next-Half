import { useLoaderData } from "react-router-dom";
import DynamicTitle from "../../components/shared/DynamicTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa6";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hoisting_Key = import.meta.env.VITE_IMAGE_HOISTING_KEY;
const image_hoisting_api = `https://api.imgbb.com/1/upload?key=${image_hoisting_Key}`;


const UpdateItem = () => {

   const items = useLoaderData();
   const item = items[0];

   const { name, category, recipe,price,_id} = item;
   console.log(item);

   const { register, handleSubmit, reset } = useForm();

   const axiosPublic = useAxiosPublic();
   const axiosSecure = useAxiosSecure();

   const onSubmit = async (data) => {
     console.log("Form Data:", data);

     //image upload to imgbb and get an URL
     const imageFile = { image: data.fileInput[0] };
     const res = await axiosPublic.post(image_hoisting_api, imageFile, {
       headers: {
         "content-type": "multipart/form-data",
       },
     });
     if (res.data.success) {
       //now send menu item data to server
       const menuItem = {
         name: data.name,
         recipe: data.recipe,
         price: parseInt(data.price),
         category: data.category,
         image: res.data.data.display_url,
       };

       const menuRes = await axiosSecure.patch(`/menu/${item._id}`, menuItem);
       console.log(menuRes.data);
       if (menuRes.data.modifiedCount > 0) {
         //show success message
         Swal.fire({
           position: "top-end",
           icon: "success",
           title: `${data.name} Updated successfully`,
           showConfirmButton: false,
           timer: 1500,
         });
       }
     }
     console.log(res.data);
     reset();
   };

 
  return (
    <div>
      <DynamicTitle
        Heading={"Update an Item"}
        subHeading={"Need to Updated?"}
      ></DynamicTitle>

      <div className="max-w-3xl mx-auto p-4 bg-gray-200 rounded shadow">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 grid grid-cols-1">
            <label
              htmlFor="recipeName"
              className="block text-gray-700 font-medium mb-2"
            >
              Recipe Name
            </label>
            <input
              type="text"
              id="recipeName"
              defaultValue={name}
              {...register("name", { required: true })}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter recipe name"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-gray-700 font-medium mb-2"
              >
                Price
              </label>
              <input
                type="number"
                defaultValue={price}
                id="price"
                {...register("price", { required: true })}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter price"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-gray-700 font-medium mb-2"
              >
                Category
              </label>
              <select
                id="category"
                defaultValue={category}
                // defaultValue={"default"}
                {...register("category", { required: true })}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="pizza">Pizza</option>
                <option value="desert">Desert</option>
                <option value="salad">Salad</option>
                <option value="soups">Soups</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="recipeDetails"
              className="block text-gray-700 font-medium mb-2"
            >
              Recipe Details
            </label>
            <textarea
              id="recipeDetails"
              defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter detailed recipe instructions"
              rows="4"
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="fileInput"
              className="block text-gray-700 font-medium mb-2"
            >
              Upload File
            </label>
            <input
              type="file"
              id="fileInput"
              {...register("fileInput", { required: true })}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-l from-orange-900 to-orange-400 text-white py-2 px-4 rounded flex items-center justify-center gap-2"
          >
            Update Recipe
            <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;