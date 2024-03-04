import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header, Footer, Loading, } from "./components/index";
import ScrollUp from "./components/ScrollUp";

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
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
