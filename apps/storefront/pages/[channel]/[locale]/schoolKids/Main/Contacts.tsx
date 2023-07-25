import React from "react";
import Map from "./Map";
import clsx from "clsx";
import Facebook from "../socialicons/Facebook";
import Vkontakte from "../socialicons/Vkontakte";
import Instagram from "../socialicons/Instagram";

const commomClassNameItem =
  "2xl:ml-[10px] 2xl:mb-[25px] md:w-[35%] md:ml-[45px] md:mb-[15px] xs:w-[90%] xs:ml-[15px] xs:mb-[20px]";

const commomClassNameSub =
  "mb-[8px] xs:mb-[5px] xs:text-[14px] text-[16px] leading-[23px] font-montserrat text-layoutTextColor";

const commomClassNameText =
  "text-[18px] leading-[25px] xs:text-[16px] font-montserrat font-medium text-layoutTextColor";
const commonClassNameWrapper =
  "md:flex md:flex-col md:flex-wrap md:content-start xs:flex xs:flex-col xs:flex-wrap xs:content-start md:h-[185px] xs:h-auto";

const SOCIALITEMS = [
  {
    id: "0",
    aria: "We are at Facebook",
    svg: <Facebook />,
  },
  {
    id: 1,
    aria: "We are at Vkontakte",
    svg: <Vkontakte />,
  },
  {
    id: 2,
    aria: "We are at Instagram",
    svg: <Instagram />,
  },
];

const CONTACTSINFO = [
  {
    id: 0,
    subtitle: "Приходите к нам:",
    text: "Санкт-Петербург, ул. Большая Конюшенная, 19",
  },
  {
    id: 1,
    subtitle: "Режим работы:",
    text: "Пн-Сб, с 9-00 до 20-00",
  },
  {
    id: 2,
    subtitle: "Позвоните нам:",
    text: "+ 7 (495) 983-47-19",
    link: "tel:+74959834719",
  },
  {
    id: 3,
    subtitle: "Напишите нам:",
    text: "info@cleverbaby.ru",
    link: "mailto:info@cleverbaby.ru",
  },
];

function Contacts() {
  return (
    <section className="2xl:relative md:flex md:flex-col 2xl:min-h-[610px] 2xl:mt-[200px] md:min-h-[905px] md:mt-[110px]">
      <div
        className="2xl:absolute 2xl:w-[413px] 2xl:-top-[10%] 2xl:left-[10%] 2xl:min-h-[610px] 2xl:p-[60px] 2xl:rounded-[12px] bg-bgContacts
         2xl:shadow-[0px_4px_-40px_rgba(217,217,217,0.3)] 2xl:z-10
        md:w-full md:min-h-[468px] md:py-[70px]
         xs:min-h-[485px] xs:pt-[70px] xs:pb-[45px]
      "
      >
        <h2
          className="2xl:ml-[10px] 2xl:mb-[35px] md:mb-[30px] md:ml-[45px] xs:ml-[15px] xs:mb-[20px] xs:text-[22px] xs:leading-[27px]
           text-[36px] leading-[45px] font-rubik font-medium text-layoutTextColor"
        >
          Мы ждем вас
        </h2>
        <div className={clsx(commonClassNameWrapper)}>
          {CONTACTSINFO.map((item) => (
            <div
              key={item.id}
              className={clsx(commomClassNameItem, item.id === 3 && "md:pt-[25px]")}
            >
              <p className={clsx(commomClassNameSub)}>{item.subtitle}</p>
              {item.link ? (
                <p className={clsx(commomClassNameText)}>
                  <a
                    className="hover:opacity-50 focus:opacity-50 active:opacity-50"
                    href={item.link}
                  >
                    {item.text}
                  </a>
                </p>
              ) : (
                <p className={clsx(commomClassNameText)}>{item.text}</p>
              )}
            </div>
          ))}
        </div>

        <div className={clsx(commomClassNameItem)}>
          <p className={clsx(commomClassNameSub)}>Мы в соцсетях:</p>
          <ul className="flex flex-wrap">
            {SOCIALITEMS.map((item) => {
              return (
                <li key={item.id}>
                  <a href="#" aria-label={item.aria}>
                    {item.svg}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <section className="overflow-hidden">
        <h2 className="visually-hidden">Карта с нашим местоположением</h2>
        <Map></Map>
      </section>
    </section>
  );
}

export default Contacts;
