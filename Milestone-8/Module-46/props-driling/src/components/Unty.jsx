import Cousin from "./Cousin";

const Unty = ({name}) => {
  return (
    <div className="border">
      <h3>Unty</h3>
      <Cousin name={"Jebin"}></Cousin>
      <Cousin name={"Munni"}></Cousin>
    </div>
  );
};

export default Unty;