/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  GlobeAltIcon,
  LoginIcon,
  PencilAltIcon,
  MenuIcon,
  WifiIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Fragment } from "react";

const Header = () => {
  <>
    <div className="relative">
      <div className="flex justify-between items-center bg-indigo-900 px-4 py-2 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
        <div className="flex justify-start lg:w-0 lg:flex-1" />
        <nav className="hidden md:flex space-x-5">
          <a
            href="#"
            className="flex text-sm text-white hover:text-gray-900 pr-5"
          >
            <LoginIcon className="w-4 mr-4" />
            Login
          </a>
          <a
            href="#"
            className="flex text-sm text-white hover:text-gray-900 pr-5"
          >
            <PencilAltIcon className="w-4 mr-4" />
            Registro
          </a>
          <a
            href="#"
            className="flex text-sm text-white hover:text-gray-900 pr-5"
          >
            <GlobeAltIcon className="w-4 mr-4" />
            PT
          </a>
        </nav>
      </div>

      <div className="flex justify-between items-center bg-violet-700 opacity-100 max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span className="sr-only">IBLFX</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
              alt=""
            />
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <button
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 
              hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <nav className="hidden md:flex space-x-5">
          <a
            href="#"
            className="text-base font-medium text-white hover:text-gray-900 pr-5 border-r-4 border-white"
          >
            Home
          </a>
          <a
            href="#"
            className="text-base font-medium text-white hover:text-gray-900 pr-5 border-r-4 border-white"
          >
            What we do
          </a>
          <a
            href="#"
            className="text-base font-medium text-white hover:text-gray-900 pr-5 border-r-4 border-white"
          >
            Insights
          </a>
          <a
            href="#"
            className="text-base font-medium text-white hover:text-gray-900 pr-5 border-r-4 border-white"
          >
            Projetos
          </a>
          <a
            href="#"
            className="text-base font-medium text-white hover:text-gray-900 pr-5 border-r-4 border-white"
          >
            Preços
          </a>
          <a
            href="#"
            className="text-base font-medium text-white hover:text-gray-900"
          >
            Dex
          </a>
          <a
            href="#"
            className="ml-10 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r 
                from-pink-600 to-pink-400 bg-origin-border px-4 border border-transparent rounded-full
                text-base font-medium text-white"
          >
            <WifiIcon className="w-4 mr-4" />
            Launch APP
          </a>
        </nav>
      </div>

      <div
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Partners
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Company
                </a>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  <a href="#" className="text-gray-900">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default Header;
