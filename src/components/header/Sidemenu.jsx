import React from "react"
import {Link} from "react-router-dom"

export default function Sidemenu() {
  return (
    <ul className="space-y-1 ">
      <li>
        <Link
          to="/about"
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          About Us
        </Link>
      </li>

      <li>
        <Link
          to="/career"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Career and Exams
        </Link>
      </li>


      <li>
        <Link
          to="/resources"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Resources
        </Link>
      </li>

      <li>
        <Link
          to="/events"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Events
        </Link>
      </li>
    </ul>
  );
}

