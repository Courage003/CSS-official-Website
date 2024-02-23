import React from "react";
import Slider from "infinite-react-carousel";

function Carousel({data}) {
  return (
   <div className="flex justify-center px-4 md:px-12 lg:px-24 xl:px-32 ">
        <div className="w-full lg:w-[1400px] relative">
        {data.length > 0 ? (
          <Slider dots autoplay arrows={false} loop style={{ width: "100%" }}>
            {data.map((item) => (
              <div key={item.question} className="flex justify-center items-center">
                <p>{item.question}</p>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="flex justify-center items-center">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Carousel;
