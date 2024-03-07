import React, { useEffect, useState } from "react";
import {motion} from "framer-motion"

export default function ScrollUp() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (window.pageYOffset > 200) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  return (
    <div>
      {showScroll && (
        <motion.button initial={{scale:0}} animate={{scale:1}} 
          onClick={scrollTop}
          className="fixed bottom-4 z-30 right-4 rounded-full bg-blue-500 px-4 py-2.5 text-white shadow-md transition duration-300 hover:bg-blue-600 focus:outline-none"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </motion.button>
      )}
    </div>
  );
}
