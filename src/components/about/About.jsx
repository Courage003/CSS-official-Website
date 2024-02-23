import React from "react";
import grp from "../../assets/grpPhoto.jpg";
import Card from "../UI/Card";

export default function About() {
  return (
    <section className=" hero mx-auto ">
      <div
        className="mb-12 w-full p-24 text-center text-white"
        style={{ background: "#000" }}
      >
        <h4 className="text-5xl font-bold">#KnowUs</h4>
        <p>EMPOWER. INSPIRE. TRANSFORM.</p>
      </div>
      <div className="">
        <div className="mb-20 flex flex-col items-center justify-center lg:flex-row">
          <div className="m-10 rounded-lg lg:ml-8 lg:mr-4 lg:w-1/2">
            <img src={grp} loading="lazy" alt="grpPhoto" style={{ borderRadius: "12px" }} />
          </div>
          <div className="ml-1 flex flex-col items-center justify-center lg:w-1/2">
            <h4 className="text-center text-4xl font-bold">Who We Are ?</h4>
            <p className="tracking-lg w-fit px-16 pt-4 text-lg leading-6 lg:px-12 lg:pr-16 ">
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
            {/* <br />

            <br /> */}
            {/* <marquee loop="-1" scrollAmount="5" width="20%" className="bg-slate-700 text-white">
                Create stunning images with as much or as little control as you
                like thanks to a choice of Basic and Creative modes.
            </marquee> */}
          </div>
        </div>
      </div>

        <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-semibold underline mb-5 font-inter">Our Teams</h1>
        <Card/>
        </div>
    </section>
  );
}
