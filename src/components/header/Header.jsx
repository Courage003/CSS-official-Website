import React, { useState } from "react";
import Sidemenu from "./Sidemenu";
import logo from "../../assets/logo.jpg"


function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 md:backdrop-blur-sm md:bg-gray-500 md:bg-opacity-10 ">
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-auto rounded-full lg:h-14"
              />
            </a>
          </div>

          <div className="font-inter md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm lg:text-lg">
                <li>
                  <a
                    className="text-zinc-800 transition hover:text-zinc-800/75"
                    href="#"
                  >
                    {" "}
                    About Us{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-zinc-800 transition hover:text-zinc-800/75"
                    href="#"
                  >
                    {" "}
                    Career and Exams{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-zinc-800 transition hover:text-zinc-800/75"
                    href="#"
                  >
                    {" "}
                    Resources{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-zinc-800 transition hover:text-zinc-800/75"
                    href="#"
                  >
                    {" "}
                    Events{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {/* <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="#"
                >
                  Login
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                    href="#"
                  >
                    Register
                  </a>
                </div>
              </div> */}

              <div className="block md:hidden">
                <button
                  onClick={() => {
                    setOpen(!open);
                  }}
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              className={`dark:bg-dark-2 absolute right-4 top-full w-full max-w-[250px] rounded-lg border bg-white px-6 py-3 shadow lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${!open && "hidden"} `}
            >
              <Sidemenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
