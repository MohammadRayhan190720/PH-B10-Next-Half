import React from 'react';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import Feedback from './Feedback';

const Home = () => {
  const services = useLoaderData();
  console.log(services)
  const {serviceData , feedbackData} = services;
  console.log(serviceData , feedbackData)
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {serviceData.slice(0, 4).map((data) => (
          <ServiceCard key={data.id} data={data}></ServiceCard>
        ))}
      </div>
      <div className="text-center mt-9">
        <Link to="/alltreatment" className="px-7 py-4 text-white bg-green-600 ">
          All Treatment
        </Link>
      </div>

      <div className="mt-10 lg:mt-16">
        <h3 className="text-center font-bold text-3xl mt-5 ">
          Our Happy Customar Says{" "}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
          {feedbackData.map((feedback) => (
            <Feedback key={feedback.reviewId} feedback={feedback}></Feedback>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;