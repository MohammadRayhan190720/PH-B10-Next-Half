
export default function Product({info}){
  console.log(info);
  const{name,id} = info;
  return(
    <div>
      <h3>Product Name : {name}</h3>
      <p>Product id : {id}</p>
    </div>
  )
}