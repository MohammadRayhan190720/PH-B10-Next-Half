import { Link, useLoaderData } from "react-router-dom";

const Phones = () => {
  const phones = useLoaderData();
  return (
    <div>
    <p>All Phones Hare:{phones.length}</p>
    <div>
      {
        phones.map(phone => <p key={phone.id}> <Link to={`/phone/${phone.id}`}>{phone.name}</Link> </p>)
      }
    </div>
    </div>
  );
};

export default Phones;