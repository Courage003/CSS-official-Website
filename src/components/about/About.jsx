import React from 'react'
import grp from "../../assets/grpPhoto.jpg"

export default function About() {
    return (
        <section className="container w-full ">
            <div className="w-full p-20 text-white text-center mb-12" style={{background: "#000"}}>
                <h4 className="text-5xl font-bold">#KnowUs</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, porro?</p>
            </div>
            <div>
                <div className="flex mb-20">
                    <div className="w-1/2 ml-8 mr-6 rounded-lg">
                        <img src={grp} alt="grpPhoto"style={{borderRadius:"12px"}}/>
                    </div>
                    <div className="w-1/2 ml-1 flex flex-col justify-center items-center">
                        <h4 className="text-6xl text-center font-bold">Who We Are ?</h4>
                        <p className="leading-5 text-lg pt-4 w-fit ">Civil Service Society, NIT Agartala serves as a dynamic platform for impassioned students to rigorously examine, deliberate upon, and actively engage with current public Policy and governance issues. Encouraging critical thinking and fostering innovative ideation, we foster collaborative efforts among students. Our overarching goal is to empower students with the requisite knowledge, skills, and resources to effectuate meaningful change in the realm of public service. Through robust discourse and concerted action, we endeavor to cultivate future leaders dedicated to shaping a more informed, effective, and equitable governance landscape.</p>
                <br/>
                <br/>
                <br/>
                {/* <marquee loop="-1" scrollamount="5" width="100%" >Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes.</marquee> */}
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl font-semibold underline">Our Teams</h1>
            </div>
            </section>
    )
}
