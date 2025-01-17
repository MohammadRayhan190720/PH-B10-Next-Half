
import PropTypes from "prop-types"; 
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookMarks, handleReadingTime }) => {
  console.log(blog);

  const {
    id,
    cover,
    title,
    author,
    author_img,
    hashtags,
    posted_date,
    reading_time,
  } = blog;

  return (
    <div className="mt-7">
      <img className="rounded-xl" src={cover} alt="cover-1" />

      <div className="flex justify-between mt-7 items-center">
        <div className="flex gap-4">
          <img className="w-16" src={author_img} alt="author-1" />
          <div>
            <p className="text-2xl font-bold">{author}</p>
            <p className="text-gray-500">{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <p>{reading_time} min read</p>
          <button onClick={() => handleAddToBookMarks(blog)}>
            <FaRegBookmark />
          </button>
        </div>
      </div>
      <h3 className="text-4xl lg:text-5xl font-bold mt-5">{title}</h3>
      <div className="mt-7 text-gray-500 text-lg">
        {hashtags.map((hash, indx) => (
          <span key={indx}>
            <a href="#"> #{hash}</a>
          </span>
        ))}
      </div>
      <button
        onClick={()=>handleReadingTime(id,reading_time)}
        className="underline text-red-500 hover:text-blue-200 mt-4"
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}

export default Blog;