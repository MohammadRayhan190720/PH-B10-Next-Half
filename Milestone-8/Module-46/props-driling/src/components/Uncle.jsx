import Cousin from "./Cousin";

const Uncle = ({name,asset}) => {
  return (
    <div className="border">
      <h3>Uncle</h3>
      <Cousin asset={asset} name={'ANik'}></Cousin>
      <Cousin name={'naim'}></Cousin>
      
    </div>
  );
};

export default Uncle;