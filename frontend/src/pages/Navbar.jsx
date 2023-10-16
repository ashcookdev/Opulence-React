import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Storage } from 'aws-amplify'
import { useState } from 'react'
import { Auth } from 'aws-amplify'
import { useNavigate } from 'react-router-dom'







function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  const Navigate = useNavigate()




  // log out function


  async function signOut() {
    try {
      await Auth.signOut();
      Navigate('/')
      window.location.reload();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }



  // get video from S3
  const [logo, setLogo] = useState(null)


useEffect(() => {
    Storage.get('Opulence.PNG')
      .then(url => {
        setLogo(url);
        console.log(url)
      })
      .catch(err => console.error(err));
  }, []);






  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-green-400 hover:bg-green-100 hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-green-900", Default: "border-transparent text-green-800 hover:border-green-800 hover:text-green-800" */}
                  <a
                    href="/"
                    className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-green-900"
                  >
                    Home
                  </a>
                  <a
                    href="./lipfiller"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-green-800 hover:border-green-800 hover:text-green-800"
                  >
                    Lip Filler
                  </a>
                  <a
                    href="./face"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-green-800 hover:border-green-800 hover:text-green-800"
                  >
                    Face
                  </a>
                  <a
                    href="./antiwrinkle"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-green-800 hover:border-green-800 hover:text-green-800"
                  >
                    Anti-Wrinkle
                  </a>
                  <a
                    href="./antiwrinkleinjections"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-green-800 hover:border-green-800 hover:text-green-800"
                  >
                    Anti-Wrinkle Injections
                  </a>
                    <a
                    href="./fatdissolving"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-green-800 hover:border-green-800 hover:text-green-800"
                    >
                    Fat Dissolving
                    </a>
                    <a
                    href="./packages"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-green-800 hover:border-green-800 hover:text-green-800"
                    >
                    Packages
                    </a>
                    <a
                    href="./login"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-green-800 hover:border-green-800 hover:text-green-800"
                    >
                    Login
                    </a>


                </div>

              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-white p-1 text-green-400 hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={logo}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-green-100' : '', 'block px-4 py-2 text-sm text-green-800')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-green-100' : '', 'block px-4 py-2 text-sm text-green-800')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div onClick={signOut}
                            href="#"
                            className={classNames(active ? 'bg-green-100' : '', 'block px-4 py-2 text-sm text-green-800')}
                          >
                            Sign out
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-green-800 hover:bg-green-50 hover:border-green-800 hover:text-green-800" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="./lipfiller"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-green-800 hover:border-green-800 hover:bg-green-50 hover:text-green-800"
              >
                Lip Filler
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/face"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-green-800 hover:border-green-800 hover:bg-green-50 hover:text-green-800"
              >
                Face
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="./antiwrinkle"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-green-800 hover:border-green-800 hover:bg-green-50 hover:text-green-800"
              >
                Anti-Wrinkle
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="./antiwrinkleinjections"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-green-800 hover:border-green-800 hover:bg-green-50 hover:text-green-800"
              >
                Anti-Wrinkle Injections
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="./fatdissolving"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-green-800 hover:border-green-800 hover:bg-green-50 hover:text-green-800"
              >
                Fat Dissolving
              </Disclosure.Button>
                <Disclosure.Button
                    as="a"
                    href="./packages"
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-green-800 hover:border-green-800 hover:bg-green-50 hover:text-green-800"
                >
                    Packages
                </Disclosure.Button>
                <Disclosure.Button
                    as="a"
                    href="./login"
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-green-800 hover:border-green-800 hover:bg-green-50 hover:text-green-800"
                >
                    Login
                </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
