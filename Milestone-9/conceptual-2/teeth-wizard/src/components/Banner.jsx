import BannerImg from '../assets/banner.png'
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={BannerImg}
          className="max-w-lg rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Best Teeth Service</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-green-600">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;