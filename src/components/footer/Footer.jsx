import logo from "../../assets/logo.jpg";
import React from 'react';

const instagram = "https://instagram.com/civil_services.nita";
const twitter = "";
const linkedin = "https://www.linkedin.com/in/civil-services-society-nit-a-25a19b2a3";


const Footer = () => {
  return (
    <footer className="bg-black pt-8 pb-2 sm:pt-12 text-white">
      <div className="container mx-auto flex flex-wrap justify-around px-4">
        {/* Column 1 */}
        <div className="mb-4 w-full md:w-1/3 md:text-center">
          <div className="sm:mb-4 flex flex-col items-center justify-center">
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
          <div className="mt-5 flex flex-col items-center justify-between sm:mt-20">
            <h4 className="mb-1 text-lg sm:text-2xl font-bold">Follow Us</h4>
            {/* <hr className="w-12 font-bold" /> */}

            <div className="flex flex-col text-sm sm:text-lg items-start justify-between gap-1 sm:gap-2 pt-1 sm:pt-4">
              <a href={linkedin} className=" hover:text-sky-700" target="_blank">
                <i
                  className="fa fa-linkedin pr-2"
                  aria-hidden="true"
                ></i>
                LinkedIn
              </a>
              <a href={twitter} className=" hover:text-slate-500" target="_blank">
                <i className="fa-brands fa-x-twitter pr-2"></i>
                Twitter
              </a>
              <a href={instagram} className=" hover:text-pink-600" target="_blank">
                <i className="fa-brands fa-instagram pr-2 "></i>
                Instagram
              </a>
            </div>
          </div>
        </div>
        {/* Column 3 */}
        <div className=" w-full flex flex-col items-center text-center mt-3 sm:mt-20 md:w-1/3">
          <h4 className="mb-1 text-lg sm:text-2xl font-bold">Get Notified</h4>
          {/* <hr className="w-12 font-bold" /> */}

          <p className="mx-6 sm:mt-4 text-xs sm:text-lg max-w-60">
            Be the first to know about the activities of Public Policy and
            Governance
          </p>
          <div className="pt-4 sm:pt-6">
            <form
              action=""
              className="flex flex-row items-center justify-center"
            >
              <input
                type="email"
                className="sm:h-10 h-8 w-36 sm:w-56 rounded-l-md border text-black border-gray-300 px-4 focus:border-blue-300 focus:outline-none focus:ring"
                placeholder="Type Email"
              />
              <button className="flex h-8 sm:h-10 w-8 sm:w-12 items-center justify-center rounded-r-md bg-orange-500 text-white">
                <i className="fas fa-envelope"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="text-xs text-center mt-6">Copyright © | CSS 2024</div>
    </footer>
  );
};

export default Footer;
