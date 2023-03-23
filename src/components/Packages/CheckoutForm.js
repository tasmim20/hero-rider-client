import React, { useContext, useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ price }) => {
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/create-payment-intent`, {
        price: price,
      })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });

    //   .then((data) => setClientSecret(data.clientSecret));
  }, [price]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    const { error: intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      }
    );

    if (intentError) {
      alert("Your payment processed successfully.");
      navigate("/profile");
    } else {
      alert("Your payment processed successfully.");
      navigate("/profile");
    }
  };

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
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
    </form>
  );
};
export default CheckoutForm;
