import DynamicTitle from "./shared/DynamicTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from 'swiper/modules';
import { useState } from "react";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {

  const [review,setReview] = useState([])

  axios.get('/reviews.json')
  .then(res => {
    setReview(res.data)
  })


  return (
    <div className="mt-10 max-w-7xl mx-auto">
      <DynamicTitle
        subHeading={"What Our Clients Say"}
        Heading={"TESTIMONIALS"}
      ></DynamicTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {review.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="text-center px-20 py-16 space-y-5 flex items-center flex-col justify-center">
              <Rating style={{ maxWidth: 180 }} value={item.rating} readOnly />
              <p className="text-5xl font-bold">
                <FaQuoteLeft />
              </p>
              <p>{item.details}</p>
              <p className="text-yellow-500 font-bold text-3xl ">{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;