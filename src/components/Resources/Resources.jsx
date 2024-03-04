import React, { useState } from "react";
import Loading from "../Loading";

function Resources() {
  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 1000);

  return load ? (
    <Loading />
  ) : (
    <div>
      <div
        className="w-full p-24 text-center text-white"
        style={{ background: "#000" }}
      >
        <h4 className="pb-2 text-5xl font-semibold">#Resources</h4>
        <p>INFORMATION. INTEGRITY. INTENSION</p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Display resources*/}
        
      </section>
    </div>
  );
}

export default Resources;
