import DynamicTitle from "./shared/DynamicTitle";
import image1 from '../assets/home/featured.jpg'

const FeaturedItems = () => {
  return (
    <div className="bg-featureBg bg-cover bg-center min-h-screen mt-10 text-white opacity-90 bg-fixed ">
      {/* <div className="hero-overlay bg-opacity-60"></div> */}

      <DynamicTitle
        subHeading={"Check It Out"}
        Heading={"Form Our Menu"}
      ></DynamicTitle>

      <div className="flex items-center justify-center max-w-5xl mx-auto mt-8 gap-6 bg-slate-500 bg-opacity-50 p-5">
        <img className="max-w-md" src={image1} alt="" />
        <div className="">
          <p>March 20,2023</p>
          <p>Where Can I Get some</p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt et
            consequatur veritatis, molestiae harum distinctio est eligendi ullam
            debitis corrupti?
          </p>
          <button className="btn border-b-black border-b-4">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;