

const Bookmark = ({bookMark}) => {
  // console.log(bookMark);
  const{title} = bookMark;
  return (
    <div className="text-2xl  m-4 ">
      <h2 className="bg-white rounded-lg p-5">{title}</h2>
    </div>
  );
};

export default Bookmark;