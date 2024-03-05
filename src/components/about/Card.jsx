import React from "react";

export default function Card({person}) {
  return (
        <div>
            <li key={person.id} className="mb-4">
              <div className="flex flex-col items-center overflow-hidden rounded-lg transition delay-100 ease-in-out">
                <div className="group relative">
                  <img
                    className="h-48 w-44 transform overflow-hidden rounded-xl border border-gray-400 object-cover object-top transition duration-300 ease-in-out hover:scale-105 sm:h-64 sm:w-60"
                    src={person.imageUrl}
                    alt={person.name}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-50 opacity-0 transition duration-500 ease-in-out group-hover:opacity-100">
                    <div className="flex items-center space-x-4">
                      <a
                        href={person.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-500"
                      >
                        <i
                          className="fa fa-linkedin cursor-pointer pr-2 text-xl"
                          aria-hidden="true"
                        ></i>
                      </a>
                      <a
                        href={person.twitterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-slate-400"
                      >
                        <i className="fa-brands fa-x-twitter cursor-pointer pr-2 text-xl"></i>
                      </a>
                    </div>
                  </div>
                </div>

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
          </div>
  );
}
