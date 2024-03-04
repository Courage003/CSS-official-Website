import React from "react";

function LinkCard({ data }) {
    const value = {
        "read": "Click here to read",
        "pdf" : "Download now",
        "video" : "Watch now",
    }
    const colors = {
      "Economics":"bg-amber-100",
      "History":"bg-blue-100",
      "Geography":"bg-green-100",
      "IR":"bg-red-100",
      "PYQ's":"bg-purple-100",
      "Miscellaneous":"bg-orange-100",
    }

  return (
    <div className={`${colors[data.category]} shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto hover:scale-105 transform duration-300 ease-out`} key={data.id}>
    <div className="px-6 pt-6">
      <div className="border-l-4 pl-2 font-semibold border-yellow-500 font-roboto text-zinc-500 uppercase">
        {data.type}
      </div>
    </div>
    <div className="px-6 py-4">
      <h2 className="mb-2 text-2xl font-roboto font-bold leading-tight text-gray-800">{data.title}</h2>
      <p className="text-gray-700 overflow-auto font-inter text-base pt-2">{data.content}</p>
    </div>
    <div className="px-6 pt-4 pb-4 flex items-center justify-start text-gray-600  bottom-0">
      <i className="fa fa-arrow-right" aria-hidden="true"></i>
      <a className="inline-block pl-2 font-semibold rounded cursor-pointer" href={data.link} target="_blank">
        {value[data.type]}
      </a>
    </div>
  </div>
  

  );
}

export default LinkCard;
