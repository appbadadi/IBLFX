/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  LoginIcon,
  PencilAltIcon,
  GlobeAltIcon,
  WifiIcon,
} from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "#" },
  { name: "What we do", href: "#" },
  { name: "Insights", href: "#" },
  { name: "Projetos", href: "#" },
  { name: "Preços", href: "#" },
  { name: "DEX", href: "#" },
];

const Header = () => {
  <>
    <Popover as="header" className="relative">
      <div className="flex justify-between items-center bg-indigo-900 px-4 py-2 sm:px-6 md:justify-start md:space-x-10 lg:px-32">
        <div className="flex justify-start lg:w-0 lg:flex-1" />
        <nav className="hidden md:flex space-x-5">
          <a
            href="#"
            className="flex text-sm text-white hover:text-gray-300 pr-5"
          >
            <LoginIcon className="w-4 mr-4" />
            Login
          </a>
          <a
            href="#"
            className="flex text-sm text-white hover:text-gray-300 pr-5"
          >
            <PencilAltIcon className="w-4 mr-4" />
            Registro
          </a>
          <a
            href="#"
            className="flex text-sm text-white hover:text-gray-300 pr-5"
          >
            <GlobeAltIcon className="w-4 mr-4" />
            PT
          </a>
        </nav>
      </div>
      <div className="bg-gray-900 pt-6">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-teal-200-cyan-400.svg"
                  alt=""
                />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button
                  className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 
                    hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <div className="hidden space-x-8 md:flex md:mr-5">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-white hover:text-gray-300 border-r-2 border-white pr-5"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <a
              href="#"
              className="ml-10 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r 
                from-pink-600 to-pink-400 bg-origin-border px-4 py-1 border border-transparent rounded-full
                text-base font-medium text-white"
            >
              <WifiIcon className="w-4 mr-4" />
              Launch APP
            </a>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg"
                  alt=""
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="px-2 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-6 px-5">
                <a
                  href="#"
                  className="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600
                       text-white font-medium hover:from-teal-600 hover:to-cyan-700"
                >
                  Start free trial
                </a>
              </div>
              <div className="mt-6 px-5">
                <p className="text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <a href="#" className="text-gray-900 hover:underline">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  </>;
};

export default Header;
