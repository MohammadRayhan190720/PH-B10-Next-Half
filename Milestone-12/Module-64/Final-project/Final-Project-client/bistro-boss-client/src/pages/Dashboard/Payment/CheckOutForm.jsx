import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";

const CheckOutForm = () => {

  const [error,setError] = useState('')
  const [clientSecret,setClientSecret] = useState('');
  const [transactionId,setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  const [cart] = useCart();
  const totalPrice = cart.reduce( (total,item) => total + item.price, 0)


  useEffect(() =>{
    axiosSecure.post('/create-payment-intent', {price: totalPrice})
    .then(res => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret)
    })
  },[axiosSecure,totalPrice])

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message)
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError('')
    }

    //confirm payment
    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card: card,
        billing_details:{
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous',

        }
      }
    })
    if(confirmError){
      console.log('confirm error')
    }else{
      console.log('payment_intent',paymentIntent)
      if(paymentIntent.status === 'succeeded'){
        console.log('transactionId',paymentIntent.id)
        setTransactionId(paymentIntent.id)

        //now save the payment in the database
         const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), //utc date convert.use moment js
          cartIds: cart.map(item => item._id),
          menuItemids: cart.map(item => item.menuId),
          status: 'pending',
         }

         const res = await axiosSecure.post('/payments',payment)
         console.log(res.data, 'payment Save')
      }
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="btn btn-secondary my-4" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>

      <p className="text-red-600">{error}</p>
      {
        transactionId && <p className="text-green-600">Transaction Id {transactionId}</p>
      }
    </form>
  );
};

export default CheckOutForm;