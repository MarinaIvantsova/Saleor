import React from "react";
import Map from "./Map";
import clsx from "clsx";

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
    svg: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1_52)">
          <path
            d="M22 32C28.6274 32 34 26.6274 34 20C34 13.3726 28.6274 8 22 8C15.3726 8 10 13.3726 10 20C10 26.6274 15.3726 32 22 32Z"
            fill="white"
          />
        </g>
        <path
          d="M23 20.9H24.4286L25 18.5H23V17.3C23 16.682 23 16.1 24.1429 16.1H25V14.084C24.8137 14.0582 24.1103 14 23.3674 14C21.816 14 20.7143 14.9942 20.7143 16.82V18.5H19V20.9H20.7143V26H23V20.9Z"
          fill="#122659"
        />
        <defs>
          <filter
            id="filter0_d_1_52"
            x="0"
            y="0"
            width="44"
            height="44"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.645556 0 0 0 0 0.658545 0 0 0 0 0.691667 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_52" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_52"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
  },
  {
    id: 1,
    aria: "We are at Vkontakte",
    svg: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1_55)">
          <path
            d="M22 32C28.6274 32 34 26.6274 34 20C34 13.3726 28.6274 8 22 8C15.3726 8 10 13.3726 10 20C10 26.6274 15.3726 32 22 32Z"
            fill="white"
          />
        </g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.8496 23.9665H22.6865C22.6865 23.9665 22.9393 23.9387 23.0683 23.7994C23.1871 23.6714 23.1833 23.4312 23.1833 23.4312C23.1833 23.4312 23.167 22.3064 23.6881 22.1408C24.2018 21.9777 24.8615 23.2279 25.5608 23.7085C26.0895 24.0724 26.4913 23.9926 26.4913 23.9926L28.3609 23.9665C28.3609 23.9665 29.339 23.9062 28.8752 23.1359C28.8372 23.0729 28.6051 22.5661 27.4851 21.5248C26.3128 20.4349 26.4698 20.6112 27.882 18.7259C28.742 17.5777 29.0858 16.8768 28.9784 16.5766C28.876 16.2906 28.2434 16.3662 28.2434 16.3662L26.1383 16.3793C26.1383 16.3793 25.9823 16.358 25.8666 16.4273C25.7535 16.4953 25.6807 16.6537 25.6807 16.6537C25.6807 16.6537 25.3475 17.5421 24.9031 18.2977C23.9658 19.8921 23.591 19.9763 23.4378 19.8773C23.0814 19.6465 23.1704 18.9503 23.1704 18.4557C23.1704 16.9107 23.4043 16.2664 22.7148 16.0997C22.486 16.0443 22.3176 16.0077 21.7324 16.0018C20.9813 15.994 20.3455 16.0041 19.9855 16.1808C19.7461 16.2982 19.5613 16.56 19.6738 16.575C19.813 16.5937 20.1281 16.6601 20.2952 16.888C20.5109 17.1819 20.5033 17.8422 20.5033 17.8422C20.5033 17.8422 20.6272 19.661 20.2138 19.887C19.93 20.0419 19.5408 19.7255 18.7051 18.2791C18.2769 17.5381 17.9536 16.7191 17.9536 16.7191C17.9536 16.7191 17.8913 16.5661 17.7801 16.4842C17.6451 16.385 17.4566 16.3534 17.4566 16.3534L15.4562 16.3666C15.4562 16.3666 15.1559 16.375 15.0457 16.5057C14.9476 16.6221 15.0379 16.8627 15.0379 16.8627C15.0379 16.8627 16.604 20.5327 18.3773 22.3822C20.0032 24.0779 21.8496 23.9665 21.8496 23.9665Z"
          fill="#122659"
        />
        <defs>
          <filter
            id="filter0_d_1_55"
            x="0"
            y="0"
            width="44"
            height="44"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.645556 0 0 0 0 0.658545 0 0 0 0 0.691667 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_55" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_55"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    aria: "We are at Instagram",
    svg: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1_58)">
          <path
            d="M22 32C28.6274 32 34 26.6274 34 20C34 13.3726 28.6274 8 22 8C15.3726 8 10 13.3726 10 20C10 26.6274 15.3726 32 22 32Z"
            fill="white"
          />
        </g>
        <path
          d="M22 14C23.6302 14 23.8336 14.006 24.4732 14.036C25.1122 14.066 25.5472 14.1662 25.93 14.315C26.326 14.4674 26.6596 14.6738 26.9932 15.0068C27.2983 15.3067 27.5344 15.6696 27.685 16.07C27.8332 16.4522 27.934 16.8878 27.964 17.5268C27.9922 18.1664 28 18.3698 28 20C28 21.6302 27.994 21.8336 27.964 22.4732C27.934 23.1122 27.8332 23.5472 27.685 23.93C27.5348 24.3307 27.2987 24.6936 26.9932 24.9932C26.6932 25.2982 26.3304 25.5343 25.93 25.685C25.5478 25.8332 25.1122 25.934 24.4732 25.964C23.8336 25.9922 23.6302 26 22 26C20.3698 26 20.1664 25.994 19.5268 25.964C18.8878 25.934 18.4528 25.8332 18.07 25.685C17.6694 25.5347 17.3065 25.2986 17.0068 24.9932C16.7016 24.6933 16.4656 24.3305 16.315 23.93C16.1662 23.5478 16.066 23.1122 16.036 22.4732C16.0078 21.8336 16 21.6302 16 20C16 18.3698 16.006 18.1664 16.036 17.5268C16.066 16.8872 16.1662 16.4528 16.315 16.07C16.4651 15.6693 16.7013 15.3064 17.0068 15.0068C17.3066 14.7015 17.6695 14.4654 18.07 14.315C18.4528 14.1662 18.8872 14.066 19.5268 14.036C20.1664 14.0078 20.3698 14 22 14ZM22 17C21.2044 17 20.4413 17.3161 19.8787 17.8787C19.3161 18.4413 19 19.2044 19 20C19 20.7956 19.3161 21.5587 19.8787 22.1213C20.4413 22.6839 21.2044 23 22 23C22.7956 23 23.5587 22.6839 24.1213 22.1213C24.6839 21.5587 25 20.7956 25 20C25 19.2044 24.6839 18.4413 24.1213 17.8787C23.5587 17.3161 22.7956 17 22 17ZM25.9 16.85C25.9 16.6511 25.821 16.4603 25.6803 16.3197C25.5397 16.179 25.3489 16.1 25.15 16.1C24.9511 16.1 24.7603 16.179 24.6197 16.3197C24.479 16.4603 24.4 16.6511 24.4 16.85C24.4 17.0489 24.479 17.2397 24.6197 17.3803C24.7603 17.521 24.9511 17.6 25.15 17.6C25.3489 17.6 25.5397 17.521 25.6803 17.3803C25.821 17.2397 25.9 17.0489 25.9 16.85ZM22 18.2C22.4774 18.2 22.9352 18.3896 23.2728 18.7272C23.6104 19.0648 23.8 19.5226 23.8 20C23.8 20.4774 23.6104 20.9352 23.2728 21.2728C22.9352 21.6104 22.4774 21.8 22 21.8C21.5226 21.8 21.0648 21.6104 20.7272 21.2728C20.3896 20.9352 20.2 20.4774 20.2 20C20.2 19.5226 20.3896 19.0648 20.7272 18.7272C21.0648 18.3896 21.5226 18.2 22 18.2Z"
          fill="#122659"
        />
        <defs>
          <filter
            id="filter0_d_1_58"
            x="0"
            y="0"
            width="44"
            height="44"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.645556 0 0 0 0 0.658545 0 0 0 0 0.691667 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_58" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_58"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
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
          <div className={clsx(commomClassNameItem)}>
            <p className={clsx(commomClassNameSub)}>Приходите к нам:</p>
            <p className={clsx(commomClassNameText)}>Санкт-Петербург, ул. Большая Конюшенная, 19</p>
          </div>
          <div className={clsx(commomClassNameItem)}>
            <p className={clsx(commomClassNameSub)}>Режим работы:</p>
            <p className={clsx(commomClassNameText)}>Пн-Сб, с 9-00 до 20-00</p>
          </div>
          <div className={clsx(commomClassNameItem)}>
            <p className={clsx(commomClassNameSub)}>Позвоните нам:</p>
            <p className={clsx(commomClassNameText)}>
              <a
                className="hover:opacity-50 focus:opacity-50 active:opacity-50"
                href="tel:+74959834719"
              >
                + 7 (495) 983-47-19
              </a>
            </p>
          </div>
          <div className={clsx(commomClassNameItem, "md:pt-[25px]")}>
            <p className={clsx(commomClassNameSub)}>Напишите нам:</p>
            <p className={clsx(commomClassNameText)}>
              <a
                className="hover:opacity-50 focus:opacity-50 active:opacity-50"
                href="mailto:info@cleverbaby.ru"
              >
                info@cleverbaby.ru
              </a>
            </p>
          </div>
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
