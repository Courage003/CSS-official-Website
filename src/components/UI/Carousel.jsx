import React from "react";

import {Swiper,SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Carousel({value}) {
  return (
    <div className="flex justify-center px-4 md:px-12 lg:px-24 xl:px-32 ">
        <div className="w-full lg:w-[1200px] relative">
        {value.length > 0 ? (
          <Swiper className="mySwiper"
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          loop={true}
          >
          {value.map((item) => ( 
              <SwiperSlide key={`${item.publishedAt}+${item.author}`} className="relative flex items-center w-32rem h-15rem bg-black justify-center rounded-lg ">
                <img src={item.urlToImage} alt={`Slide ${item.publishedAt}`} className="w-full max-w-[1200px] h-[600px] flex flex-col justify-center items-center object-cover opacity-60 rounded-lg " />
                <div className={`absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-8 px-11 sm:px-20 text-white overflow-hidden`}>
                  <h2 className=" sm:text-3xl font-bold mb-8">{item.title}</h2>
                  <p className="text-lg hidden md:block">{item.description}</p>
                </div>
              </SwiperSlide>
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
