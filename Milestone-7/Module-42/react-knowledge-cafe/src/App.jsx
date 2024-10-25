import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import './App.css'
import BookMarks from './components/BookMarks/BookMarks';
import { useState } from 'react';

function App() {

  const[bookMarks,setBookmarks] = useState([])


  const handleAddToBookMarks = blog =>{
    // console.log('bookmarked',blog)
    const newBookmarks = [...bookMarks,blog];
    setBookmarks(newBookmarks);
  }
  

  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs handleAddToBookMarks={handleAddToBookMarks}></Blogs>
        <BookMarks bookMarks={bookMarks}></BookMarks>
      </div>
    </>
  );
}

export default App
