
import './App.css'
import Chart from './component/Chart/Chart';
import DaisyNav from './component/DaisyNav/DaisyNav';
import Navbar from './component/Navbar/Navbar';
import PriceOptions from './component/PriceOptions/PriceOptions';

function App() {
 

  return (
    <>
    <DaisyNav></DaisyNav>
    <Navbar></Navbar>

    <PriceOptions></PriceOptions>

    <Chart></Chart>

    </>
  );
}

export default App
