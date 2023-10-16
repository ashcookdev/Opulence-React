import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { API, graphqlOperation } from 'aws-amplify';
import { createProducts } from '../mutations';
import { useNavigate } from 'react-router-dom';

export default function Example() {
  const [open, setOpen] = useState(true)
    const [newName, setNewName] = useState('')
    const [newCategory, setNewCategory] = useState('')
    const [newPrice, setNewPrice] = useState('')
    const [newStripeId, setStripeNewId] = useState('')
    const [newImageSrc, setNewImageSrc] = useState('')
    const Navigate = useNavigate();

    if (!open) {
      Navigate('/editproducts')
    }

    async function handleAddProduct(e) {
        e.preventDefault();
        const product = { Name: newName, Category: newCategory, Price: newPrice, StripeID: newStripeId, ImageSrc: newImageSrc };
        await API.graphql(graphqlOperation(createProducts, { input: product }));
        Navigate('/editproducts')        }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          Add Product
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6"> <form onSubmit={handleAddProduct}>
              <div className="isolate -space-y-px rounded-md shadow-sm">
                <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-indigo-600">
                  <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={newName}
              onChange={(e) => setNewName(e.target.value)}
                    className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder= "Name"
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
                    value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                    className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder= "Category"
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
                        value={newPrice}
                        onChange={(e) => setNewPrice(e.target.value)}
                        className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder= "Price"
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
                        value={newStripeId}
                        onChange={(e) => setStripeNewId(e.target.value)}
                        className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder= "StripeID"
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
                        value={newImageSrc}
                        onChange={(e) => setNewImageSrc(e.target.value)}
                        className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder= "ImageSRC"
                    />
                    </div>
        
                    <button         className=" mt-5 rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Save
                    </button>
                   
        
        
        
        
        
        
              </div>
            </form>
            </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
