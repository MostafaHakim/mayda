import React from "react";
import SliderComponent from "./SliderComponent";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const HomeComponent = () => {
  const foods = [
    {
      id: 1,
      name: "Chicken Biryani",
      catagory: "food",
      subCatagory: ["halal", "Chicken"],
      image:
        "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=500",
      description: "Delicious aromatic chicken biryani with flavorful rice.",
      price: 220,
    },
    {
      id: 2,
      name: "Beef Burger",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=70",
      description: "Juicy beef burger with fresh vegetables and special sauce.",
      price: 180,
    },
    {
      id: 3,
      name: "Chicken Pizza",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=70",
      description: "Cheesy chicken pizza topped with fresh ingredients.",
      price: 350,
    },
    {
      id: 4,
      name: "Chicken Shawarma",
      image:
        "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500&q=70",
      description:
        "Tender chicken shawarma wrapped with fresh salad and sauce.",
      price: 150,
    },
    {
      id: 5,
      name: "Fried Chicken",
      image:
        "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=70",
      description: "Crispy and juicy fried chicken with a delicious coating.",
      price: 200,
    },
    {
      id: 6,
      name: "Chicken Pasta",
      image:
        "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=500&q=70",
      description:
        "Creamy chicken pasta prepared with special herbs and sauce.",
      price: 250,
    },
    {
      id: 7,
      name: "French Fries",
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=70",
      description: "Golden crispy french fries served with special sauce.",
      price: 100,
    },
    {
      id: 8,
      name: "Chicken Noodles",
      image:
        "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=500&q=70",
      description: "Stir-fried noodles with chicken and fresh vegetables.",
      price: 180,
    },
    {
      id: 9,
      name: "Grilled Chicken",
      image:
        "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500&q=70",
      description: "Juicy grilled chicken served with vegetables and sauce.",
      price: 300,
    },
    {
      id: 10,
      name: "Chicken Sandwich",
      image:
        "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=500&q=70",
      description: "Fresh chicken sandwich with cheese, vegetables and sauce.",
      price: 160,
    },
  ];

  return (
    <div className="w-full md:w-3/5 m-auto">
      {/* ---------------Hero Section---------------------- */}
      <div className="p-2 md:my-4 w-full h-72 md:h-150 rounded-xl overflow-hidden">
        <SliderComponent />
      </div>
      {/* ----------------Food-------------- */}

      <div className="max-w-7xl mx-auto px-4 py-10 relative">
        {/* Section Title */}
        <div className="text-center mb-10">
          <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm">
            Our Menu
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Delicious Food For You
          </h1>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Fresh ingredients, delicious taste and amazing food made specially
            for you.
          </p>
        </div>

        <div>
          <div>
            <h2 className="text-xl font-bold md:text-4xl text-[#690303]">
              Halal
            </h2>
            <p className="text-sm md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              debitis.
            </p>
          </div>
          <div className=" py-4">
            <Swiper
              touchRatio={1}
              resistanceRatio={0.85}
              spaceBetween={8}
              slidesPerView={2.2}
              speed={500}
              breakpoints={{
                480: {
                  slidesPerView: 2.5,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3.2,
                  spaceBetween: 12,
                },
                1024: {
                  slidesPerView: 4.2,
                  spaceBetween: 15,
                },
              }}
              className="w-full rounded-xl"
            >
              {foods.map((food) => (
                <SwiperSlide key={food.id}>
                  <div
                    className="
          group
          bg-white
          rounded-2xl
          overflow-hidden
          shadow-md
          hover:shadow-2xl
          border border-gray-100
          transition-all
          duration-300
          hover:-translate-y-2
        "
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden h-40 md:h-52">
                      <img
                        src={food.image}
                        alt={food.name}
                        loading="lazy"
                        decoding="async"
                        className="
    w-full
    h-full
    object-cover
    group-hover:scale-110
    transition-transform
    duration-500
  "
                      />

                      {/* Price */}
                      <div
                        className="
              absolute
              top-2
              right-2
              md:top-3
              md:right-3
              bg-white
              px-2
              md:px-3
              py-1
              rounded-full
              shadow-md
              font-bold
              text-sm
              md:text-base
              text-[#690303]
            "
                      >
                        ${food.price}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-2 md:p-5">
                      <h2
                        className="
              text-sm
              md:text-xl
              font-bold
              text-gray-800
              group-hover:text-[#690303]
              transition-colors
              duration-300
            "
                      >
                        {food.name}
                      </h2>

                      <p
                        className="
              text-gray-500
              text-xs
              md:text-sm
              mt-1
              md:mt-2
              leading-5
              md:leading-6
              line-clamp-2
            "
                      >
                        {food.description}
                      </p>

                      {/* Buttons */}
                      <div className="flex flex-col gap-2 mt-3 md:mt-5">
                        <button
                          className="
                w-full
                bg-[#690303]
                cursor-pointer
                text-white
                font-semibold
                text-xs
                md:text-sm
                py-2
                md:py-2.5
                rounded-lg
                hover:bg-[#850404]
                transition
                duration-300
                active:scale-95
              "
                        >
                          Order Now
                        </button>

                        <button
                          className="
                w-full
                cursor-pointer
                border
                border-[#690303]
                text-[#690303]
                hover:bg-[#690303]
                hover:text-white
                font-semibold
                text-xs
                md:text-sm
                py-2
                md:py-2.5
                rounded-lg
                transition
                duration-300
                active:scale-95
              "
                        >
                          See more
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* ------------Non Halal---------------- */}
        <div>
          <div>
            <h2 className="text-xl font-bold md:text-4xl text-[#690303]">
              Non-Halal
            </h2>
            <p className="text-sm md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              debitis.
            </p>
          </div>
          <div className=" py-4">
            <Swiper
              touchRatio={1}
              resistanceRatio={0.85}
              spaceBetween={8}
              slidesPerView={2.2}
              speed={500}
              breakpoints={{
                480: {
                  slidesPerView: 2.5,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3.2,
                  spaceBetween: 12,
                },
                1024: {
                  slidesPerView: 4.2,
                  spaceBetween: 15,
                },
              }}
              className="w-full rounded-xl"
            >
              {foods.map((food) => (
                <SwiperSlide key={food.id}>
                  <div
                    className="
          group
          bg-white
          rounded-2xl
          overflow-hidden
          shadow-md
          hover:shadow-2xl
          border border-gray-100
          transition-all
          duration-300
          hover:-translate-y-2
        "
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden h-40 md:h-52">
                      <img
                        src={food.image}
                        alt={food.name}
                        loading="lazy"
                        decoding="async"
                        className="
    w-full
    h-full
    object-cover
    group-hover:scale-110
    transition-transform
    duration-500
  "
                      />

                      {/* Price */}
                      <div
                        className="
              absolute
              top-2
              right-2
              md:top-3
              md:right-3
              bg-white
              px-2
              md:px-3
              py-1
              rounded-full
              shadow-md
              font-bold
              text-sm
              md:text-base
              text-[#690303]
            "
                      >
                        ${food.price}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-2 md:p-5">
                      <h2
                        className="
              text-sm
              md:text-xl
              font-bold
              text-gray-800
              group-hover:text-[#690303]
              transition-colors
              duration-300
            "
                      >
                        {food.name}
                      </h2>

                      <p
                        className="
              text-gray-500
              text-xs
              md:text-sm
              mt-1
              md:mt-2
              leading-5
              md:leading-6
              line-clamp-2
            "
                      >
                        {food.description}
                      </p>

                      {/* Buttons */}
                      <div className="flex flex-col gap-2 mt-3 md:mt-5">
                        <button
                          className="
                w-full
                bg-[#690303]
                cursor-pointer
                text-white
                font-semibold
                text-xs
                md:text-sm
                py-2
                md:py-2.5
                rounded-lg
                hover:bg-[#850404]
                transition
                duration-300
                active:scale-95
              "
                        >
                          Order Now
                        </button>

                        <button
                          className="
                w-full
                cursor-pointer
                border
                border-[#690303]
                text-[#690303]
                hover:bg-[#690303]
                hover:text-white
                font-semibold
                text-xs
                md:text-sm
                py-2
                md:py-2.5
                rounded-lg
                transition
                duration-300
                active:scale-95
              "
                        >
                          See more
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Food Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 md:gap-6">
          {foods.map((food) => (
            <div
              key={food.id}
              className="group bg-white rounded-2xl overflow-hidden
        shadow-md hover:shadow-2xl
        border border-gray-100
        transition-all duration-300
        hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover
            group-hover:scale-110
            transition-transform duration-500"
                />

                {/* Price Badge */}
                <div
                  className="absolute top-3 right-3
            bg-white px-3 py-1 rounded-full
            shadow-md font-bold text-[#690303]"
                >
                  ${food.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-1 md:p-5">
                <h2
                  className="text-sm md:text-xl font-bold text-gray-800
            group-hover:text-[#690303]
            transition-colors duration-300"
                >
                  {food.name}
                </h2>

                <p className="text-gray-500 text-xs md:text-sm md:mt-2 leading-6 line-clamp-2">
                  {food.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-5">
                  <button
                    className="flex-1 bg-[#690303]
                    cursor-pointer
              hover:bg-[#690303]
              text-white font-semibold
              py-2.5 rounded-lg
              transition duration-300
              active:scale-95"
                  >
                    Order Now
                  </button>

                  <button
                    className="px-4 py-2.5
                    cursor-pointer
              border border-[#690303]
              text-[#690303]
              hover:bg-[#690303]
              hover:text-white
              font-semibold
              rounded-lg
              transition duration-300
              active:scale-95"
                  >
                    See more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
