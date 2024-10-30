

const PriceOption = ({prices}) => {
const {title,price,duration,features} = prices;
  return (
    <div className="bg-green-500 text-black p-7 rounded-lg">
      <h3 className="text-3xl font-bold text-center mb-5">{title}</h3>
      <div className="flex gap-3 space-y-6">
        <p className="text-5xl"> {price}/</p>
        <p>{duration}</p>
      </div>
      {
        features.map(feature => <li className="mt-5">{feature}</li>)
      }
      
      <button className="px-5 py-3 bg-pink-500 text-white w-full rounded-xl mt-5">Buy Now !</button>
    </div>
  );
};

export default PriceOption;