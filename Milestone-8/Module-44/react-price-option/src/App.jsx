
import './App.css'
import Chart from './component/Chart/Chart';
import DaisyNav from './component/DaisyNav/DaisyNav';
import Navbar from './component/Navbar/Navbar';
import PriceOptions from './component/PriceOptions/PriceOptions';
import BarChart from './component/BarChart/BarChart';
import ChartBar from './component/ChartBar/ChartBar';

function App() {
 

  return (
    <>
    <DaisyNav></DaisyNav>
    <Navbar></Navbar>

    <PriceOptions></PriceOptions>

    <Chart></Chart>

    <BarChart></BarChart>

    <ChartBar></ChartBar>

    </>
  );
}

export default App
