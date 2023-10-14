import { useEffect, useState } from "react"
import { API, graphqlOperation } from 'aws-amplify'
import { listProducts } from '../queries'

export default function LipFiller() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await API.graphql(graphqlOperation(listProducts, {
          filter: {
            Category: {
              eq: 'Packages'
               // Replace with the actual category name
            }
          }
        }))
        const lipFillerProducts = productsData.data.listProducts.items
        setProducts(lipFillerProducts)
      } catch (error) {
        console.error("Error fetching products", error)
      }
    }

    fetchProducts()
  }, [])






    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>
          <div className="bg-white bg-cover mb-10 text-white px-6 py-24 sm:py-32 lg:px-8" style={{ backgroundImage: `url('https://media.giphy.com/media/3o6vXNNFWnpv1sTfvq/giphy.gif')` }}>
  <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Packages</h2>
  </div>
</div>



  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                  <img
                    src={product.ImageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                  <h3>{product.Name}</h3>
                  <p>£{product.Price}</p>
                </div>
                <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  