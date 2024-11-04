import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Headings from "../components/Headings";
import Category from "../components/Category";

const Home = () => {

  const categorys = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      
      <Headings title={'Browse Coffee By Category'} subTilte={'Choose Your Desired Coffee Category to Browse through specific coffees that fit in you taste'}></Headings>

      <Category categorys={categorys}></Category>

      <Outlet></Outlet>
    </div>


  );
};

export default Home;