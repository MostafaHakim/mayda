import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SliderComponent = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      touchRatio={1}
      resistanceRatio={0.85}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      className="w-full h-full rounded-xl overflow-hidden"
    >
      <SwiperSlide className="w-full h-full relative ">
        <div className="absolute bg-black/30 bottom-2 left-2 md:bottom-10 md:left-10 text-white p-2 md:p-8 rounded-lg">
          <h2 className="text:lg md:text-4xl">The Food Name </h2>
          <p className="text-sm md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            minus!
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=500&q=70"
          alt=""
          className="w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full relative">
        <div className="absolute bg-black/30 bottom-2 left-2 md:bottom-10 md:left-10 text-white p-2 md:p-8 rounded-lg">
          <h2 className="text:lg md:text-4xl">The Food Name </h2>
          <p className="text-sm md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            minus!
          </p>
        </div>
        <img
          src="https://plus.unsplash.com/premium_photo-1674106347866-8282d8c19f84?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=500&q=70"
          alt=""
          className="w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full relative">
        <div className="absolute bg-black/30 bottom-2 left-2 md:bottom-10 md:left-10 text-white p-2 md:p-8 rounded-lg">
          <h2 className="text:lg md:text-4xl">The Food Name </h2>
          <p className="text-sm md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            minus!
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1660634806611-d3d03b7c28fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=500&q=70"
          alt=""
          className="w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full relative">
        <div className="absolute bg-black/30 bottom-2 left-2 md:bottom-10 md:left-10 text-white p-2 md:p-8 rounded-lg">
          <h2 className="text:lg md:text-4xl">The Food Name </h2>
          <p className="text-sm md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            minus!
          </p>
        </div>
        <img
          src="https://plus.unsplash.com/premium_photo-1676310055316-d73c9d5eeb51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=500&q=70"
          alt=""
          className="w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full relative">
        <div className="absolute bg-black/30 bottom-2 left-2 md:bottom-10 md:left-10 text-white p-2 md:p-8 rounded-lg">
          <h2 className="text:lg md:text-4xl">The Food Name </h2>
          <p className="text-sm md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            minus!
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1677094544034-01421fc6c874?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=500&q=70"
          alt=""
          className="w-full h-full"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderComponent;
