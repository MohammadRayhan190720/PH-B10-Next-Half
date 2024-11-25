import { useLoaderData } from "react-router-dom";

const Phone = () => {
  const phone = useLoaderData();
  return (
    <div>
      <div>
        <img src={phone.image} alt={phone.name} />
        <p>price: ${phone.price}</p>
      </div>
      
    </div>
  );
};

export default Phone;
