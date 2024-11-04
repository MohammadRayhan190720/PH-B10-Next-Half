

const Headings = ({title,subTilte}) => {
  return (
    <div className="mt-10 space-y-4"> 

      <h2 className="text-center text-4xl font-thin ">{title}</h2>
      <p className="text-center font-thin text-xl">{subTilte}</p>
      
    </div>
  );
};

export default Headings;