import { useState } from "react";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <header className="flex justify-center">
        <div className="2xl:flex 2xl:w-[85.65%] 2xl:min-w-[1170px] 2xl:max-w-[1440px] 2xl:items-center 2xl:pt-[46px] medium:flex medium:flex-wrap medium:py-[30px] medium:w-[88.54%] medium:min-w-[680px]">
          <div className="2xl:mr-[4.87%] medium:flex medium:mr-auto medium:mb-[39px]">
            <button
              onClick={() => setIsNavOpen((prev) => !prev)}
              type="button"
              id="button-open"
              className={`2xl:hidden medium:${
                isNavOpen ? "hidden" : "block medium:h-[18px] medium:mr-[3.6%]"
              }`}
            >
              <span className="visually-hidden">Открыть меню</span>
              <svg
                width="24"
                height="14"
                viewBox="0 0 24 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1H24M0 7H24M0 13H24" stroke="#122659" strokeWidth="2" />
              </svg>
            </button>
            <button
              onClick={() => setIsNavOpen(false)}
              type="button"
              id="button-close"
              className={`2xl:hidden medium:${
                isNavOpen ? "block medium:h-[18px] medium:mr-[3.6%]" : "hidden"
              }`}
            >
              <span className="visually-hidden">Закрыть меню</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L10 10M19 19L10 10M10 10L19 1L1 19" stroke="#122947" strokeWidth="2" />
              </svg>
            </button>
            <a
              href="#"
              className="medium:ml-[25px]   hover:opacity-50 transition-colors no-underline"
              aria-label="Иконка логотипа магазина"
            >
              <svg
                className="w-[132px] h-[21px]"
                viewBox="0 0 132 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.20274 16.8C4.95646 16.8 3.21478 16.2478 1.9777 15.1433C0.756898 14.0389 0.105803 12.4833 0.024416 10.4767C0.00813868 10.0567 0 9.37222 0 8.42333C0 7.45889 0.00813868 6.75889 0.024416 6.32333C0.105803 4.33222 0.765037 2.78444 2.00212 1.68C3.25548 0.56 4.98902 0 7.20274 0C8.65143 0 9.91293 0.241111 10.9872 0.723334C12.0615 1.19 12.8917 1.83556 13.4777 2.66C14.0637 3.46889 14.3729 4.38667 14.4055 5.41333V5.46C14.4055 5.58444 14.3485 5.69333 14.2346 5.78667C14.1369 5.86444 14.023 5.90333 13.8927 5.90333H11.5732C11.3779 5.90333 11.2314 5.86444 11.1337 5.78667C11.0361 5.70889 10.9547 5.56111 10.8896 5.34333C10.6291 4.36333 10.1978 3.67889 9.59552 3.29C8.99326 2.88556 8.18752 2.68333 7.17833 2.68333C4.83438 2.68333 3.61358 3.93556 3.51592 6.44C3.49964 6.86 3.4915 7.50556 3.4915 8.37667C3.4915 9.24778 3.49964 9.90889 3.51592 10.36C3.61358 12.8644 4.83438 14.1167 7.17833 14.1167C8.18752 14.1167 8.99326 13.9144 9.59552 13.51C10.2141 13.1056 10.6454 12.4211 10.8896 11.4567C10.9384 11.2389 11.0117 11.0911 11.1093 11.0133C11.2233 10.9356 11.3779 10.8967 11.5732 10.8967H13.8927C14.0392 10.8967 14.1613 10.9433 14.259 11.0367C14.3729 11.13 14.4218 11.2467 14.4055 11.3867C14.3729 12.4133 14.0637 13.3389 13.4777 14.1633C12.8917 14.9722 12.0615 15.6178 10.9872 16.1C9.91293 16.5667 8.65143 16.8 7.20274 16.8Z"
                  fill="#122659"
                />
                <path
                  d="M17.6185 16.5667C17.4557 16.5667 17.3174 16.5122 17.2034 16.4033C17.0895 16.2944 17.0325 16.1622 17.0325 16.0067V0.56C17.0325 0.388889 17.0895 0.256667 17.2034 0.163334C17.3174 0.0544447 17.4557 0 17.6185 0H19.645C19.8241 0 19.9624 0.0544447 20.0601 0.163334C20.174 0.256667 20.231 0.388889 20.231 0.56V16.0067C20.231 16.1622 20.174 16.2944 20.0601 16.4033C19.9624 16.5122 19.8241 16.5667 19.645 16.5667H17.6185Z"
                  fill="#122659"
                />
                <path
                  d="M28.939 16.8C27.1322 16.8 25.6916 16.3022 24.6173 15.3067C23.5593 14.2956 22.9977 12.88 22.9326 11.06L22.9082 10.4767L22.9326 9.89333C23.014 8.12 23.5837 6.72778 24.6417 5.71667C25.716 4.70556 27.1485 4.2 28.939 4.2C30.8597 4.2 32.3409 4.76 33.3827 5.88C34.4407 7 34.9697 8.49333 34.9697 10.36V10.85C34.9697 11.0056 34.9128 11.1378 34.7988 11.2467C34.6849 11.3556 34.5384 11.41 34.3593 11.41H26.2532V11.5967C26.2858 12.4522 26.5299 13.1756 26.9857 13.7667C27.4577 14.3422 28.1007 14.63 28.9146 14.63C29.8749 14.63 30.6481 14.2722 31.2341 13.5567C31.3806 13.3856 31.4945 13.2767 31.5759 13.23C31.6736 13.1833 31.8119 13.16 31.991 13.16H34.0908C34.2373 13.16 34.3593 13.2067 34.457 13.3C34.5709 13.3778 34.6279 13.4789 34.6279 13.6033C34.6279 13.9767 34.3919 14.42 33.9198 14.9333C33.4641 15.4311 32.8048 15.8667 31.9421 16.24C31.0794 16.6133 30.0784 16.8 28.939 16.8ZM31.6492 9.45V9.38C31.6492 8.46222 31.405 7.72333 30.9167 7.16333C30.4446 6.60333 29.7854 6.32333 28.939 6.32333C28.0925 6.32333 27.4333 6.60333 26.9613 7.16333C26.4892 7.72333 26.2532 8.46222 26.2532 9.38V9.45H31.6492Z"
                  fill="#122659"
                />
                <path
                  d="M41.601 16.5667C41.3568 16.5667 41.1696 16.52 41.0394 16.4267C40.9092 16.3178 40.8034 16.17 40.722 15.9833L36.1562 5.15667L36.1074 4.94667C36.1074 4.80667 36.1562 4.69 36.2539 4.59667C36.3678 4.48778 36.498 4.43333 36.6445 4.43333H38.6222C38.9315 4.43333 39.1431 4.58111 39.257 4.87667L42.5044 13.0667L45.7517 4.87667C45.8006 4.76778 45.8738 4.66667 45.9715 4.57333C46.0854 4.48 46.2238 4.43333 46.3865 4.43333H48.3887C48.5189 4.43333 48.6328 4.48778 48.7305 4.59667C48.8444 4.69 48.9014 4.80667 48.9014 4.94667C48.9014 5.04 48.8933 5.11 48.877 5.15667L44.2868 15.9833C44.2054 16.17 44.0996 16.3178 43.9694 16.4267C43.8391 16.52 43.6519 16.5667 43.4078 16.5667H41.601Z"
                  fill="#122659"
                />
                <path
                  d="M56.1448 16.8C54.338 16.8 52.8974 16.3022 51.8231 15.3067C50.7651 14.2956 50.2035 12.88 50.1384 11.06L50.114 10.4767L50.1384 9.89333C50.2198 8.12 50.7895 6.72778 51.8475 5.71667C52.9219 4.70556 54.3543 4.2 56.1448 4.2C58.0655 4.2 59.5467 4.76 60.5885 5.88C61.6465 7 62.1755 8.49333 62.1755 10.36V10.85C62.1755 11.0056 62.1186 11.1378 62.0046 11.2467C61.8907 11.3556 61.7442 11.41 61.5651 11.41H53.459V11.5967C53.4916 12.4522 53.7357 13.1756 54.1915 13.7667C54.6635 14.3422 55.3065 14.63 56.1204 14.63C57.0807 14.63 57.8539 14.2722 58.4399 13.5567C58.5864 13.3856 58.7003 13.2767 58.7817 13.23C58.8794 13.1833 59.0177 13.16 59.1968 13.16H61.2966C61.4431 13.16 61.5651 13.2067 61.6628 13.3C61.7767 13.3778 61.8337 13.4789 61.8337 13.6033C61.8337 13.9767 61.5977 14.42 61.1257 14.9333C60.6699 15.4311 60.0107 15.8667 59.148 16.24C58.2853 16.6133 57.2842 16.8 56.1448 16.8ZM58.855 9.45V9.38C58.855 8.46222 58.6108 7.72333 58.1225 7.16333C57.6504 6.60333 56.9912 6.32333 56.1448 6.32333C55.2983 6.32333 54.6391 6.60333 54.1671 7.16333C53.695 7.72333 53.459 8.46222 53.459 9.38V9.45H58.855Z"
                  fill="#122659"
                />
                <path
                  d="M65.3533 16.5667C65.1905 16.5667 65.0521 16.5122 64.9382 16.4033C64.8242 16.2944 64.7673 16.1622 64.7673 16.0067V5.01667C64.7673 4.86111 64.8242 4.72889 64.9382 4.62C65.0521 4.49556 65.1905 4.43333 65.3533 4.43333H67.331C67.51 4.43333 67.6565 4.48778 67.7704 4.59667C67.8844 4.70556 67.9414 4.84556 67.9414 5.01667V5.97333C68.332 5.47556 68.8203 5.09444 69.4063 4.83C70.0086 4.56556 70.6922 4.43333 71.4573 4.43333H72.4583C72.6374 4.43333 72.7757 4.48778 72.8734 4.59667C72.9874 4.69 73.0443 4.82222 73.0443 4.99333V6.67333C73.0443 6.82889 72.9874 6.96111 72.8734 7.07C72.7757 7.17889 72.6374 7.23333 72.4583 7.23333H70.5539C69.7888 7.23333 69.1866 7.44333 68.7471 7.86333C68.3076 8.28333 68.0879 8.85889 68.0879 9.59V16.0067C68.0879 16.1622 68.0309 16.2944 67.9169 16.4033C67.803 16.5122 67.6565 16.5667 67.4775 16.5667H65.3533Z"
                  fill="#122659"
                />
                <path
                  d="M75.8276 16.5667C75.6648 16.5667 75.5264 16.5122 75.4125 16.4033C75.2986 16.2944 75.2416 16.1622 75.2416 16.0067V0.816667C75.2416 0.645556 75.2904 0.505556 75.3881 0.396667C75.502 0.287778 75.6485 0.233333 75.8276 0.233333H82.9082C84.8127 0.233333 86.2288 0.637778 87.1566 1.44667C88.1007 2.24 88.5728 3.32889 88.5728 4.71333C88.5728 5.52222 88.3612 6.21444 87.9379 6.79C87.531 7.35 87.0508 7.75444 86.4974 8.00333C87.181 8.29889 87.7507 8.78111 88.2065 9.45C88.6786 10.1189 88.9146 10.8811 88.9146 11.7367C88.9146 13.1833 88.4018 14.35 87.3764 15.2367C86.3672 16.1233 84.9429 16.5667 83.1036 16.5667H75.8276ZM82.4687 6.93C83.3152 6.93 83.9581 6.73556 84.3976 6.34667C84.8371 5.95778 85.0568 5.43667 85.0568 4.78333C85.0568 4.11444 84.8371 3.60111 84.3976 3.24333C83.9581 2.87 83.3152 2.68333 82.4687 2.68333H78.6354V6.93H82.4687ZM82.7129 14.0933C83.5593 14.0933 84.2186 13.8756 84.6906 13.44C85.1626 12.9889 85.3987 12.4211 85.3987 11.7367C85.3987 11.0367 85.1626 10.4689 84.6906 10.0333C84.2186 9.58222 83.5593 9.35667 82.7129 9.35667H78.6354V14.0933H82.7129Z"
                  fill="#122659"
                />
                <path
                  d="M95.3738 16.8C94.5436 16.8 93.7786 16.6444 93.0787 16.3333C92.395 16.0067 91.8497 15.5711 91.4428 15.0267C91.0521 14.4822 90.8568 13.8833 90.8568 13.23C90.8568 12.1722 91.3044 11.3167 92.1997 10.6633C93.0949 10.01 94.3239 9.56667 95.8865 9.33333L99.2315 8.86667V8.37667C99.2315 7.69222 99.0525 7.17889 98.6944 6.83667C98.3363 6.49444 97.7584 6.32333 96.9608 6.32333C96.4237 6.32333 95.9842 6.42444 95.6424 6.62667C95.3168 6.81333 95.0564 7 94.861 7.18667C94.6657 7.38889 94.5355 7.52111 94.4704 7.58333C94.4053 7.77 94.2832 7.86333 94.1041 7.86333H92.2241C92.0776 7.86333 91.9474 7.81667 91.8335 7.72333C91.7358 7.63 91.687 7.50556 91.687 7.35C91.7032 6.96111 91.8986 6.51778 92.2729 6.02C92.6636 5.52222 93.2577 5.09444 94.0553 4.73667C94.8529 4.37889 95.8296 4.2 96.9852 4.2C98.906 4.2 100.306 4.61222 101.185 5.43667C102.064 6.26111 102.503 7.34222 102.503 8.68V16.0067C102.503 16.1622 102.446 16.2944 102.332 16.4033C102.235 16.5122 102.096 16.5667 101.917 16.5667H99.9396C99.7768 16.5667 99.6385 16.5122 99.5245 16.4033C99.4106 16.2944 99.3536 16.1622 99.3536 16.0067V15.0967C98.9955 15.5944 98.4828 16.0067 97.8154 16.3333C97.1643 16.6444 96.3504 16.8 95.3738 16.8ZM96.2039 14.5833C97.0992 14.5833 97.8317 14.3033 98.4014 13.7433C98.9711 13.1833 99.2559 12.3667 99.2559 11.2933V10.8033L96.8143 11.1767C95.8702 11.3167 95.154 11.5422 94.6657 11.8533C94.1937 12.1644 93.9576 12.5456 93.9576 12.9967C93.9576 13.4944 94.1774 13.8833 94.6169 14.1633C95.0564 14.4433 95.5854 14.5833 96.2039 14.5833Z"
                  fill="#122659"
                />
                <path
                  d="M112.667 16.8C110.991 16.8 109.689 16.2478 108.761 15.1433V16.0067C108.761 16.1622 108.704 16.2944 108.59 16.4033C108.492 16.5122 108.354 16.5667 108.175 16.5667H106.246C106.083 16.5667 105.945 16.5122 105.831 16.4033C105.717 16.2944 105.66 16.1622 105.66 16.0067V0.56C105.66 0.388889 105.717 0.256667 105.831 0.163334C105.945 0.0544447 106.083 0 106.246 0H108.321C108.5 0 108.639 0.0544447 108.736 0.163334C108.85 0.256667 108.907 0.388889 108.907 0.56V5.74C109.835 4.71333 111.089 4.2 112.667 4.2C114.311 4.2 115.573 4.71333 116.452 5.74C117.331 6.76667 117.803 8.09667 117.868 9.73C117.884 9.91667 117.892 10.1656 117.892 10.4767C117.892 10.8033 117.884 11.06 117.868 11.2467C117.803 12.9267 117.331 14.2722 116.452 15.2833C115.573 16.2944 114.311 16.8 112.667 16.8ZM111.764 14.3033C113.522 14.3033 114.458 13.2689 114.572 11.2C114.588 11.0444 114.596 10.8111 114.596 10.5C114.596 10.1889 114.588 9.95556 114.572 9.8C114.458 7.73111 113.522 6.69667 111.764 6.69667C110.852 6.69667 110.153 6.97667 109.664 7.53667C109.192 8.08111 108.94 8.74222 108.907 9.52L108.883 10.4067L108.907 11.3167C108.956 12.1567 109.208 12.8644 109.664 13.44C110.12 14.0156 110.82 14.3033 111.764 14.3033Z"
                  fill="#122659"
                />
                <path
                  d="M122.38 21C122.25 21 122.136 20.9533 122.038 20.86C121.941 20.7667 121.892 20.6578 121.892 20.5333C121.892 20.3933 121.924 20.2689 121.989 20.16L123.894 15.8433L119.206 5.27333C119.141 5.13333 119.108 5.02444 119.108 4.94667C119.125 4.80667 119.182 4.69 119.279 4.59667C119.377 4.48778 119.499 4.43333 119.645 4.43333H121.623C121.932 4.43333 122.152 4.58111 122.282 4.87667L125.53 12.5067L128.875 4.87667C129.005 4.58111 129.225 4.43333 129.534 4.43333H131.487C131.617 4.43333 131.731 4.48 131.829 4.57333C131.943 4.66667 132 4.77556 132 4.9C132 5.00889 131.967 5.13333 131.902 5.27333L124.993 20.5567C124.846 20.8522 124.618 21 124.309 21H122.38Z"
                  fill="#122659"
                />
              </svg>
            </a>
          </div>
          <div
            className={`2xl:flex 2xl:w-82.9% 2xl:min-w-[970px] font-montserrat medium:${
              isNavOpen
                ? "flex medium:flex-col medium::w-full medium:min-w-[680px] medium:pl-[1px]"
                : "flex medium:flex-row"
            }`}
          >
            <ul
              className={`2xl:flex 2xl:gap-5 medium:${
                isNavOpen ? "flex medium:flex-col" : "hidden"
              }`}
            >
              <li className="text-[16px] medium:font-medium medium:mb-[30px]">
                <a
                  className="text-layoutText hover:opacity-50 transition-colors no-underline medium:text-[22px]"
                  href="#"
                >
                  Методика
                </a>
              </li>
              <li className="text-[16px] medium:font-medium medium:mb-[30px]">
                <a
                  className="text-layoutText hover:opacity-50 transition-colors no-underline medium:text-[22px]"
                  href="#"
                >
                  Преподаватели
                </a>
              </li>
              <li className="text-[16px] medium:font-medium medium:mb-[30px]">
                <a
                  className="text-layoutText hover:opacity-50 transition-colors no-underline medium:text-[22px]"
                  href="#"
                >
                  Группы
                </a>
              </li>
              <li className="text-[16px] medium:font-medium medium:mb-[30px]">
                <a
                  className="text-layoutText hover:opacity-50 transition-colors no-underline medium:text-[22px]"
                  href="#"
                >
                  Отзывы
                </a>
              </li>
              <li className="text-[16px] medium:font-medium medium:mb-[36px]">
                <a
                  className="text-layoutText hover:opacity-50 transition-colors no-underline medium:text-[22px]"
                  href="#"
                >
                  Контакты
                </a>
              </li>
            </ul>

            <div
              className={`2xl:flex 2xl:min-w-[192px] 2xl:ml-auto 2xl:mr-1 2xl:leading-[25px] medium:${
                isNavOpen ? "ml-0" : ""
              }`}
            >
              <a
                href="tel:+74959834719"
                className="flex items-center text-[18px] text-layoutText font-medium hover:opacity-50 transition-colors no-underline"
              >
                <span className="mr-[5px] w-[15px] h-[15px]" aria-label="Иконка телефона">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.404 9.92279C10.9139 9.43898 10.3021 9.43898 9.8152 9.92279C9.44375 10.2911 9.0723 10.6594 8.7071 11.034C8.60721 11.137 8.52294 11.1588 8.4012 11.0902C8.16085 10.9591 7.9049 10.853 7.67391 10.7094C6.59703 10.032 5.69494 9.16118 4.89587 8.18108C4.49945 7.69414 4.14673 7.17288 3.90014 6.58606C3.8502 6.46745 3.85956 6.38942 3.95632 6.29266C4.32777 5.9337 4.68985 5.56538 5.05506 5.19706C5.56385 4.68516 5.56385 4.08586 5.05194 3.57083C4.76165 3.27743 4.47135 2.99026 4.18106 2.69685C3.88141 2.3972 3.58488 2.09443 3.2821 1.7979C2.79204 1.32033 2.18025 1.32033 1.69331 1.80102C1.31874 2.16934 0.959777 2.54703 0.578966 2.9091C0.226247 3.24309 0.0483275 3.65199 0.0108707 4.12956C-0.048436 4.90677 0.14197 5.64029 0.41041 6.35508C0.959777 7.83461 1.79631 9.1487 2.81077 10.3535C4.18106 11.9829 5.81668 13.272 7.7301 14.2022C8.59161 14.6204 9.48433 14.9419 10.4551 14.995C11.1231 15.0325 11.7036 14.8639 12.1687 14.3426C12.4871 13.9868 12.8461 13.6622 13.1832 13.3219C13.6826 12.8163 13.6857 12.2045 13.1894 11.7051C12.5964 11.1089 12.0002 10.5159 11.404 9.92279Z"
                      fill="#122659"
                    />
                    <path
                      d="M10.8075 7.43508L11.9593 7.23843C11.7783 6.18029 11.2789 5.22203 10.5204 4.46042C9.71817 3.65823 8.70371 3.15257 7.58625 2.9965L7.42394 4.15453C8.28857 4.27626 9.07516 4.66643 9.69632 5.28758C10.2831 5.8744 10.6671 6.61728 10.8075 7.43508Z"
                      fill="#122659"
                    />
                    <path
                      d="M12.609 2.42842C11.2793 1.09872 9.59684 0.259073 7.73961 0L7.57729 1.15802C9.1817 1.38276 10.6363 2.11004 11.785 3.25558C12.8743 4.34493 13.5891 5.72145 13.8482 7.23531L15 7.03866C14.6972 5.28446 13.8701 3.69257 12.609 2.42842Z"
                      fill="#122659"
                    />
                  </svg>
                </span>{" "}
                + 7 (495) 983-47-19
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
