import React, { useState, useEffect } from "react";
import backVideo from "../assets/home_page__video.mp4";
import Loading from "./Loading";

function Home() {
  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 1000);
  return load ? (
    <Loading />
  ) : (
    <div className="hero min-h-screen">
      <div
        className="relative flex h-screen  
        flex-col items-center justify-center overflow-hidden font-inter text-white"
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

        <div className="hero-overlay z-20 m-4 bg-opacity-60 text-center text-2xl font-medium tracking-wide ">
          A NITA Club
        </div>
        <div className="hero-content text-neutral-content z-20 text-center">
          <div className="mx-auto my-auto max-w-lg ">
            <h1 className="mb-5 text-5xl font-bold">Civil Services Society</h1>
            <p className="mb-5 px-4">
              Ready to embark on your journey to becoming a future leader? Take
              the first step and join the CSS today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
