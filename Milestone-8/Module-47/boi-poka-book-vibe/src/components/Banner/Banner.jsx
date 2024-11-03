import BannerImage from '../../assets/images/books.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 p-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={BannerImage} className="rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>
         
          <button className="btn bg-green-600 text-white mt-8">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;