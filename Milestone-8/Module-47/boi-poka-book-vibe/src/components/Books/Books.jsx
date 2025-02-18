import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books,setBooks] = useState([])

  useEffect(() =>{
    fetch('/booksData.json')
    .then(res => res.json())
    .then(data =>setBooks(data))
  },[])

  return (
    <div className="mt-14  ">
      <h3 className="text-center text-3xl font-bold ">Books</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 ">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;