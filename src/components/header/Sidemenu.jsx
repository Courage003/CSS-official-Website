import React from "react";

export default function Sidemenu() {
  return (
    <ul className="space-y-1">
      <li>
        <a
          href="#"
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          About Us
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Career and Exams
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          History
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Resources
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Events
        </a>
      </li>
    </ul>
  );
}

