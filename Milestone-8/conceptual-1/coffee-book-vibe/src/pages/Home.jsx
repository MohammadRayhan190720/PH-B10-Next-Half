import Banner from "../components/Banner";
import Headings from "../components/Headings";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      
      <Headings title={'Browse Coffee By Category'} subTilte={'Choose Your Desired Coffee Category to Browse through specific coffees that fit in you taste'}></Headings>
    </div>
  );
};

export default Home;