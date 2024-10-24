import './Bottle.css'

const Bottle = ({ bottle,handleAddCart }) => {
  // console.log(bottle);

  const { name, price, img } = bottle;
  return (
    <div className="bottle">
      <h3>Name : {name}</h3>
      <img src={img} alt="" />
      <p>price : {price}</p>
      <button onClick={() =>{handleAddCart(bottle)}}>Add To Cart</button>
    </div>
  );
};

export default Bottle;