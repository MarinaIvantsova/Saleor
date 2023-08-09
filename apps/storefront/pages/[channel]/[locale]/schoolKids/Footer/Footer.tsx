import React from "react";
import Copyright from "./Copyright";

function Footer() {
  return (
    <footer>
      <section
        className="flex flex-wrap w-[70%] mx-auto justify-between pt-[55px] pb-[35px] md:w-[90%] md:pt-[40px] md:pb-[35px] 
      xs:w-[90%] xs:min-w-[290px] xs:pt-[35px] xs:pb-[20px]
      "
      >
        <h2 className="visually-hidden">Права и политика конфиденциальности</h2>
        <p
          className=" text-[16px] leading-[22px] md:text-[14px] md:leading-[20px]
        xs:text-[12px] xs:leading-[17px] xs:mb-[12px] xs:mr-[15px]"
        >
          <a
            className="flex justify-between no-underline text-layoutTextColor hover:opacity-50 focus:opacity-50 active:opacity-50 text-layoutTextColor font-montserrat"
            href="#"
          >
            <span className="pr-1">CleverBaby</span>
            <span className="w-[12px] w-[12px] xs:w-[9px] xs:h-[9px] pt-[5px]">
              <Copyright />
            </span>
            <span className="pl-1">
              <span whitespace-nowrap>2020</span> Все права защищены
            </span>
          </a>
        </p>
        <p
          className="text-[16px] leading-[22px] md:text-[14px] md:leading-[20px]
        xs:text-[12px] xs:leading-[17px] xs:mb-[12px] xs:mr-[15px]"
        >
          <a
            className="text-layoutTextColor hover:opacity-50 focus:opacity-50 active:opacity-50 text-layoutTextColor font-montserrat"
            href="#"
          >
            Политика конфиденциальности
          </a>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
