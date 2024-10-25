import Bookmark from "../Bookmark/Bookmark";


const BookMarks = ({ bookMarks }) => {
  return (
    <div className="md:w-1/3 bg-slate-200 rounded-lg ml-3">
      <h2 className="text-2xl text-center font-bold mt-3">Bookmarked Blogs: {bookMarks.length}</h2>
      {
        bookMarks.map(bookMark => <Bookmark key={bookMark.id} bookMark={bookMark}></Bookmark> )
      }
     
    </div>
  );
};

export default BookMarks;