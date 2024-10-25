import Bookmark from "../Bookmark/Bookmark";


const BookMarks = ({ bookMarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-slate-200 rounded-lg ml-3">
      <div className="text-center bg-lime-400 rounded-lg p-5 my-3">
        <h4 className="text-2xl ">Spend Time on Read : {readingTime}</h4>
      </div>
      <h2 className="text-2xl text-center font-bold mt-3">
        Bookmarked Blogs: {bookMarks.length}
      </h2>
      {bookMarks.map((bookMark,indx) => (
        <Bookmark key={indx} bookMark={bookMark}></Bookmark>
      ))}
    </div>
  );
};

export default BookMarks;