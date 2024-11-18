import { Link } from "react-router-dom";

const ServiceCard = ({data}) => {
  console.log(data)
  const{treatment,description,image,cost,id} = data;
  return (
    <div className="card bg-base-100 shadow-xl mt-10 lg:mt-16 flex">
      <figure className="w-full">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl w-96 h-60 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{treatment}</h2>
        <p className="text-xl font-bold">Price:${cost}</p>
        <p title={description} className="flex-grow">
          {description.slice(0, 100)}
        </p>
        <div className="card-actions">
          <Link to={`/details/${id}`}>
            <button className="btn bg-green-600 text-white">
              CheckOut More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;