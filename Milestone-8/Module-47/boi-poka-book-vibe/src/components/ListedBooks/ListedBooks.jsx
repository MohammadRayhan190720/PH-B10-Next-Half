import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getstoredReadList, getstoredWishList } from "../../Utilities/addToDb";
import Book from "../Book/Book";
import { Helmet } from "react-helmet-async";


const ListedBooks = () => {

  const [readList,setReadList] = useState([])

  const [wishList,setWishList] = useState([])

  const [sort,setSort] = useState([])

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


  const handleSort = sortType =>{
    setSort(sortType)

    if (sortType === 'Number of Pages'){
      const sortByPrice = [...readList].sort((a,b) => a.totalPages - b.totalPages);
      setReadList(sortByPrice);
    }

    if(sortType === 'Ratings'){
      const sortByRating = [...readList].sort((a,b) => a.rating - b.rating);
      setReadList(sortByRating)
    }
  }

  return (
    <div className="mt-5">
      {/* //sort options */}
      <Helmet>
        <title>Book Vibe - Listed Books</title>
      </Helmet>
      <div className="dropdown  my-10">
        <div tabIndex={0} role="button" className="btn  bg-green-500">
          {sort ? `Sort by: ${sort}` : "sort by"}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li
            onClick={() => {
              handleSort("Ratings");
            }}
          >
            <a>Ratings</a>
          </li>
          <li
            onClick={() => {
              handleSort("Number of Pages");
            }}
          >
            <a>Number of Pages</a>
          </li>
        </ul>
      </div>
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
