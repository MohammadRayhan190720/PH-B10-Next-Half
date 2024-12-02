
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../components/Footer";
import { FaArrowLeft } from "react-icons/fa";

const UpdateCoffee = () => {
  const loadedCoffee = useLoaderData();
    const { _id, name, chef, supplier, taste, category, details, photo } = loadedCoffee;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updateCoffee = { name, chef, supplier, taste, category, details, photo };
    // console.log(UpdateCoffee);

    //sent data to server

    fetch(`https://coffee-store-server-eight-red.vercel.app/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("response form server", data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success",
            text: "Coffee update successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <button className="text-3xl font-fontRancho flex gap-3 my-10 px-8">
        <FaArrowLeft />
        <Link to="/">Back To Home</Link>
      </button>
      <div className="hero bg-[#F4F3F0] max-w-7xl mx-auto min-h-screen font-fontRancho">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Update Coffee</h1>
            <p className="py-6 w-4/5 mx-auto text-xl">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <div className="card w-full shrink-0">
            <form onSubmit={handleUpdateCoffee} className="card-body space-y-4">
              <div className="flex gap-5">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    placeholder="Enter Coffee Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Chef</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={chef}
                    placeholder="Enter Chef Name"
                    name="chef"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Supplier</span>
                  </label>
                  <input
                    type="text"
                    name="supplier"
                    defaultValue={supplier}
                    placeholder="Enter Supplier Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Taste</span>
                  </label>
                  <input
                    type="text"
                    placeholder="taste"
                    defaultValue={taste}
                    name="taste"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    defaultValue={category}
                    placeholder="Enter Coffee Category"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text">Details</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Coffee Details"
                    name="details"
                    defaultValue={details}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    defaultValue={photo}
                    placeholder="photo url"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-[#331A15] bg-[#D2B48C]">
                  Update Coffee
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateCoffee;
