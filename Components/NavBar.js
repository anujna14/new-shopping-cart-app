import React, { useState, useRef } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const cart = useSelector((state) => state.cart);
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <nav className="text-black flex flex-col sm:flex-row justify-between pr-10 py-3">
      <Link href="/">
        <h1 className="pl-8 text-3xl font-sans font-bold sm:text-2xl uppercase hover:animate-pulse">
          Pick-Up Point
        </h1>
      </Link>
      <div>
        <div className="relative">
          <ul className="flex invisible  sm:visible">
            <li className="nav-links">
              <span className="sm:nav-span"></span>
              <span className="sm:nav-text invisible sm:visible">
                <Link href="/">Home</Link>
              </span>
              <Link href="/">Home</Link>
            </li>
            <li className="nav-links">
              <span className="sm:nav-span"></span>
              <span className="sm:nav-text invisible sm:visible">
                <Link href="/shop">Shop</Link>
              </span>
              <Link href="/shop">Shop</Link>
            </li>
            <li className="nav-links">
              <span className="sm::nav-span"></span>
              <span className="sm:nav-text invisible sm:visible">
                <Link href="/cart">
                  <p>Cart({getItemsCount()})</p>
                </Link>
              </span>
              <Link href="/cart">
                <p>Cart({getItemsCount()})</p>
              </Link>
            </li>
          </ul>
          {/* for mobile screen */}
          <div className="-mt-[125px]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" absolute -right-4  sm:hidden  h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -right-4  sm:hidden h-12 w-12"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {() => (
            <div className="absolute sm:hidden id=mobile-menu  w-screen">
              <div
                ref={inputRef}
                className="bg-gray-100 px-2 pt-2 pb-3 space-y-1 mt-7 sm:px-3 flex flex-col items-center justify-center shadow-md rounded-b-lg"
              >
                <Link href="/" smooth={true} offset={50} duration={500}>
                  <a className="cursor-pointer hover:bg-gray-300 text-black hover:text-gray-600  px-12 py-2 rounded-md text-base font-medium">
                    Home
                  </a>
                </Link>
                <Link href="/shop" smooth={true} offset={50} duration={500}>
                  <a className="cursor-pointer hover:bg-gray-300 text-black hover:text-gray-600 px-12 py-2 rounded-md text-base font-medium">
                    Shop
                  </a>
                </Link>
                <Link href="/cart" smooth={true} offset={50} duration={500}>
                  <a className="cursor-pointer hover:bg-gray-300 text-black hover:text-gray-600  px-12 py-2 rounded-md text-base font-medium">
                    Cart
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </div>
    </nav>
  );
};

export default Navbar;
