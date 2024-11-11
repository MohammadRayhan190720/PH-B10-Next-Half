import { createContext } from "react";
import Dad from "./Dad";
import Uncle from "./Uncle";
import Unty from "./Unty";

export const AssetContext = createContext("diamond");
const Grandpa = () => {


  const asset = 'gold';
  return (
    <div className="border">
      <h2 className="border">GrandFather</h2>
      <AssetContext.Provider value="diamond">
        <div className="flex gap-5">
          <Dad asset={asset}></Dad>
          <Uncle asset={asset}></Uncle>
          <Unty></Unty>
        </div>
      </AssetContext.Provider>
    </div>
  );
};

export default Grandpa;
