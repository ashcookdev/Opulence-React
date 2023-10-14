import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Checkoutform";

const Payment = ({ product, location}) => {

    console.log(product);
    console.log(location);
    const [stripePromise, setStripePromise] = useState(null);
    const [testKey, setTestKey] = useState(null);

    console.log(testKey);


    const fetchStripePromise = async () => {
        // stringify the key to avoid the uncaught error: Converting circular structure to JSON
        //
        const stripePublishableKey = "pk_live_51MgaIWALuc7gDSm4LOXIhKSElCnpHkx4jvcnICxbkoMCJ8sS072ZjEvI02PKF7r6epDNkL0P08wJv5EfbZQUc3KO00G9CVobst";
        setTestKey(stripePublishableKey);


        console.log(stripePublishableKey);

        const stripePromise = loadStripe(stripePublishableKey);
        setStripePromise(stripePromise);
    };

    // console.log(stripePromise);

    useEffect(() => {
        fetchStripePromise();
    }, []);

    return (
        <div>

            {stripePromise ? (
                <Elements stripe={stripePromise}>
                    {product && <CheckoutForm product= {product} productId={product.StripeID} location={location} />}
                </Elements>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Payment;
