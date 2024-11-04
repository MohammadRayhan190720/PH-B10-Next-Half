import BannerImage from '../assets/images/banner.jpg'

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          {BannerImage},
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      
    </div>
  );
};

export default Banner;