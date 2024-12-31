import AddVetage from "../components/AddVetage";
import Banner from "../components/Banner";
import CategorySwiper from "../components/CategorySwiper";
import ChefRecomand from "../components/ChefRecomand";
import FeaturedItems from "../components/FeaturedItems";
import PopularMenu from "../components/PopularMenu";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner></Banner>
      <CategorySwiper></CategorySwiper>
      <AddVetage></AddVetage> 
      <PopularMenu></PopularMenu> 
      <ChefRecomand></ChefRecomand> 
      <FeaturedItems></FeaturedItems>   
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;