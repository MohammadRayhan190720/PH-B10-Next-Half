import { useLoaderData } from "react-router-dom";
import Modal from "../components/Modal";

const Details = () => {
  const singleData = useLoaderData()
  console.log(singleData)
  const {cost , treatment,description,image}=singleData;
  return (
    <div className="card bg-base-100 max-w-2xl shadow-xl mx-auto mt-8 rounded-xl">
      <figure>
        <img className="rounded-xl w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {treatment}
          <div className="badge badge-secondary">Price : ${cost}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actionn">
          <div
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="badge badge-outline btn"
          >
            BOOK Appoitment
          </div>
        </div>
      </div>
      <Modal></Modal>
    </div>
  );
};

export default Details;