import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getstoredReadList } from "../../Utilities/addToDb";
import Book from "../Book/Book";

const ListedBooks = () => {

  const [readList,setReadList] = useState([])

  const allBooksData = useLoaderData();

  useEffect(() =>{
    const storedReadList = getstoredReadList();
    const storedReadListInt = storedReadList.map(id => parseInt(id))

    


    const readBooksList = allBooksData.filter(book => storedReadListInt.includes(book.bookId))
  
    setReadList(readBooksList);
  
  },[])


  return (
    <div>
     
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Read List = {readList.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
              readList.map(book => <Book key={book.bookId} book={book}></Book>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
