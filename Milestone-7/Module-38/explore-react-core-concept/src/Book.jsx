import './Book.css'

export default function Book({book}){
  const {price,name} = book
  return (
    <div className='book'>
      <h3>Book Name :{name} </h3>
      <p>Book Name :{price} </p>
    </div>
  )
  

}