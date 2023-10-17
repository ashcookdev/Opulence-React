import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { API, graphqlOperation } from "aws-amplify";
import { createBookings } from "../mutations";
import {useNavigate} from 'react-router-dom';

export default function CheckoutForm({location, product, details  }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  console.log(location);
  console.log(product);
  console.log(details);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
  
    setIsProcessing(true);
  
    const { paymentIntent, error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion`,
      },
    });
  
    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occured.");
      }
    } else if (paymentIntent) {
      // Payment was successful
      setMessage("Payment was successful!");
  
      const input = {
        Location: location.Location,
        Time: location.Time,
        Paid: "deposit paid",
        Price: product.Price,
        Treatment: product.Name,
        Date: location.Date,
        Name: details.Name,
        Email: details.Email,
        Telephone: details.Phone,
      };
  
      const result = await API.graphql(graphqlOperation(createBookings, { input }));

      if (result) {
        navigate('/success');
      }
    
  
      
    }
  
    setIsProcessing(false);
  };
  
  

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button         className="rounded-md mt-5 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
 disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
