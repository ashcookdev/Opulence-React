import { useEffect, useState } from "react"
import { API, graphqlOperation } from 'aws-amplify'
import { listProducts } from '../queries'
import { useNavigate } from "react-router-dom"
import { Storage } from "aws-amplify"

export default function LipFiller() {
  const [products, setProducts] = useState([])
  const [imageUrl, setImageUrl] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categories = ['Fat Dissolving']
        const allProducts = []
  
        for (const category of categories) {
          const productsData = await API.graphql(graphqlOperation(listProducts, {
            filter: {
              Category: {
                eq: category
              }
            }
          }))
          allProducts.push(...productsData.data.listProducts.items)
        }
  
        setProducts(allProducts)
      } catch (error) {
        console.error("Error fetching products", error)
      }
    }
  
    fetchProducts()
  }, [])
  

 
  useEffect(() => {
    products.forEach(product => fetchImage(product));
  }, [products]);

  console.log(products.id)
  
  const fetchImage = async (product) => {
    try {
      const imageData = await Storage.get(product.ImageSrc);
      setImageUrl(prevState => ({
        ...prevState,
        [product.id]: imageData
      }));
    } catch (error) {
      console.log("Error fetching image", error);
    }
  }

  const handleProductClick = (product) => {
    navigate('/locations', { state: { product } });
  }



    return (
      <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-green-100 to-emerald-100">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>
          <div className="bg-white bg-cover mb-10 text-white px-6 py-24 sm:py-32 lg:px-8" style={{ backgroundImage: `url('https://media.giphy.com/media/iYCZ4Dds5HRoA/giphy.gif')` }}>
  <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Fat Dissolving</h2>
  </div>
</div>
  
<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} onClick={() => handleProductClick(product)} className="group cursor-pointer">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                <img
  src={imageUrl[product.id]}
  alt={product.imageAlt}
  className="h-full w-full object-cover object-center group-hover:opacity-75"
/>
                </div>

                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                  <h3>{product.Name}</h3>
                  <p>£{product.Price}</p>
                </div>
                <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  