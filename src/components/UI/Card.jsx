import React from "react";
import { people } from "../../data";

export default function Card() {
  return (
    <div className="w-full bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <ul
          role="list"
          className="grid grid-cols-3 gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.id} className="mb-4">
            <div className="flex flex-col items-center rounded-lg overflow-hidden">
              <img
                className="h-64 w-60 rounded-xl mt-4 border border-gray-400"
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
