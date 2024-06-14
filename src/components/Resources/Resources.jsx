import React, { useState } from "react";
import Loading from "../Loading";
import LinkCard from "../UI/LinkCard";
import { links, category } from "../../data/resourceData";
import {motion} from "framer-motion";

function Resources() {
  const [load, setLoad] = useState(true);
  const [currCategory, setCurrCategory] = useState("All");

  setTimeout(() => {
    setLoad(false);
  }, 1000);

  console.log("currCategory", currCategory);
  return load ? (
    <Loading />
  ) : (
    <div>
      <div
        className="w-full p-24 text-center text-white"
        style={{ background: "#000" }}
      >
        <h4 className="text-3xl font-bold sm:text-5xl">#Resources</h4>
        <p>INFORMATION. INTEGRITY. INTENSION.</p>
      </div>

      <section className=" ">
        {/* Category filter */}
        <div className="w-full items-center p-8">
          <div className="flex items-center justify-start pb-2 gap-3 overflow-auto">
            {category.map((cat) => (
              <motion.button
              whileHover={{scale:1.1}}
              transition={{type:"spring",stiffness:500}}
                className={`rounded bg-gray-100 px-4 py-1 hover:bg-gray-300 ${currCategory == cat ? "bg-gray-300" : ""} `}
                onClick={() => setCurrCategory(cat)}                                       
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Display resources*/}
        <div className="m-12 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currCategory === "All" // Use === for strict comparison
            ? links.map((link) => <LinkCard data={link} />)
            : links
                .filter((link) => link.category === currCategory)
                .map((link) => <LinkCard data={link} />)}
        </div>
      </section>
    </div>
  );
}
export default Resources;
