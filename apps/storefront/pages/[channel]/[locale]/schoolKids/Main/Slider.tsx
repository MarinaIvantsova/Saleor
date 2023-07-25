import clsx from "clsx";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const responsiveSettings = [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 710,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 290,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];

const properties = {
  prevArrow: (
    <button className="absolute w-[17px] top-[110%] !left-[45%] xs:!top-[85%] xs:!left-[15%]">
      <svg
        width="17"
        height="10"
        viewBox="0 0 17 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 5L1 5M1 5L5 1M1 5L5 9"
          stroke="#122659"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  ),
  nextArrow: (
    <button className="absolute w-[17px] top-[110%] !left-[50%] xs:!top-[85%] xs:!left-[80%]">
      <svg
        width="17"
        height="10"
        viewBox="0 0 17 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 5H16M16 5L12 9M16 5L12 1"
          stroke="#122659"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  ),
};

const SLIDERITEMS = [
  {
    id: 0,
    name: "Kate Smith",
    country: "США",
    bg: "bg-[url('/slider-1.png')]",
  },
  {
    id: 1,
    name: "Samuel King",
    country: "США",
    bg: "bg-[url('/slider-2.png')]",
  },
  {
    id: 2,
    name: "Nikole Young",
    country: "Канада",
    bg: "bg-[url('/slider-3.png')]",
  },
  {
    id: 3,
    name: "Karoline Bush",
    country: "Канада",
    bg: "bg-[url('/slider-4.png')]",
  },
];

const commomClassName = "flex justify-center w-[220px] h-[220px] mx-auto bg-cover text-center";

const Slider = () => {
  return (
    <Slide responsive={responsiveSettings} {...properties} infinite={false}>
      {SLIDERITEMS.map((item) => {
        return (
          <div key={item.id}>
            <div className={clsx(commomClassName, item.bg)}></div>
            <div className="transform translate-x-[30%]">
              <p
                className="mt-[10px] text-[20px] font-montserrat font-medium leading-[28px] text-layoutTextColor 
              md:text-[18px] md:leading-[25px] xs:text-[16px] md:leading-[22px]  
              "
              >
                {item.name}
              </p>

              <p className="ml-[25px] mt-[3px] text-[16px] leading-[23px] text-layoutaAddColor font-montserrat ">
                {item.country}
              </p>
            </div>
          </div>
        );
      })}
    </Slide>
  );
};

export default Slider;
