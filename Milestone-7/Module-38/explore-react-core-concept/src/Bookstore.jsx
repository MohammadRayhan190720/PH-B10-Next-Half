import Book from './Book';

export default function Bookstore({books}){
  return(
    <div>
      <h3>Book Quentity : {books.length}</h3>
      {
        books.map(book => <Book book ={book}></Book>)
      }
     
    </div>
  )
}