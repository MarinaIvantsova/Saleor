import React from "react";
import Image from "next/legacy/image";
import EnrollButton from "../Button/EnrollButton";

function Banner() {
  return (
    <section className="relative 2xl:mt-[120px] min-h-[450px] xs:min-h-[385px] md:mt-[80px] pb-[50px]">
      <div className="md:hidden xs:hidden 2xl:w-full">
        <Image
          className="object-cover"
          src="/banner-desktop.svg"
          alt="Banner desktop"
          layout="fill"
        />
      </div>
      <div className="2xl:hidden md:w-full xs:hidden">
        <Image
          className="object-cover"
          src="/banner-tablet.svg"
          alt="Banner tablet"
          layout="fill"
        />
      </div>
      <div className="2xl:hidden md:hidden xs:w-full">
        <Image className="object-cover" src="/banner-m.svg" alt="Banner mobile" layout="fill" />
      </div>
      <div
        className="relative w-[70%] mx-auto pt-[90px] md:w-[90%] md:pt-[110px] xs:w-[75%] xs:pt-[65px]
      before:absolute before:bg-[url('/rainbow.svg')] before:top-[30%] before:-left-[5%] 2xl:before:w-[155px] 2xl:before:h-[107px] 2xl:before:bg-[length:155px_107px]
      before:bg-no-repeat
      md:before:w-[101px] md:before:h-[70px] md:before:top-[60%] md:before:left-[5%] md:before:bg-[length:101px_70px]
      after:absolute after:bg-[url('/boy.svg')] after:top-[40%] after:left-[85%] 2xl:after:w-[118px] 2xl:after:h-[133px] 2xl:after:bg-[length:118px_133px] after:bg-no-repeat
      md:after:w-[78px] md:after:h-[89px] md:after:top-[50%] md:after:bg-[length:78px_89px]
      "
      >
        <h2
          className="w-[60%] mx-auto mt-0 mb-[35px] font-rubik font-medium text-[36px] leading-[45px] text-center text-bannerColor
        md:w-[90%] md:leading-[45px] mb-[30px]
        xs:w-[90%] xs:leading-[28px] xs:text-[22px]"
        >
          Запишитесь <span whitespace-nowrap>на бесплатное</span> пробное занятие
        </h2>

        <p
          className="w-[40%] mx-auto mb-[35px] font-montserrat 2xl:text-[16px] 2xl:leading-[23px] text-center text-bannerColor
        text-[14px] leading-[20px] md:w-[50%] md:mb-[30px] md:pl-[15px] xs:w-full xs:mb-[25px]"
        >
          Приходите <span whitespace-nowrap>к нам</span> <span whitespace-nowrap>в гости</span>
          <span whitespace-nowrap>и мы</span>познакомим вас
          <span whitespace-nowrap>с педагогами</span>, расскажем
          <span whitespace-nowrap>о школе</span> <span whitespace-nowrap>и ответим</span>
          <span whitespace-nowrap>на все</span>ваши вопросы
        </p>
        <EnrollButton className="mx-auto" />
      </div>
    </section>
  );
}

export default Banner;
