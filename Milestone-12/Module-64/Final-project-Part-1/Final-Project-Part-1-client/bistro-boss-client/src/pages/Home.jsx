import AddVetage from "../components/AddVetage";
import Banner from "../components/Banner";
import CategorySwiper from "../components/CategorySwiper";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner></Banner>
      <CategorySwiper></CategorySwiper>
      <AddVetage></AddVetage>      
    </div>
  );
};

export default Home;