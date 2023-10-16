import React, { useState, Fragment, useEffect } from 'react';
import Stripe from 'stripe';
import { Popover, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { graphqlOperation } from 'aws-amplify';
import { listProducts } from '../queries';
import { API } from 'aws-amplify';






const stripe = Stripe("pk_live_51MgaIWALuc7gDSm4LOXIhKSElCnpHkx4jvcnICxbkoMCJ8sS072ZjEvI02PKF7r6epDNkL0P08wJv5EfbZQUc3KO00G9CVobst");

function CheckoutForm({ productId, location }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expMonth, setExpMonth] = useState('');
    const [expYear, setExpYear] = useState('');
    const [cvc, setCvc] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [product, setProducts] = useState({});
    const [imageUrl, setImageUrl] = useState({});


useEffect(() => {
    const fetchProducts = async () => {
        try {
            const result = await API.graphql(graphqlOperation(listProducts, { filter: { StripeID: { eq: productId } } }));
            setProducts(result.data.listProducts.items);
        } catch (error) {
            console.log(error);
        }
    };
    fetchProducts();
}, []);










    


    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("test");

        try {
            const { token } = await stripe.createToken({
                card: {
                    number: cardNumber,
                    exp_month: expMonth,
                    exp_year: expYear,
                    cvc: cvc,
                },
            });

            console.log(token); 

            const response = await fetch('/charge', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    token: token.id,
                    productId: productId,
                }),
            });

            if (response.ok) {
                // Display success message to customer
            } else {
                // Display error message to customer
                const errorResponse = await response.json();
                setErrorMessage(errorResponse.error.message);
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    // turn products into a array 


    return (

    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-400 via-green-200 to-emerald-900">
      {/* Background color split screen for large screens */}
      <div className="fixed left-0 top-0 hidden h-full w-1/2 bg-white lg:block" aria-hidden="true" />
      <div className="fixed right-0 top-0 hidden h-full w-1/2 bg-gray-50 lg:block" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 xl:gap-x-48">
        <h1 className="sr-only">Order information</h1>

        <section
          aria-labelledby="summary-heading"
          className="bg-gray-50 px-4 pb-10 pt-16 sm:px-6 lg:col-start-2 lg:row-start-1 lg:bg-transparent lg:px-0 lg:pb-16"
        >
          <div className="mx-auto max-w-lg lg:max-w-none">
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              Order summary
            </h2>

            <ul role="list" className="divide-y divide-gray-200 text-sm font-medium text-gray-900">
                {Object.values(product).map((product) => (
                    <li key={product.id} className="flex items-start space-x-4 py-6">
                        
                        <div className="flex-auto space-y-1">
                            <h3>{product.Name}</h3>
                            <h3>{location.Time}</h3>
                            <p className="text-gray-500">{location.Date}</p>
                            <p className="text-gray-500">{location.Location}</p>
                        </div>
                        <p className="flex-none text-base font-medium">£{product.Price}</p>
                    </li>
                ))}
            </ul>
            {Object.values(product).map((product) => (

            <dl className="hidden space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-900 lg:block">
              <div key={product.id} className="flex items-center justify-between">
                <dt className="text-gray-600">Deposit</dt>
                <dd>£{Number(product.Price) / 2 }</dd>
              </div>

         

            

              <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                <dt className="text-base">Total</dt>
                <dd className="text-base">£{product.Price}</dd>
              </div>
            </dl>
            ))}

{Object.values(product).map((product) => (

            <Popover className="fixed inset-x-0 bottom-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden">
              <div key={product.id} className="relative z-10 border-t border-gray-200 bg-white px-4 sm:px-6">
                <div className="mx-auto max-w-lg">
                  <Popover.Button className="flex w-full items-center py-6 font-medium">
                    <span className="mr-auto text-base">Total</span>
                    <span className="mr-2 text-base">{product.Price}</span>
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                  </Popover.Button>
                </div>
                
              </div>

              <Transition.Root as={Fragment}>
                <div>
                  <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Popover.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="translate-y-full"
                    enterTo="translate-y-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-y-0"
                    leaveTo="translate-y-full"
                  >
                    <Popover.Panel className="relative bg-white px-4 py-6 sm:px-6">
                      <dl className="mx-auto max-w-lg space-y-6">
                        <div className="flex items-center justify-between">
                          <dt className="text-gray-600">Deposit</dt>
                          <dd>£{Number(product.Price) / 2 }</dd>
                        </div>

                    

                      </dl>
                    </Popover.Panel>
                  </Transition.Child>
                </div>
              </Transition.Root>
            </Popover>
            ))}
          </div>
        </section>


        <form onSubmit={handleSubmit} className="px-4 pb-36 pt-16 sm:px-6 lg:col-start-1 lg:row-start-1 lg:px-0 lg:pb-16">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <button
              type="button"
              className="block w-full text-left border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
            >
              Back
            </button>

            <section aria-labelledby="contact-info-heading">
              <h2 id="contact-info-heading" className="text-lg font-medium text-gray-900">
                Terms and Conditions
              </h2>
              <p className="mt-1 text-sm text-gray-600">
I Confirm that I am over the age of 18 and i am not Pregnant. By clicking continue you accept these conditions.              </p>




              <div className="mt-6">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Email address 
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email-address"
                    name="email-address"
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
              </div>
            </section>

            <section aria-labelledby="payment-heading" className="mt-10">
              <h2 id="payment-heading" className="text-lg font-medium text-gray-900">
                Payment details
              </h2>

              <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4">
                <div className="col-span-3 sm:col-span-4">
                  <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
                    Name on card
                  </label>
                  <div className="mt-1">
                    <input onChange={(event) => setName(event.target.value)}

                      type="text"
                      id="name-on-card"
                      name="name-on-card"
                      autoComplete="cc-name"
                      value={name}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />


                  </div>
                </div>

                <div className="col-span-3 sm:col-span-4">
                  <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                    Card number
                  </label>
                  <div className="mt-1">
                    <input
                    onChange={(event) => setCardNumber(event.target.value)}
                      type="text"
                      id="card-number"
                      name="card-number"
                      autoComplete="cc-number"
                      value={cardNumber}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-3">
                  <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                    Expiration date (YY)
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="expiration-date"
                      id="expiration-date"
                      autoComplete="cc-exp"
                        value={expMonth}
                        onChange={(event) => setExpMonth(event.target.value)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-3">
                  <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                    Expiration date (YY)
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="expiration-date"
                      id="expiration-date"
                      autoComplete="cc-exp"
                        value={expYear}
                        onChange={(event) => setExpYear(event.target.value)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                    CVC
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="cvc"
                      id="cvc"
                      autoComplete="csc"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={cvc}
                        onChange={(event) => setCvc(event.target.value)}
                    />
                  </div>
                </div>
              </div>
            </section>

           
            

            <div className="mt-10 border-t border-gray-200 pt-6 sm:flex sm:items-center sm:justify-between">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:order-last sm:ml-6 sm:w-auto"
              >
                Continue
              </button>
              <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
                You won't be charged until the next step.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}


export default CheckoutForm;
