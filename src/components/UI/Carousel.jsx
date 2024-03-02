import React from "react";

import {Swiper,SwiperSlide} from "swiper/react";
import { Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Carousel({value}) {
  return (
    <div className="flex justify-center px-4 md:px-12 lg:px-24 xl:px-32 ">
        <div className="w-full lg:w-[1400px] relative">
        {value.length > 0 ? (
          <Swiper
          slidesPerView={1}
            spaceBetween={10}
            modules={[Pagination, Scrollbar]}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 1000, disableOnInteraction: false }}>
          {value.map((item) => ( 
              <div key={item.question[10]} className="p-2 flex justify-center items-center">
                <SwiperSlide><p className="p-8 pb-20">{item.question}</p></SwiperSlide>
              </div>
            ))}
        </Swiper>
        ) : (
          <p className="flex justify-center items-center">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Carousel;
