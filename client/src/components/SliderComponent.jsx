import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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
        <img
          src="https://unsplash.com/photos/three-plates-of-asian-food-on-wood-table--YHSwy6uqvk"
          alt=""
          className="w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full relative">
        <div className="absolute bg-black/30 bottom-10 left-10 text-white p-8 rounded-lg">
          <h2 className="text-4xl">The Food Name </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            minus!
          </p>
        </div>
        <img
          src="https://unsplash.com/photos/pesto-pasta-with-sliced-tomatoes-served-on-white-ceramic-plate-12eHC6FxPyg"
          alt=""
          className="w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full relative">
        <div className="absolute bg-black/30 bottom-10 left-10 text-white p-8 rounded-lg">
          <h2 className="text-4xl">The Food Name </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            minus!
          </p>
        </div>
        <img
          src="https://unsplash.com/photos/people-laughing-at-restaurant-dinner-xzPq2pQxAFk"
          alt=""
          className="w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full relative">
        <div className="absolute bg-black/30 bottom-10 left-10 text-white p-8 rounded-lg">
          <h2 className="text-4xl">The Food Name </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            minus!
          </p>
        </div>
        <img
          src="https://unsplash.com/photos/breakfast-spread-with-waffles-eggs-and-juice-hrlvr2ZlUNk"
          alt=""
          className="w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full relative">
        <div className="absolute bg-black/30 bottom-10 left-10 text-white p-8 rounded-lg">
          <h2 className="text-4xl">The Food Name </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            minus!
          </p>
        </div>
        <img
          src="https://unsplash.com/photos/a-table-topped-with-bowls-of-food-and-chopsticks-ZBSJ57K0Vcg"
          alt=""
          className="w-full h-full"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderComponent;
