import React from "react"
import Location from "./location"
import { API, graphqlOperation } from "aws-amplify";
import { listLocations } from "../queries";
import { useEffect, useState } from "react";
import { deleteLocation } from "../mutations";



  
  export default function Example() {

    const [response, setResponse] = useState([]);


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


        const handleDelete = async (id) => {
            try {
              const input = { id };
              const result = await API.graphql(
                graphqlOperation(deleteLocation, { input })
              );
              const deletedLocationId = result.data.deleteLocation.id;
              const newLocations = response.filter(
                (location) => location.id !== deletedLocationId
              );
              setResponse(newLocations);
            } catch (error) {
              console.log(error);
            }
          };














          return (
            <div className="bg-white shadow-lg overflow-hidden sm:rounded-lg max-w-screen-lg mx-auto">
              <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Pick Your Times</h2>
                </div>
              </div>
              <div>
              <Location />

                <div className="mt-8 flow-root">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Location
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Date
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Time
                  </th>
                
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Delete
                    </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {response.map((location) => (
                  <tr key={location.Location}>
                    
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{location.Location}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{location.Date}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{location.Time}</td>
                   
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      

                      <button onClick={()=>{handleDelete(location.id)}}
                          type="button"
                          className="inline-flex items-center px-2 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700 focus:outline-none"
                          >
                          Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>



              </div>

            )
          }
          

  