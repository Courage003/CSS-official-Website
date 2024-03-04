import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";

import { Loading } from "./components/index.js";
import "./index.css";
const LazyAbout = lazy(() => import("./components/about/About.jsx"));
const LazyHome = lazy(() => import("./components/Home.jsx"));
const LazyCareer = lazy(() => import("./components/careerAndExam/CareerAndExam.jsx"));
const LazyResources = lazy(() => import("./components/Resources/Resources.jsx"))
const LazyEvents = lazy(() => import("./components/Event/Event.jsx"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyHome />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyAbout />
          </Suspense>
        ),
      },
      {
        path: "/career",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyCareer />
          </Suspense>
        ),
      },
      {
        path: "/resources",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyResources />
          </Suspense>
        ),
      },
      {
        path: "/events",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyEvents />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
