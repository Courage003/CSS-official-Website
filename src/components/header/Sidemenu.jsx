import React from "react"
import {NavLink} from "react-router-dom"

export default function Sidemenu() {
  return (
    <ul className="space-y-1 ">
      <li>
        <NavLink
          to="/"
          className={({isActive}) =>  `block rounded-lg px-4 py-2 text-sm font-medium  hover:bg-gray-100 hover:text-gray-700 ${(isActive) ? "bg-gray-100 text-gray-700" : "text-gray-500"}`}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({isActive}) =>  `block rounded-lg px-4 py-2 text-sm font-medium  hover:bg-gray-100 hover:text-gray-700 ${(isActive) ? "bg-gray-100 text-gray-700" : "text-gray-500"}`}
        >
          About Us
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/career"
          className={({isActive}) =>  `block rounded-lg px-4 py-2 text-sm font-medium  hover:bg-gray-100 hover:text-gray-700 ${(isActive) ? "bg-gray-100 text-gray-700" : "text-gray-500"}`}
        >
          Career and Exams
        </NavLink>
      </li>


      <li>
        <NavLink
          to="/resources"
          className={({isActive}) =>  `block rounded-lg px-4 py-2 text-sm font-medium  hover:bg-gray-100 hover:text-gray-700 ${(isActive) ? "bg-gray-100 text-gray-700" : "text-gray-500"}`}
        >
          Resources
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/events"
          className={({isActive}) =>  `block rounded-lg px-4 py-2 text-sm font-medium  hover:bg-gray-100 hover:text-gray-700 ${(isActive) ? "bg-gray-100 text-gray-700" : "text-gray-500"}`}
        >
          Events
        </NavLink>
      </li>
    </ul>
  );
}

