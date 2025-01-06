import DynamicTitle from "./shared/DynamicTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from '../assets/home/slide1.jpg'
import image2 from '../assets/home/slide2.jpg'
import image3 from '../assets/home/slide3.jpg'
import image4 from '../assets/home/slide4.jpg'
import image5 from '../assets/home/slide5.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

const CategorySwiper = () => {
  return (
    <div className="my-10 lg:my-14 max-w-7xl mx-auto">
      <div>
        <DynamicTitle
          subHeading={"From 11 am to 10 pm"}
          Heading={"Online Order"}
        ></DynamicTitle>
      </div>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={image1} alt="" />
            <p className="text-3xl font-medium -mt-20 text-white text-center">
              Salad
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="" />
            <p className="text-3xl font-medium -mt-20 text-white text-center">
              Sups
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="" />
            <p className="text-3xl font-medium -mt-20 text-white text-center">
              Desertes
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} alt="" />
            <p className="text-3xl font-medium -mt-20 text-white text-center">
              Sweet
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image5} alt="" />
            <p className="text-3xl font-medium -mt-20 text-white text-center">
              patata
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySwiper;