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
                        <p className="leading-5 text-lg pt-4 w-fit ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sed quidem aspernatur laboriosam, earum ipsam enim velit repellendus eius, provident ullam doloremque aperiam error officia porro molestias quisquam dolore placeat vero consequatur sint dignissimos veritatis. Vero exercitationem eius, consequatur rerum quis quibusdam deleniti optio ipsam deserunt est magni autem repudiandae maxime similique quos quidem, minima perferendis voluptatibus possimus, dolorum et laudantium minus. Fugiat assumenda molestias doloribus natus delectus, enim repellendus?</p>
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
