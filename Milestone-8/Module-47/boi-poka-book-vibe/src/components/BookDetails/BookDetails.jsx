import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../Utilities/addToDb";

const BookDetails = () => {

  const {bookId}  = useParams();
  const id = parseInt(bookId)

  const bookData = useLoaderData();
 
  const book = bookData.find(book => book.bookId === id);
  const{bookName,author,category,review,image,tags,totalPages,publisher,rating,yearOfPublishing} = book;

  const handleToMarkRead = (id) =>{

    addToStoredReadList(id)

  }
  

  return (
    <div className="flex pt-10 justify-center items-center mb-10">
      <div className="w-1/2">
        <img className="w-4/5 p-10 h-4/5 rounded-xl"  src={image} alt="" />
      </div>
      <div className="w-1/2 space-y-5">
        <h3 className="text-4xl font-bold">{bookName}</h3>
        <p className="border-b border-dashed">By : {author}</p>

        <p className="border-b border-dashed">{category}</p>

        <p>review : {review}</p>

       <p className="border-b border-dashed flex gap-5 ">
        {
          tags.map(tag => <p className="bg-green-100 px-5 py-3 rounded-xl pb-4">{tag}</p>)
        }
       </p>

       <div className="text-2xl font-semibold space-y-2">
        <p>Number of Pages : {totalPages}</p>
        <p>Publisher : {publisher}</p>
        <p>Year of Publishing : {yearOfPublishing}</p>
        <p>Rating : {rating}</p>
       </div>

       <button onClick={()=>{handleToMarkRead(bookId)}} className="px-5 py-3 border border-green-600  mr-6">Mark As Read</button>
       <button className="px-5 py-3 bg-green-600 text-white">Add To WishList</button>

      </div>
    </div>
  );
};

export default BookDetails;