import React from "react";
import { people } from "../../data";

export default function Card() {
<<<<<<< HEAD
    return (
    <div className="w-full bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl 0 px-6 lg:px-8 ">
        <ul
            role="list"
            className="grid items-center justify-center grid-cols-2 gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-3"
        >
            {people.map((person) => (
            <li key={person.id} className="mb-4">
                <div className="flex flex-col items-center overflow-hidden rounded-lg cursor-pointer
                transition ease-in-out delay-100 hover:shadow-lg hover:shadow-black-100">
                
                    <img
                    className="overflow-hidden object-cover object-top mt-4 h-64 w-60 rounded-xl  border border-gray-400"
                    src={person.imageUrl}
                    alt=""
                    />
                
                <div className="mt-3 text-center">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">
                    {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                    </p>
                </div>
                </div>
            </li>
            ))}
        </ul>
        </div>
    </div>
    );
}
=======
  return (
    <div className="w-full bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl 0 px-6 lg:px-8 ">
        <ul
          role="list"
          className="grid items-center justify-center grid-cols-2 gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.id} className="mb-4">
              <div className="flex flex-col items-center overflow-hidden rounded-lg">
                
                  <img
                    className="overflow-hidden object-cover object-top mt-4 h-64 w-60 rounded-xl  border border-gray-400"
                    src={person.imageUrl}
                    alt=""
                  />
                
                <div className="mt-3 text-center">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
>>>>>>> 9aa0a7f02a59dd49fd4822116ba3d7e53f3e5eba
