import Brother from "./Brother";
import Myself from "./Myself";
import SIster from "./SIster";

const Dad = ({asset}) => {
  return (
    <div className="border">
      <h2>dad</h2>
      <div className="flex border gap-5">
        <Myself asset = {asset}></Myself>
        <Brother></Brother>
        <SIster></SIster>
      </div>
    </div>
  );
};

export default Dad;