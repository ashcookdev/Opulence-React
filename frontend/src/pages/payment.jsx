import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Checkoutform";
import { loadStripe } from "@stripe/stripe-js";
import { API, graphqlOperation } from "aws-amplify";
import { getProducts } from "../queries";
import { useNavigate } from "react-router-dom";

function Payment({ product, location}) {

  
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [products, setProduct] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [checkbox, setCheckbox] = useState("");
  const [details, setDetails] = useState({});
  const [payment, setPayment] = useState(false);
  const [back, setBack] = useState(false);

  const navigate = useNavigate();

  if (back === true) {
  navigate("/");
  }
    
  


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await API.graphql(graphqlOperation(getProducts, { id: product.id }));
        setProduct(result.data.getProducts);
        console.log(result.data.getProducts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [product]);
  
  // Later in your component
  

const deposit = Number(product.Price) / 2;

console.log(deposit);

  const handleSubmit = async (event) => {

    event.preventDefault();
    setPayment(true);
    const details = {
      name: name,
      email: email,
      telephone: telephone,
      checkbox: checkbox,
    };
    console.log(details);
setDetails(details);  };








  useEffect(() => {
    fetch("/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({price: deposit}),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <>
   
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-green-100 to-emerald-100">
      {/* Background color split screen for large screens */}
      <div className="fixed left-0 top-0 hidden h-full w-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-green-100 to-emerald-100 lg:block" aria-hidden="true" />
      <div className="fixed right-0 top-0 hidden h-full w-1/2 bg-emerald-900 lg:block" aria-hidden="true" />
     

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 lg:pt-16">
           
        <h1 className="sr-only">Checkout</h1>

        <button onClick={()=> setBack(true)} type="button" className="rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
>
        Back 
</button>   

        <section
          aria-labelledby="summary-heading"
          className="bg-indigo-900 py-12 text-indigo-300 md:px-10 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:bg-transparent lg:px-0 lg:pb-24 lg:pt-0"
        >
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>

            <dl>
              <dt className="text-sm font-medium">Amount due today</dt>
              <dd className="mt-1 text-3xl font-bold tracking-tight text-white">£{Number(product.Price) / 2}</dd>
            </dl>

            <ul role="list" className="divide-y divide-white divide-opacity-10 text-sm font-medium">
    <li key={product.id} className="flex items-start space-x-4 py-6">
      <div className="flex-auto space-y-1">
        <h3 className="text-white">{product.Name}</h3>
        <h3 className="text-white">{product.Category}</h3>
        <h3 className="text-white">{location.Date}</h3>

        <h3 className="text-white">{location.Location}</h3>
        <h3 className="text-white">{location.Time}</h3>

      </div>
    </li>


            </ul>

            <dl className="space-y-6 border-t border-white border-opacity-10 pt-6 text-sm font-medium">
              <div className="flex items-center justify-between">
                <dt>Deposit</dt>
                <dd>£{Number(product.Price) / 2}</dd>
              </div>

              
              <div className="flex items-center justify-between border-t border-white border-opacity-10 pt-6 text-white">
                <dt className="text-base">Full Total</dt>
                <dd className="text-base">£{product.Price}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section
          aria-labelledby="payment-and-shipping-heading"
          className="py-16 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:pb-24 lg:pt-0"
        >
          <h2 id="payment-and-shipping-heading" className="sr-only">
            Payment and shipping details
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
              <div>
                <h3 id="contact-info-heading" className="text-lg font-medium text-gray-900">
                  Contact information
                </h3>

                <div className="mt-6">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
Full Name                  </label>
                  <div className="mt-1">
                    <input onChange={(event)=> setName(event.target.value)}
                      type="text"
                      id="name"
                      name="name"
                      value = {name}
                      autoComplete="name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>


                <div className="mt-6">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input onChange={(event)=> setEmail(event.target.value)}
                      type="text"
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      value={email}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="mt-6">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Telephone
                  </label>
                  <div className="mt-1">
                    <input onChange={(event)=> setTelephone(event.target.value)}

                      type="text"
                      id="telephone"
                      name="telephone"
                      autoComplete="telephone"
                      value={telephone}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  </div>
                  </div>
                  <div className="mt-6">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Over 18 and Accept Terms and Conditions
                  </label>
                  <div className="mt-1">
                    
                  <input onChange={()=> setCheckbox("true")}
              id="comments" 
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          yes
          </div>
          
       
                  </div>

                  </div>
                </div>
                <button 
                type="submit"
                className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700"
              >
              Next
              </button>

              </form>
{payment && (
              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900">Payment details</h3>
                {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }} >
        <CheckoutForm product = {products} location = {location} details={details} />
        </Elements>
      )}
              </div>
              )}



                

              
              </section>
              </div>
              </div>

              
     
  


      
    </>
  );
}

export default Payment;
