import React from "react";

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
              <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 0C9.312 0 12 2.688 12 6C12 9.312 9.312 12 6 12C2.688 12 0 9.312 0 6C0 2.688 2.688 0 6 0ZM6 1.2C3.348 1.2 1.2 3.348 1.2 6C1.2 8.652 3.348 10.8 6 10.8C8.652 10.8 10.8 8.652 10.8 6C10.8 3.348 8.652 1.2 6 1.2ZM6 3C7.092 3 8.0478 3.5838 8.5728 4.4568L7.5444 5.0742C7.38256 4.80435 7.1528 4.58163 6.87804 4.42827C6.60328 4.2749 6.29311 4.19625 5.97847 4.20014C5.66383 4.20403 5.3557 4.29034 5.08482 4.45045C4.81394 4.61057 4.58976 4.8389 4.43464 5.11267C4.27953 5.38645 4.19889 5.69611 4.20077 6.01077C4.20265 6.32543 4.28699 6.6341 4.44537 6.906C4.60375 7.1779 4.83064 7.40353 5.10342 7.56039C5.3762 7.71726 5.68533 7.79987 6 7.8C6.31088 7.8002 6.61651 7.71983 6.88707 7.56673C7.15764 7.41362 7.3839 7.19301 7.5438 6.9264L8.5728 7.5432C8.23561 8.10637 7.72299 8.54338 7.11356 8.78721C6.50412 9.03103 5.83153 9.06821 5.19894 8.89304C4.56635 8.71786 4.00869 8.34001 3.61148 7.81743C3.21428 7.29485 2.99947 6.6564 3 6C3 4.344 4.344 3 6 3Z"
                  fill="#122659"
                />
              </svg>
            </span>
            <span className="pl-1">&nbsp;2020 Все права защищены</span>
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
