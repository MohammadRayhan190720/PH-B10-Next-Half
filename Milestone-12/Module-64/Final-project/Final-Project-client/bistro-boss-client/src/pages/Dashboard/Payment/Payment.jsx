
import DynamicTitle from "../../../components/shared/DynamicTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements} from '@stripe/react-stripe-js'
import CheckOutForm from '../Payment/CheckOutForm'


const Payment = () => {


//todo: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

  return (
    <div>
      <DynamicTitle Heading={"Payment"} subHeading={"Please Pay Frist"}>
      </DynamicTitle>
      <div>
       <Elements stripe={stripePromise}>
        <CheckOutForm/>
       </Elements>

      </div>



    </div>
  );
};

export default Payment;