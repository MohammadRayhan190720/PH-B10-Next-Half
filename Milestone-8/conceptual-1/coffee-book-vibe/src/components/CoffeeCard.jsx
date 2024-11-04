

const CoffeeCard = ({coffee}) => {
  console.log(coffee)
  const {
    id,
    name,
    image,
    category,
    ingredients,
    nutrition_info,
    origin,
    description,
    making_process,type,
    rating,popularity
  } = coffee;
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
};

export default CoffeeCard;