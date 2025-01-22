import DynamicTitle from "../../components/shared/DynamicTitle";

const Payment = () => {


//todo: add publishable key
const stripePromise =loadStripe('')
  return (
    <div>
      <DynamicTitle Heading={'Payment'} subHeading={'Please Pay Frist'}></DynamicTitle>
      
    </div>
  );
};

export default Payment;