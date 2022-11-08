/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import { WindmillContext } from '@windmill/react-ui'
import { Moon, Sun } from './Icons/Icons'

const Nav2 = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { mode, toggleMode } = useContext(WindmillContext) // dark mode

  const navList = [
    { name: 'Home', route: '/' },
    { name: 'Projects', route: '/projects' },
    { name: 'About', route: '/about' },
    { name: 'others', route: 'https://github.com/e-web3' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white dark:text-gray-100 text-black  dark:bg-black z-20">
      <nav
      // className="border-b  border-gray-200 dark:border-gray-800"
      >
        <div className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" flex items-center justify-between h-16">
            <div className="flex items-center">
              <div
                className="flex-shrink-0 cursor-pointer"
                onKeyPress={() => setIsOpen(false)}
                onClick={() => setIsOpen(false)}
                role="button"
                tabIndex={0}
              >
                <Link href="/">
                  <a aria-label="Logo">
                    <svg
                      width="20"
                      height="20"
                      className="w-5 inline-block transition-transform group-hover:rotate-[20deg]"
                      viewBox="0 0 40 40"
                      fill="currentColor"
                    >
                      <g transform="matrix(1.07541,0,0,1.1001,-1.05651,-0.978215)">
                        <path
                          fill="currentColor"
                          d="M13.319,4.13C13.319,4.13 10.313,4.08 9.501,9.535C9.133,13.546 12.568,15.516 14.12,15.497C15.556,15.495 17.638,14.151 17.486,9.765C17.334,5.38 14.98,4.15 13.319,4.13"
                        />
                      </g>
                      <path d="M3.12,15.575C2.626,16.02 0.637,18.024 3.508,22.915C6.379,27.806 8.628,23.888 8.923,23.455C9.218,23.021 11.41,20.306 8.664,16.924C5.918,13.543 3.12,15.575 3.12,15.575Z" />
                      <g transform="matrix(1.00722,0,0,0.981856,-0.205441,0.281328)">
                        <path d="M24.03,4.13C22.048,4.309 20.472,5.325 20.922,9.814C21.373,14.304 24.4,15.613 25.402,15.499C26.404,15.385 28.84,12.521 28.427,9.814C28.013,7.107 26.837,4.296 24.03,4.13Z" />
                      </g>
                      <path d="M32.114,11.35C32.114,11.35 29.196,13.155 30.864,16.589C32.532,20.023 34.677,19.25 36,18.588C37.322,17.927 38.02,14.778 35.931,12.665C33.843,10.551 32.114,11.35 32.114,11.35Z" />
                      <path d="M19.212,17.136C19.212,17.136 12.651,19.306 12.84,25.174C12.888,28.022 10.569,28.548 11.073,32.567C11.727,34.322 12.649,36.92 15.89,36.85C19.131,36.781 19.603,34.354 23.377,32.97C27.151,31.586 31.009,33.828 33.802,31.213C36.596,28.598 35.188,24.468 31.876,22.731C28.564,20.995 24.793,16.327 19.212,17.136Z" />
                    </svg>
                  </a>
                </Link>
              </div>
              <div className=" hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navList.map((item) => (
                    <Link href={item.route} key={item.name}>
                      <a className=" hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900  dark:focus:bg-gray-900 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <button
              type="button"
              aria-label="dark mode"
              onClick={toggleMode}
              className="shadow hidden md:block self-center bg-white hover:bg-gray-100 focus:ring focus:ring-gray-500  dark:bg-black dark:hover:bg-gray-900 focus:outline-none rounded-md p-1.5"
            >
              {mode === 'dark' ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
            </button>
            <div className="-mr-2 flex md:hidden space-x-4">
              {/* <!-- Mobile menu button --> */}
              <button
                type="button"
                aria-label="dark mode"
                onClick={toggleMode}
                className="shadow block md:hidden self-center bg-white hover:bg-gray-100 focus:ring focus:ring-gray-500  dark:bg-black dark:hover:bg-gray-900 focus:outline-none rounded-md p-1.5"
              >
                {mode === 'dark' ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-200 dark:bg-gray-900 inline-flex items-center justify-center p-2 rounded-md dark:text-gray-300 dark:hover:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-400 dark:focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          duration-300
          show={isOpen}
          enter="transition duration-300 ease-out duration-200 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition duration-300 ease-in-out duration-200 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          {(ref) => (
            <div className="border-b dark:border-gray-600 md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navList.map((item) => (
                  <div key={item.name} onClick={() => setIsOpen(!isOpen)} aria-hidden="true">
                    <Link href={item.route}>
                      <a className=" hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900  dark:focus:bg-gray-900 block px-3 py-2 rounded-md text-sm md:text-base font-medium">
                        {item.name}
                      </a>
                    </Link>{' '}
                  </div>
                ))}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </header>
  )
}

export default Nav2
