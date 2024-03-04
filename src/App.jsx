import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header, Footer, Loading, } from "./components/index";
import ScrollUp from "./components/ScrollUp";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ScrollToTop/>
        <Header />
        <main>
          <Outlet />
        </main>
        <ScrollUp/>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
