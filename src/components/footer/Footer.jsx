import ItemsContainer from "./ItemsContainer";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md: md: md: sm: px- 4 flex items-center justify-between bg-[#ffffff19] px-12 py-7 ">
        <h1 className="md: mb-6 w-2/5 text-3xl font-semibold md:mb-0 lg:text-4xl lg:leading-normal">
          <span className="text-teal-400">Let's</span> Crack it !
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter your query"
            className="focus: mb-4 mr-1 w-full rounded px-2 py-2.5 text-gray-800 outline-none sm:mr-5 sm:w-72 lg:mb-0 "
          />
          <button className="duration- 300 md: w-auto rounded-md bg-teal-400 px-5 py-2.5 font-[Poppins] text-white hover:bg-teal-500">
            {" "}
            Submit{" "}
          </button>
        </div>
      </div>
      <ItemsContainer />
    </footer>
  );
};

export default Footer;
