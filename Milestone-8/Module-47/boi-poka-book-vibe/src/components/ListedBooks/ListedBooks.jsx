import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getstoredReadList, getstoredWishList } from "../../Utilities/addToDb";
import Book from "../Book/Book";

const ListedBooks = () => {

  const [readList,setReadList] = useState([])

  const [wishList,setWishList] = useState([])

  const allBooksData = useLoaderData();

  //add to read list
  useEffect(() =>{
    const storedReadList = getstoredReadList();
    const storedReadListInt = storedReadList.map(id => parseInt(id))

    const readBooksList = allBooksData.filter(book => storedReadListInt.includes(book.bookId))
  
    setReadList(readBooksList);
  
  },[])

  //addTo Wish List
  useEffect(()=>{
    const storedWishList = getstoredWishList();
    const storedWishListInt = storedWishList.map(id => parseInt(id))

    const wishListBooks = allBooksData.filter(book => storedWishListInt.includes(book.bookId))

    setWishList(wishListBooks);
  },[])


  return (
    <div className="mt-5">
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-3xl font-bold text-center my-6">
            Total Read Books {readList.length}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {readList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-3xl font-bold text-center my-6">
            Total WishList Books {wishList.length}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {wishList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
