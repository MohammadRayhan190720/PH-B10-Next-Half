import Product from "./Product";

export default function Products({info}){
  // console.log(info);

  return(
    <div>
      <h2>Products: </h2>
      <Product info={info}></Product>
    </div>
  )

}