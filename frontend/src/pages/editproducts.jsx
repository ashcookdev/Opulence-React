import { graphqlOperation, API } from "aws-amplify"
import { useEffect, useState } from "react"
import { listProducts } from "../queries"
import { deleteProducts, updateProducts } from "../mutations"
import { useNavigate } from "react-router-dom"

  
  export default function Example() {

 

    const [response, setResponse] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [name, setName] = useState(editingProduct ? editingProduct.Name : '');
    const [category, setCategory] = useState(editingProduct ? editingProduct.Category : '');
    const [price, setPrice] = useState(editingProduct ? editingProduct.Price : '');
    const [stripeId, setStripeId] = useState(editingProduct ? editingProduct.StripeID : '');
    const [imageSrc, setImageSrc] = useState(editingProduct ? editingProduct.ImageSrc : '');
    const [add, setAdd] = useState(false);


    const Navigate = useNavigate();
    
     

if (add === true) {
    Navigate('/editproducts/add')

    
}
    


    
    console.log(response);


    useEffect(() => {
        const fetchProducts = async () => {

            try {
                const result = await API.graphql(graphqlOperation(listProducts));
                setResponse(result.data.listProducts.items);
                }
            catch (error) {
                console.log(error);
                }
            }
        fetchProducts();
        }
        , []);


        async function handleDelete(productId) {
            try {
              await API.graphql(graphqlOperation(deleteProducts, { input: { id: productId } }));
              // Refresh the products list after a product is deleted
              fetchProducts();
            } catch (error) {
              console.log(error);
            }
          }
          
         
          

          const fetchProducts = async () => {

            try {
                const result = await API.graphql(graphqlOperation(listProducts));
                setResponse(result.data.listProducts.items);
                }
            catch (error) {
                console.log(error);
                }
            }



async function handleSubmit(e) {
  e.preventDefault();
  const product = { id: editingProduct.id, Name: name, Category: category, Price: price, StripeID: stripeId, ImageSrc: imageSrc };
  await API.graphql(graphqlOperation(updateProducts, { input: product }));
  fetchProducts();
  setEditingProduct(null);
}




    async function handleEdit(product) {
        // Set the state variables with the current values of the product
        setName(product.Name);
        setCategory(product.Category);
        setPrice(product.Price);
        setStripeId(product.StripeID);
        setImageSrc(product.ImageSrc);
      
        setEditingProduct(product);
      }






    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name, title, email and role.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button onClick={() => setAdd(true)} 
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Product
            </button>
          </div>
        </div>
       
        

        {editingProduct && (
            
    
<form onSubmit={handleSubmit}>
    <h4 className="text-lg mt-5 mb-5 leading-6 font-medium text-purple-900">{editingProduct.Name}- {editingProduct.Category}</h4>
      <div className="isolate -space-y-px rounded-md shadow-sm">
        <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
          <label htmlFor="name" className="block text-xs font-medium text-gray-900">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
      onChange={(e) => setName(e.target.value)}
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder={editingProduct.Name}
          />
        </div>
        <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
          <label htmlFor="job-title" className="block text-xs font-medium text-gray-900">
           Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            value={category}
        onChange={(e) => setCategory(e.target.value)}
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder={editingProduct.Category}
          />
        </div>
        <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600 mb-5">
            <label htmlFor="email" className="block text-xs font-medium text-gray-900">
                Price
            </label>
            <input
                type="text"
                name="price"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder= {editingProduct.Price}
            />
            </div>
<div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600 mb-5">
            <label htmlFor="email" className="block text-xs font-medium text-gray-900">
                StripeID
            </label>
            <input
                type="text"
                name="stripe"
                id="stripe"
                value={stripeId}
                onChange={(e) => setStripeId(e.target.value)}
                className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder={editingProduct.StripeID}
            />
            </div>
            <div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600 mb-5">
            <label htmlFor="email" className="block text-xs font-medium text-gray-900">
                ImageSRC
            </label>
            <input
                type="text"
                name="image"
                id="image"
                value={imageSrc}
                onChange={(e) => setImageSrc(e.target.value)}
                className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder= {editingProduct.ImageSrc}
            />
            </div>

            <button         className=" mt-5 rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
           






      </div>
    </form>
    
    )}
  
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Category
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Price
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      StripeID
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        ImageSRC
                    </th>

                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {response.map((products) => (
                    <tr key={products.Name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {products.Name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{products.Category}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">£{products.Price}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{products.StripeID}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{products.ImageSrc}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <button className="mr-5 text-blue-600" onClick={() => handleEdit(products)}>Edit</button>
      <button className="text-red-600" onClick={() => handleDelete(products.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  