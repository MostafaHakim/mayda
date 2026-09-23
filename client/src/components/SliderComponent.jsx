import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Item1 from "../assets/item1.jpg";
import Item2 from "../assets/item2.jpg";
import Item3 from "../assets/item3.jpg";
import Item4 from "../assets/item4.jpg";
import Item5 from "../assets/item4.jpg";

const SliderComponent = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="w-full h-full"
    >
      <SwiperSlide className="w-full h-full relative ">
        <div className="absolute bg-black/30 bottom-10 left-10 text-white p-8 rounded-lg">
          <h2 className="text-4xl">The Food Name </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            minus!
          </p>
        </div>
        <img src={Item1} alt="" className="w-full h-full" />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full relative">
        <div className="absolute bg-black/30 bottom-10 left-10 text-white p-8 rounded-lg">
          <h2 className="text-4xl">The Food Name </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            minus!
          </p>
        </div>
        <img src={Item2} alt="" className="w-full h-full" />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full relative">
        <div className="absolute bg-black/30 bottom-10 left-10 text-white p-8 rounded-lg">
          <h2 className="text-4xl">The Food Name </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            minus!
          </p>
        </div>
        <img src={Item3} alt="" className="w-full h-full" />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full relative">
        <div className="absolute bg-black/30 bottom-10 left-10 text-white p-8 rounded-lg">
          <h2 className="text-4xl">The Food Name </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            minus!
          </p>
        </div>
        <img src={Item4} alt="" className="w-full h-full" />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full relative">
        <div className="absolute bg-black/30 bottom-10 left-10 text-white p-8 rounded-lg">
          <h2 className="text-4xl">The Food Name </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            minus!
          </p>
        </div>
        <img src={Item5} alt="" className="w-full h-full" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderComponent;
