import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import './App.css'
import BookMarks from './components/BookMarks/BookMarks';
import { useState } from 'react';

function App() {

  const[bookMarks,setBookmarks] = useState([])
  const[readingTime,setReadingTime] = useState(0)


  const handleAddToBookMarks = blog =>{
    // console.log('bookmarked',blog)
    const newBookmarks = [...bookMarks,blog];
    setBookmarks(newBookmarks);
  }

  const handleReadingTime = time =>{
    // console.log('reading time added',time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }
  

  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs
          handleAddToBookMarks={handleAddToBookMarks}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        <BookMarks bookMarks={bookMarks} readingTime={readingTime}></BookMarks>
      </div>
    </>
  );
}

export default App
