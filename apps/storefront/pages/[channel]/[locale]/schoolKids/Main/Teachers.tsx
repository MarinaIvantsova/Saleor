import React from "react";
import Slider from "./Slider";

function Teachers() {
  return (
    <section
      className="relative before:absolute after:absolute mx-auto mt-[115px] pb-[60px] 2xl:w-[70%] 
      2xl:before:bg-house before:w-[58px] before:h-[97px] before:-top-[20%] before:left-[95%] before:bg-no-repeat
      xs:before:bg-house xs:before:bg-[length:48px] xs:before:-top-[10%] 
      2xl:after:bg-pencil after:top-[75%] after:-left-[50px] after:w-[44px] after:h-[132px] 
      md:w-[710px] md:mt-[105px] md:pb-[60px] xs:w-[290px] xs:mt-[55px] xs:pb-[50px]
    "
    >
      <header className="flex flex-wrap w-full mb-[55px] md:mb-[50px] xs:mb-[40px]">
        <h2
          className="ml-[15px] leading-[50px] text-layoutTextColor font-rubik font-medium text-[36px]
           md:w-[30%] md:leading-[40px]
           xs:w-full xs:mb-[18px] xs:text-[22px] xs:leading-[25px]"
        >
          Наши преподаватели
        </h2>
        <p
          className="w-[40%] ml-auto 2xl:mr-[3px] 2xl:mt-[10px] text-[16px] leading-[23px] font-montserrat text-layoutTextColor
          mt-[3px] md:text-[14px] md:leading-[20px]
          xs:w-full xs:ml-[13px]
        "
        >
          Все наши преподаватели — носители английского языка и имеют необходимое образование и опыт
          работы с детьми
        </p>
      </header>
      <Slider />
    </section>
  );
}

export default Teachers;
