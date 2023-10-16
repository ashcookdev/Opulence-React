import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listLocations } from "../queries";
import { useLocation, useNavigate } from "react-router-dom";
import {CalendarDaysIcon, ClockIcon, HomeIcon, UserCircleIcon} from "@heroicons/react/24/outline";
import Payments from "./payment";

export default function Example() {
  const location = useLocation();
  const product = location.state && location.state.product ? location.state.product : {};

  console.log(product);


  const [response, setResponse] = useState([]);
  const [locations, setLocation] = useState(null);
  const [next, setNext] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});


  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const result = await API.graphql(graphqlOperation(listLocations));
        setResponse(result.data.listLocations.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLocations();
  }, []);

  


  const handleLocationClick = (location, product) => {
    setLocation(location);
    setSelectedProduct(product)
    setNext(true);
  };

  if (next === true) {
    return <Payments location={locations} product={selectedProduct} />;
  }

  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-green-100 to-emerald-100 shadow overflow-hidden sm:rounded-lg">
      <div
        className="bg-white px-6 py-24 sm:py-32 lg:px-8 bg-cover"
        style={{ backgroundImage: `url('https://media.giphy.com/media/aRcpxlaHW0ujZrSERQ/giphy.gif')` }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{product.Name}</h2>
          <h4 className="mt-5 text-xl text-black">£{product.Price}</h4>
          <p className="mt-6 text-lg leading-8 text-gray-600">Please Pick Your Location, Date and Time</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-5">
        {response.map((location) => (
          <div
            key={location.Date}
            className="relative flex flex-col space-y-3 rounded-lg border border-purple-800 bg-gradient-to-r from-white to-green-100 px-6 py-5 shadow-lg hover:shadow-xl focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2" // Add a green gradient background
          >
            <div className="flex items-center space-x-2">
              <CalendarDaysIcon className="h-5 w-5 text-black" /> {/* Add an icon */}
              <div className="text-sm font-medium text-black">{location.Date}</div>
            </div>
            <div className="min-w-0 flex-1">
              <a href="#" className="focus:outline-none" onClick={() => handleLocationClick(location, product)}>
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="truncate text-sm text-black">
                  <ClockIcon className="h-5 w-5 inline-block mr-1 text-gray-400" /> {/* Add an icon */}
                  {location.Time}
                </p>
                <p className="truncate text-sm text-black">
                  <HomeIcon className="h-5 w-5 inline-block mr-1 text-gray-400" /> {/* Add an icon */}
                  {location.Location}
                </p>
                <p className="truncate text-sm text-black">
                  <UserCircleIcon className="h-5 w-5 inline-block mr-1 text-gray-400" /> {/* Add an icon */}
                  Kayleigh Stanley
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}