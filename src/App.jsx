import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header, Footer, Loading } from "./components/index";

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
