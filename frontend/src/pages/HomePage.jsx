import React from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listProducts } from '../queries'
import { useState, useEffect } from 'react'
import { Storage } from 'aws-amplify'


export default function Example() {

  // get video from S3

  const [categories, setCategories] = useState({})
  const [video, setVideo] = useState(null)
  const [imageUrl, setImageUrl] = useState({})

  console.log(categories)

  useEffect(() => {
    Storage.get('72febb4d-9ac7-4244-b6be-32c8efc8abcf.mp4')
      .then(url => {
        setVideo(url);
        console.log(url)
      })
      .catch(err => console.error(err));
  }, []);


  



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await API.graphql(graphqlOperation(listProducts))
        const products = productsData.data.listProducts.items

        // Group products by category
        const categories = products.reduce((acc, product) => {
          if (!acc[product.Category]) {
            acc[product.Category] = []
          }
          acc[product.Category].push(product)
          return acc
        }, {})

        // Set the categories in state
        setCategories(categories)
      } catch (error) {
        console.error("Error fetching products", error)
      }
    }

    fetchProducts()

  }, [])



  const fetchImage = async (imageName) => {
    try {
      const imageData = await Storage.get(imageName);
      setImageUrl(prevState => ({
        ...prevState,
        [imageName]: imageData
      }));
    } catch (error) {
      console.log("Error fetching image", error);
    }
  }

  useEffect(() => {
    fetchImage('wrinkle.gif');
    fetchImage('face.gif');
    fetchImage('lips.gif');
  }, []);
  

  

  
  

  return (
<div className="bg-gradient-to-b from-white to-white px-6 py-24 sm:py-32 lg:px-8 w-full">
  <div className="mx-auto">
  <video controls>
  {video && <source src={video} type="video/mp4" />}
</video>

  </div>


    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Shop by Category</h2>
          <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <img
              src={imageUrl['lips.gif']} alt="Wrinkle" 

              className="object-cover object-center group-hover:opacity-75"
            />
            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
            <div className="flex items-end p-6">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="/lipfiller">
                    <span className="absolute inset-0" />
                    Lip Filler
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
             <img src={imageUrl['wrinkle.gif']} alt="Wrinkle"

              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="./antiwrinkle">
                    <span className="absolute inset-0" />
                    Anti-Wrinkle
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
              <img src={imageUrl['face.gif']} alt="Wrinkle"

              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="./face">
                    <span className="absolute inset-0" />
Face                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
   






    </div>
  )
}
