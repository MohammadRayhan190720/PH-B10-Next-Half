import { useState,useEffect } from "react";
import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
  const [priceData,setPriceData] = useState([])

  useEffect(() => {
    fetch("./price-option.json")
      .then((res) => res.json())
      .then((data) => setPriceData(data.membershipOptions));
  },[]);
  return (
    <div className="md:flex gap-5">
      {
        priceData.map(prices =><PriceOption key={prices.id} prices ={prices}></PriceOption>)
      }
      
    </div>
  );
};

export default PriceOptions;