
import DynamicTitle from "../../../components/shared/DynamicTitle";
import { loadStripe } from "@stripe/stripe-js";


const Payment = () => {


//todo: add publishable key
const stripePromise = loadStripe('')

  return (
    <div>
      <DynamicTitle Heading={"Payment"} subHeading={"Please Pay Frist"}>
      </DynamicTitle>
      <div>
        <Elements
      </div>



    </div>
  );
};

export default Payment;