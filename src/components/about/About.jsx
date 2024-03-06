import React, { useState } from "react";
import grp from "../../assets/grpPhoto.jpg";
import Card from "./Card";
import Loading from "../Loading";
import {
  people,
  core,
  tech,
  management,
  graphic,
  research,
  social,
} from "../../data/teamsData";

import {motion, useScroll,useTransform} from "framer-motion"

export default function About() {
  const {scrollY} = useScroll();

  const yText = useTransform(scrollY,[0,200,300,500],[0,50,50,500])

  const bgImage =
    "https://images.pexels.com/photos/7130490/pexels-photo-7130490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 1000);

  return load ? (
    <Loading />
  ) : (
    <section className=" hero mx-auto ">
      <div
        className=" w-full p-24 text-center text-white"
        style={{ background: "#000" }}
      >
        <h4 className="text-3xl font-bold sm:text-5xl">#KnowUs</h4>
        <p>EMPOWER. INSPIRE. TRANSFORM.</p>
      </div>
      <div
        className="mb-12 bg-cover pb-2 pt-12"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      >
        <div className="mb-10 flex flex-col items-center justify-center lg:flex-row">
          <div className="m-10 rounded-lg lg:ml-8 lg:mr-4 lg:w-1/2">
            <img
              src={grp}
              loading="lazy"
              alt="grpPhoto"
              style={{ borderRadius: "12px" }}
            />
          </div>
          <motion.div initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} className="ml-1 flex flex-col items-center justify-center bg-cover lg:w-1/2">
            <h4 className="text-center text-4xl font-bold">Who We Are ?</h4>
            <p className="tracking-lg w-fit px-7 pt-4 text-justify leading-6 sm:px-16 sm:text-lg lg:px-12 lg:pr-16 ">
              Civil Service Society, NIT Agartala serves as a dynamic platform
              for impassioned students to rigorously examine, deliberate upon,
              and actively engage with current public Policy and governance
              issues. Encouraging critical thinking and fostering innovative
              ideation, we foster collaborative efforts among students. Our
              overarching goal is to empower students with the requisite
              knowledge, skills, and resources to effectuate meaningful change
              in the realm of public service. Through robust discourse and
              concerted action, we endeavor to cultivate future leaders
              dedicated to shaping a more informed, effective, and equitable
              governance landscape.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="font-inter text-3xl font-semibold underline sm:text-5xl">
          Our Teams
        </h1>
        <div className="sm:w-2/3 bg-white pb-24 pt-8 sm:pb-32 sm:pt-16">
          <motion.div initial={{opacity:0,y:-30}}
          whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.9,delay:0.2}} className="0 mx-auto max-w-7xl px-6 pb-20 lg:px-8">
            <h2 className="mb-8 text-center text-3xl font-semibold">
              Executive Team
            </h2>
            <ul
              role="list"
              className="grid grid-cols-2 items-center justify-center gap-x-4 gap-y-4 sm:gap-y-16 md:grid-cols-3"
            >
              {people.map((person) => (
                <Card person={person} />
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{opacity:0,y:-30}}
          whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.9,delay:0.2}} className="0 mx-auto max-w-7xl px-6 pb-20 lg:px-8">
            <h2 className="mb-8 text-center text-3xl font-semibold">
              Technical Team
            </h2>
            <ul
              role="list"
              className="grid grid-cols-2 items-center justify-center gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-3"
            >
              {tech.map((person) => (
                <Card person={person} />
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{opacity:0,y:-30}}
          whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.9,delay:0.2}} className="0 mx-auto max-w-7xl px-6 pb-20 lg:px-8">
            <h2 className="mb-8 text-center text-3xl font-semibold">
              Core Team
            </h2>
            <ul
              role="list"
              className="grid grid-cols-2 items-center justify-center gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-3"
            >
              {core.map((person) => (
                <Card person={person} />
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{opacity:0,y:-30}}
          whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.9,delay:0.2}} className="0 mx-auto max-w-7xl px-6 pb-20 lg:px-8">
            <h2 className="mb-8 text-center text-3xl font-semibold">
              Event Management Team
            </h2>
            <ul
              role="list"
              className="grid grid-cols-2 items-center justify-center gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-3"
            >
              {management.map((person) => (
                <Card person={person} />
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{opacity:0,y:-30}}
          whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.9,delay:0.2}} className="0 mx-auto max-w-7xl px-6 pb-20 lg:px-8">
            <h2 className="mb-8 text-center text-3xl font-semibold">
              Graphic Design Team
            </h2>
            <ul
              role="list"
              className="grid grid-cols-2 items-center justify-center gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-3"
            >
              {graphic.map((person) => (
                <Card person={person} />
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{opacity:0,y:-30}}
          whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.9,delay:0.2}} className="0 mx-auto max-w-7xl px-6 pb-20 lg:px-8">
            <h2 className="mb-8 text-center text-3xl font-semibold">
              Research & Development Team
            </h2>
            <ul
              role="list"
              className="grid grid-cols-2 items-center justify-center gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-3"
            >
              {research.map((person) => (
                <Card person={person} />
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{opacity:0,y:-30}}
          whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.9,delay:0.2}} className="0 mx-auto max-w-7xl px-6 pb-20 lg:px-8">
            <h2 className="mb-8 text-center text-3xl font-semibold">
              Social Media and PR
            </h2>
            <ul
              role="list"
              className="grid grid-cols-2 items-center justify-center gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-3"
            >
              {social.map((person) => (
                <Card person={person} />
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
