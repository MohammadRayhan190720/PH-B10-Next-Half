import { FaCheck } from "react-icons/fa6";

const PriceOption = ({ prices }) => {
  const { title, price, duration, features } = prices;
  return (
    <div className="bg-green-500 text-black p-7 rounded-lg flex flex-col mt-5">
      <h3 className="text-3xl font-bold text-center mb-5">{title}</h3>
      <div className="flex gap-3 space-y-6">
        <p className="text-5xl"> {price}/</p>
        <p>{duration}</p>
      </div>
      <div className="flex-grow">
        {features.map((feature, index) => (
          <p key={index} className="mt-5 flex  items-center gap-3">
            {" "}
            <FaCheck className="bg-green-600 rounded-full" />
            {feature}
          </p>
        ))}
      </div>

      <button className="px-5 py-3 bg-pink-500 hover:bg-pink-300 text-white w-full rounded-xl mt-5">
        Buy Now !
      </button>
    </div>
  );
};

export default PriceOption;
