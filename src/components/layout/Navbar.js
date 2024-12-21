import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useCart } from '../../context/CartContext';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const { cartItemsCount } = useCart();

  return (
    <Disclosure as="nav" className="bg-white shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Link 
                    to="/" 
                    className="text-2xl font-bold text-primary-500 hover:text-primary-600 transition-colors duration-300"
                  >
                    Natorina
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-secondary-600 hover:border-primary-500 hover:text-primary-500 transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center">
                <Link
                  to="/cart"
                  className="group -m-2 flex items-center p-2 relative"
                >
                  <ShoppingCartIcon
                    className="h-6 w-6 flex-shrink-0 text-secondary-400 group-hover:text-primary-500 transition-colors duration-300"
                    aria-hidden="true"
                  />
                  {cartItemsCount > 0 && (
                    <span className="animate-scale-up absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary-500 flex items-center justify-center">
                      <span className="text-xs font-medium text-white">
                        {cartItemsCount}
                      </span>
                    </span>
                  )}
                </Link>

                <div className="flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-secondary-400 hover:bg-secondary-100 hover:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-all duration-300">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden animate-slide-down">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-secondary-600 hover:border-primary-500 hover:bg-secondary-50 hover:text-primary-500 transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
} 