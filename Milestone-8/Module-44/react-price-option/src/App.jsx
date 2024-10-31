
import './App.css'
import Chart from './component/Chart/Chart';
import DaisyNav from './component/DaisyNav/DaisyNav';
import Navbar from './component/Navbar/Navbar';
import PriceOptions from './component/PriceOptions/PriceOptions';
import BarChart from './component/BarChart/BarChart';
import ChartBar from './component/ChartBar/ChartBar';
import Phones from './component/Phones/Phones';
import Slider from './component/Slider/Slider';

function App() {
 

  return (
    <>
    <DaisyNav></DaisyNav>
    <Navbar></Navbar>

    <PriceOptions></PriceOptions>

    <Chart></Chart>

    <BarChart></BarChart>

    <ChartBar></ChartBar>

    <Phones></Phones>

    <Slider></Slider>

    </>
  );
}

export default App
