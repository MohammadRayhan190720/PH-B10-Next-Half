import ServiceCard from '../components/ServiceCard';
import { useLoaderData } from 'react-router-dom';

const AllTreatment = () => {
  const servicedata = useLoaderData()
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {servicedata.map((data) => (
          <ServiceCard key={data.id} data={data}></ServiceCard>
        ))}
      </div>

    </div>
  );
};

export default AllTreatment;