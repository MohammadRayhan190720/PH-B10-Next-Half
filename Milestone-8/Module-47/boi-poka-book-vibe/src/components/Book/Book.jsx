import {Link} from 'react-router-dom'

const Book = ({book}) => {
  console.log(book);
  const { image, tags, bookName, author, category, rating, publisher,bookId } = book;
  return (
    <div className="border rounded-2xl p-10 flex flex-col justify-center space-y-4">
      <img
        className=" w-[326px] h-[350px] rounded-2xl"
        src={image}
        alt={bookName}
      />

      <div>
        {tags.map((tag, index) => (
          <button
            className="px-5 py-3 bg-green-100  rounded-xl"
            key={index}
          >
            {tag}
          </button>
        ))}
      </div>
      <p className="text-2xl font-bold">{bookName}</p>
      <p className="border-b border-dashed">By: {author}</p>
      <div className="flex justify-between items-center">
        <p>{category}</p>
        <p>{rating}</p>
      </div>

      <Link to={`/book/${bookId}`}> <button className='px-5 py-3 bg-green-600 text-white  rounded-xl'>View Details</button></Link>
    </div>
  );
};

export default Book;