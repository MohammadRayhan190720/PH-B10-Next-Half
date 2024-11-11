import Cousin from "./Cousin";

const Uncle = ({name}) => {
  return (
    <div className="border">
      <h3>Uncle</h3>
      <Cousin name={'ANik'}></Cousin>
      <Cousin name={'naim'}></Cousin>
      
    </div>
  );
};

export default Uncle;