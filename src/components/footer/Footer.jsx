import logo from "../../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-black py-12 text-white">
      <div className="container mx-auto flex flex-wrap justify-between px-4">
        {/* Column 1 */}
        <div className="mb-8 w-full md:w-1/3 md:text-center">
          <div className="mb-4 flex flex-col items-center justify-center">
            <img
              src={logo}
              alt="Logo"
              className="mb-4 w-32 cursor-pointer rounded-full"
            />
            <h2 className="ml-2 text-xl font-bold">
              CIVIL SERVICE SOCIETY
              <br />
              <span className="text-sm">NIT AGARTALA</span>
            </h2>
          </div>
          {/* <hr className="w-12 h-1 font-bold"></hr> */}
          <br />
          <div className=" flex flex-col items-center">
            <p>
              <strong>EMPOWER</strong>
            </p>
            <p>
              <strong>INSPIRE</strong>
            </p>
            <p>
              <strong>TRANSFORM</strong>
            </p>
          </div>
        </div>
        {/* Column 2 */}
        <div className="mb-4 w-full md:w-1/3 md:text-center">
          <div className="mt-40">
            <h4 className="mb-1 text-xl font-bold">Follow Us</h4>
            {/* <hr className="w-12 font-bold" /> */}
            {/* <br /> */}
            <div className="flex flex-col justify-between items-center">
              <div className="flex flex-col justify-between items-start  gap-2 pt-4">
                <a href="" className="text-lg">
                  <i
                    className="fa fa-facebook-square pr-2 text-xl"
                    aria-hidden="true"
                  ></i>
                  Facebook
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
        </div>
        {/* Column 3 */}
        <div className="mb-8 w-full md:w-1/3 md:text-center">
          <h4 className="mb-3 text-lg font-bold">Get Notified</h4>
          {/* <hr className="w-12 font-bold" /> */}
          <br />
          <p className="mt-4">
            Be the first to know about the activities of Public Policy and
            Governance
          </p>
          <div className="pt-10">
            <form action="">
              <input
                type="email"
                className="mb-4 h-10 w-full p-2 text-black outline-none md:w-56"
                placeholder="Type Email"
              />
              <button className="h-11 w-12 bg-orange-500 leading-6 text-black">
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
