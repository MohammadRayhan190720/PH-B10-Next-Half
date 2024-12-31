
const DynamicTitle = ({Heading,subHeading}) => {
  return (
    <div>
      <div className=" p-5 text-center space-y-2">
        <p className="text-xl border-y-2 italic w-1/3 mx-auto text-yellow-600">---{subHeading}---</p>
        <h1 className="text-3xl font-bold border-b-2 uppercase w-1/3 mx-auto">{Heading}</h1>
      </div>
      
    </div>
  );
};

export default DynamicTitle;