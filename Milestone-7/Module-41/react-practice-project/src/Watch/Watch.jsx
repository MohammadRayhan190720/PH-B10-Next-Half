

const Watch = ({watch}) => {
  const{id,name,price,brand} = watch;
  return (
    <div>
      <p>Watch : {name}</p>
      <p>brand : {brand}</p>
      <p>price : {price}</p>
      
    </div>
  );
};

export default Watch;