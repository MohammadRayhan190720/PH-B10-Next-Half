import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({ handleAddToBookMarks, handleReadingTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h3 className="text-3xl mt-3 text-lime-500 font-bold  text-center">
        Blogs : {blogs.length}
      </h3>

      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookMarks={handleAddToBookMarks}
          handleReadingTime={handleReadingTime}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;