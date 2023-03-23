import React from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const CheckOut = () => {
  const { id } = useParams();
  const price = parseInt(id) * 100;

  const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} />
      </Elements>
    </div>
  );
};

export default CheckOut;
