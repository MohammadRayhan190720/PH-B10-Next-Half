
import PropTypes from "prop-types"; 

const Blog = ({blog}) => {
  console.log(blog)

  const {cover,title,author,author_img,hasgtags,posted_date,reading_time} = blog;

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
        <div>
          <p>{reading_time} min read</p>
        </div>
      </div>
      <h3 className="text-4xl lg:text-5xl font-bold mt-5">{title}</h3>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}

export default Blog;