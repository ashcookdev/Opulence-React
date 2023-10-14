
import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { CreateLocation } from '../queries';
import { listLocations } from '../queries';
import Locations from './locations';

export default function Example() {
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [response, setResponse] = useState([]);
    const [date, setDate] = useState('');




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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const locationDetails = { Location: location, Time: time, Date: date };
    try {
      await API.graphql(graphqlOperation(CreateLocation, { input: locationDetails }));
      console.log('Location created successfully');
    } catch (error) {
      console.error('Error creating location:', error);
    }
  };


  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
    <form onSubmit={handleSubmit}>
      <div className="isolate -space-y-px rounded-md shadow-sm">
        <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
          <label htmlFor="name" className="block text-xs font-medium text-gray-900">
            Location
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Maidstone"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
          <label htmlFor="job-title" className="block text-xs font-medium text-gray-900">
            Time
          </label>
          <input
            type="time"
            name="time"
            id="time"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
          <label htmlFor="job-title" className="block text-xs font-medium text-gray-900">
            Date
          </label>
          <input
            type="text"
            name="date"
            id="date"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
            

        <button         className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
 type="submit">Submit</button>
      </div>
    </form>
<Locations/>
    </div>

  );
};

