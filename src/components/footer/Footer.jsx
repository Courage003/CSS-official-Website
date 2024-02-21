import logo from "../../assets/logo.jpg";
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 text-white">
      <div className="container mx-auto flex flex-wrap justify-around px-4 sm:flex-row">
        {/* Column 1 */}
        <div className="mb-8 w-full md:w-1/3 md:text-center">
          <div className="mb-4 flex flex-col items-center justify-center">
            <img
              src={logo}
              alt="Logo"
              className="mb-4 w-32 cursor-pointer rounded-full"
            />
            <h2 className="mb-1 text-xl font-bold">Civil Services Society</h2>

            <span className="text-sm font-semibold">NIT AGARTALA</span>
          </div>
          {/* <hr className="w-12 h-1 font-bold"></hr> */}
          <br />
          <div className=" flex flex-col items-center font-inter text-sm">
            <p>EMPOWER</p>
            <p>INSPIRE</p>
            <p>TRANSFORM</p>
          </div>
        </div>
        {/* Column 2 */}
        <div className="mb-4 w-full md:w-1/3 md:text-center">
          <div className="mt-10 flex flex-col items-center justify-between sm:mt-20">
            <h4 className="mb-1 text-2xl font-bold">Follow Us</h4>
            {/* <hr className="w-12 font-bold" /> */}

            <div className="flex flex-col items-start justify-between  gap-2 pt-4">
              <a href="" className="text-lg">
                <i
                  className="fa fa-linkedin pr-2 text-xl"
                  aria-hidden="true"
                ></i>
                LinkedIn
              </a>
              <a href="" className="text-lg">
                <i className="fa-brands fa-x-twitter pr-2 text-xl"></i>
                Twitter
              </a>
              <a href="" className="text-lg">
                <i className="fa-brands fa-instagram pr-2 text-xl"></i>
                Instagram
              </a>
            </div>
          </div>
        </div>
        {/* Column 3 */}
        <div className="mb-8 mt-10 w-full flex flex-col items-center text-center sm:mt-20 md:w-1/3">
          <h4 className="mb-1 text-2xl font-bold">Get Notified</h4>
          {/* <hr className="w-12 font-bold" /> */}

          <p className="mx-6 mt-4 text-lg max-w-60">
            Be the first to know about the activities of Public Policy and
            Governance
          </p>
          <div className="pt-6">
            <form
              action=""
              className="flex flex-row items-center justify-center"
            >
              <input
                type="email"
                className="h-10 w-56 rounded-l-md border border-gray-300 px-4 focus:border-blue-300 focus:outline-none focus:ring"
                placeholder="Type Email"
              />
              <button className="flex h-10 w-12 items-center justify-center rounded-r-md bg-orange-500 text-white">
                <i className="fas fa-envelope"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
