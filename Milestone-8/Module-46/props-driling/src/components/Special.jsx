import { useContext } from "react";
import { AssetContext } from "./Grandpa";

const Special = ({asset}) => {
  const gift = useContext(AssetContext);
  return (
    <div className="border">
      <h3>Tamanna</h3>
      <p>Just For you : {asset}</p>
      <p>Just For you : {gift}</p>
      
    </div>
  );
};

export default Special;