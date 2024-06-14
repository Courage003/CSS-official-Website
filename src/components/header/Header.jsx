import React, { useState, useEffect, useRef } from "react";
import Sidemenu from "./Sidemenu";
import logo from "../../assets/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import {motion} from "framer-motion";

function Header() {
  const [open, setOpen] = useState(false);
  const sidemenuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !event.target.closest(".block.md\\:hidden") &&
        !event.target.closest(".dark\\:bg-dark-2")
      ) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleSidemenuMouseEnter = () => {
    setOpen(true);
  };

  const handleSidemenuMouseLeave = () => {
    setOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50  md:bg-opacity-0 md:backdrop-blur-sm hover:bg-opacity-60 transition duration-500 md:hover:bg-white  ">
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-auto rounded-full lg:h-14"
              />
            </Link>
          </div>

        <div className="font-inter md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm lg:text-lg">
                <motion.li whileHover={{scale:1.1}}
              transition={{type:"spring",stiffness:500}}>
                  <NavLink
                    to="/"
                    className={({isActive}) => `transition hover:text-amber-700 ${isActive ? "text-amber-900" : "text-zinc-800"}`}
                  >
                    {" "}
                    Home{" "}
                  </NavLink>
                </motion.li>
              <motion.li whileHover={{scale:1.1}}
              transition={{type:"spring",stiffness:500}}>
                  <NavLink
                    to="/about"
                    className={({isActive}) => ` transition hover:text-amber-700 ${isActive ? "text-amber-900" : "text-zinc-800"}`}
                  >
                    {" "}
                    About Us{" "}
                  </NavLink>
                </motion.li>

               <motion.li whileHover={{scale:1.1}}
              transition={{type:"spring",stiffness:500}}>
                  <NavLink
                    to="/career"
                    className={({isActive}) => ` transition hover:text-amber-700 ${isActive ? "text-amber-900" : "text-zinc-800"}`}
                  >
                    {" "}
                    Career and Exams{" "}
                  </NavLink>
                </motion.li>

                <motion.li whileHover={{scale:1.1}}
              transition={{type:"spring",stiffness:500}}>
                  <NavLink
                    to="/resources"
                    className={({isActive}) => ` transition hover:text-amber-700 ${isActive ? "text-amber-900" : "text-zinc-800"}`}
                  >
                    {" "}
                    Resources{" "}
                  </NavLink>
                </motion.li>

               <motion.li whileHover={{scale:1.1}}
              transition={{type:"spring",stiffness:500}}>
                  <NavLink
                    className={({isActive}) => ` transition hover:text-amber-700 ${isActive ? "text-amber-900" : "text-zinc-800"}`}
                    to="/events"
                  >
                    {" "}
                    Events{" "}
                  </NavLink>
                </motion.li>
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
              ref={sidemenuRef}
              onMouseEnter={handleSidemenuMouseEnter}
              onMouseLeave={handleSidemenuMouseLeave}
              onClick={handleSidemenuMouseLeave}
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
