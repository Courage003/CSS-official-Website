import React, { useEffect, useState} from "react";
import backVideo from "../assets/home_page__video.mp4";
import Carousel from "./UI/Carousel";
import Loading from "./Loading";
import homePic from "../assets/homepage_pic.png";
import Gallery from "./UI/Gallery";
import { motion} from "framer-motion";

function Home() {
  const bgImage =
    "https://images.unsplash.com/photo-1508615070457-7baeba4003ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  // "https://images.pexels.com/photos/316466/pexels-photo-316466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://current-affairs-api.p.rapidapi.com/current-affairs?country=in";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "7e56c256e2mshe9cf5df927f18aap15112ejsn58f3616cca84",
          "X-RapidAPI-Host": "current-affairs-api.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const filteredValue = result.current_affairs.filter((item) => {
          return item.author && item.urlToImage;
        });
        console.log(filteredValue);
        setData(filteredValue);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 1000);

  return load ? (
    <Loading />
  ) : (
    <div className="hero min-h-screen">
      <div
        className="relative flex h-screen  flex-col items-center
        justify-center overflow-hidden bg-auto bg-center font-inter text-white"
        style={{ backgroundImage: "url(" + homePic + ")" }}
      >
        <video
          src={backVideo}
          autoPlay="{true}"
          loop
          muted
          className="absolute min-h-full  
            w-auto min-w-full max-w-none"
        ></video>
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-tr from-black via-transparent to-transparent opacity-80"></div>
        <div className="absolute right-0 top-0 h-full w-full bg-gradient-to-tl from-black via-transparent to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-br from-black via-transparent to-transparent opacity-80"></div>
        <div className="absolute bottom-0 right-0 h-full w-full bg-gradient-to-bl from-black via-transparent to-transparent opacity-80"></div>

        <motion.div initial={{opacity:0,y:60}} animate={{opacity:1,y:0}} transition={{ duration: 0.7 }}
        className="hero-overlay z-20 m-4 bg-opacity-60 text-center text-2xl font-medium tracking-wide ">
          A NITA Club
        </motion.div>
        <div className="hero-content text-neutral-content z-20 text-center">
          <div className="mx-auto my-auto max-w-lg ">
            <motion.h1 initial={{opacity:0,y:60}} animate={{opacity:1,y:0}} transition={{ duration: 0.7 }} className="mb-5 text-5xl font-bold">Civil Services Society</motion.h1>
            <motion.p initial={{opacity:0,y:60}} animate={{opacity:1,y:0}} transition={{ duration: 0.7,delay:0.5 }} className="mb-5 px-4">
              Ready to embark on your journey to becoming a future leader? Take
              the first step and join the CSS today!
            </motion.p>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center px-8 py-16 text-center text-white sm:p-24"
        style={{ background: "#000" }}
      >
        <motion.h4 initial={{opacity:0, y:"-50%"}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{once:true}} className="text-3xl font-bold sm:text-5xl">#OurMotto</motion.h4>
        <motion.p initial={{opacity:0, y:"50%"}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{once:true}} className="container pt-3 text-justify font-inter text-sm sm:pt-6 sm:text-lg sm:leading-7 lg:w-3/4">
          The CSS Club is dedicated to supporting civil service aspirants by
          offering a platform for engaging discussions and seeking advice on
          various subjects related to civil examinations. Our mission includes
          creating a centralized repository of study materials, book
          recommendations, and online resources crucial for UPSC preparation. In
          addition to providing essential study materials, we organize guest
          lectures and workshops conducted by experienced professionals and
          Civil Service exam toppers. Our aim is to share effective preparation
          tips, exam strategies, and insights to empower our members. We foster
          a collaborative environment where members actively exchange
          information about the latest updates, changes in the UPSC examination
          pattern, and relevant news to ensure everyone stays well-informed. At
          the heart of the CSS Club's theme is the commitment to unveil the
          potential of hidden aspirants, providing them with opportunities to
          contribute meaningfully to the nation's progress.
        </motion.p>
      </div>

      <section
        className="hero flex h-[750px] items-center  justify-center overflow-hidden bg-white bg-cover"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      >
        <div className="container text-xl text-orange-700 ">
          <Carousel value={data} />
        </div>
      </section>

      {/* Gallery */}
      <section className="flex flex-col items-center justify-center gap-8 px-2 py-10 pb-20">
        <div className="font-roboto text-3xl font-bold sm:text-6xl">
          Gallery
        </div>
        <p className="font-inter text-2xl font-semibold opacity-60">
          WITNESS THE AWESOMENESS
        </p>
        <div className="container lg:px-20">
          <Gallery />
        </div>
      </section>
    </div>
  );
}

export default Home;
