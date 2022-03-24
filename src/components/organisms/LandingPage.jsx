/* eslint-disable jsx-a11y/anchor-is-valid */
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

const LandingPage = () => {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
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
        <main>
          <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    <h1 className="mt-4 text-4xl tracking-tight font-bold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-8xl">
                      <span className="block bg-clip-text text-transparent bg-orange-600">
                        Permissioned
                      </span>
                      <span className="pb-3 block sm:pb-5">Digital Assets</span>
                    </h1>
                    <p className="mt-4 text-4xl tracking-tight font-bold text-white sm:mt-1 sm:text-3xl xl:text-4xl">
                      Uma comunidade feita por e para{" "}
                      <span className="text-orange-600">Market Makers</span>
                    </p>
                    <p className="text-base text-white sm:text-xl lg:text-lg xl:text-xl">
                      Aproveite de todos os beneficios dos ativos digitais de
                      forma segura e controlada, com alto ganho e menos riscos.
                    </p>
                    <div className="mt-10 sm:mt-5">
                      <div className="sm:flex">
                        <div className="mt-3 sm:mt-0">
                          <button
                            type="submit"
                            className="whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r 
                              from-pink-600 to-pink-400 bg-origin-border px-12 py-1 border border-transparent rounded-full
                              text-base text-white"
                          >
                            Cadastre-se
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 -mb-16 sm:-mb-0 lg:m-0 lg:relative">
                  <div className="lg:py-10 lg:px-20">
                    <h1 className="flex justify-center mt-4 text-4xl tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-4xl">
                      <span className="font-bold">
                        IBLF
                        <span className="bg-clip-text text-transparent bg-orange-600 font-bold">
                          x
                        </span>
                      </span>
                      <span className="pb-3 block sm:pb-5 sm:pl-3 italic">
                        Tokens
                      </span>
                    </h1>
                    <div className="bg-black rounded-xl px-10 py-4 bg-opacity-50">
                      <p className="text-base text-white sm:text-xl lg:text-lg xl:text-xl">
                        Os tokens IBLFx garantem diversos beneficios para os
                        seus stakers. De AirDrops a possibilidade de criar sua
                        propria Pool.
                      </p>
                      <p className="mt-4 text-4xl tracking-tight font-bold text-white sm:mt-2 sm:text-3xl xl:text-xl">
                        Quanto mais tokens,{" "}
                        <span className="text-orange-600">mais vantagens!</span>
                      </p>
                      <div className="text-orange-600 text-center pt-4">
                        <div className="flex border-b-2 border-orange-600">
                          <WifiIcon className="w-16 p-2 border-r-2 border-orange-600" />
                          <p className="px-6 py-2 border-r-2 border-orange-600">
                            <span className="block">300.000</span> Staked
                          </p>
                          <p className="pl-16 pt-5">Airdrops</p>
                        </div>
                        <div className="flex border-b-2 border-orange-600">
                          <WifiIcon className="w-16 p-2 border-r-2 border-orange-600" />
                          <p className="px-6 py-6 border-r-2 border-orange-600">
                            <span className="block text-sm">1.000.000</span>{" "}
                            Staked
                          </p>
                          <p className="pl-8 pt-2">
                            <span className="block">Airdrops</span>{" "}
                            <span className="block">+</span> Access to Private
                          </p>
                        </div>
                        <div className="flex">
                          <WifiIcon className="w-16 p-2 border-r-2 border-orange-600" />
                          <p className="px-5 py-10 border-r-2 border-orange-600">
                            <span className="block text-sm">+1.000.000</span>{" "}
                            Staked
                          </p>
                          <p className="pl-4 py-2">
                            <span className="block">Airdrops</span>{" "}
                            <span className="block">+</span> Access to Private
                            <span className="block">+</span> Create Liquidity
                            Pools
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="sm:flex sm:justify-center mt-10 sm:mt-5">
                      <button
                        type="submit"
                        className="whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r 
                              from-pink-600 to-pink-400 bg-origin-border px-12 py-1 border border-transparent rounded-full
                              text-base text-white"
                      >
                        Compre Agora!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
