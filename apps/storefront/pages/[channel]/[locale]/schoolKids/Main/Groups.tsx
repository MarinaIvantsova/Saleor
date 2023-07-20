import clsx from "clsx";

const GROUPSITEMS = [
  {
    id: 0,
    subtitle: "Бэбики-1",
    price: "2500",
    grouptextitems: [
      {
        id: 0,
        text: "1 раз в неделю",
      },
      {
        id: 1,
        text: "1,5 часа занятие",
      },
    ],
  },

  {
    id: 1,
    subtitle: "Бэбики-2",
    classNameItem: "!border-cardColorYellow",
    classNameBtnColor: "!bg-cardColorYellow",
    price: "2500",
    grouptextitems: [
      {
        id: 0,
        text: "2 раза в неделю",
      },
      {
        id: 1,
        text: "1,5 часа занятие ",
      },
    ],
  },
  {
    id: 2,
    subtitle: "Бэбики-3",
    classNameItem: "!border-cardColorPink !mr-auto",
    classNameBtnColor: "!bg-cardColorPink",
    price: "4000",
    grouptextitems: [
      {
        id: 0,
        text: "3 раза в неделю",
      },
      {
        id: 1,
        text: "1 час занятие",
      },
    ],
  },
];

const commomClassNameItem = `flex flex-col items-center w-[30%] min-w-[295px] min-h-[320px] 2xl:mr-[40px] mb-[30px] rounded-[12px]
border-[3px] border-solid border-cardColor
md:mr-[30px] md:w-[30%] md:min-w-[205px] md:min-h-[295px]
xs:w-full xs:min-w-[290px] xs:max-w-[330px] xs:min-h-[295px] xs:mx-auto
`;

const commonClassNameBtb =
  "block w-[166px] h-[50px] pt-[15px] xs:w-[150px] xs:pt-[12px] xs:h-[45px] xs:text-[16px] xs:leading-[20px] bg-cardColor font-montserrat no-underline text-center font-medium text-[16px] leading-[22px] rounded-[35px] text-layoutTextColor hover:opacity-50 focus:opacity-50 active:opacity-50";

function Groups() {
  return (
    <section
      className="2xl:bg-groups-bg 2xl:-mt-[5px] 2xl:pb-[70px] 2xl:min-h-[800px] bg-100%
                    md:bg-groups-tablet md:mt-[25px] md:min-h-[615px]
                    xs:bg-bgGroupMobColor xs:mt-[30px] xs:pb-[30px] xs:min-h-[1200px] 
                    "
    >
      <div
        className="relative flex before:absolute flex-wrap justify-between mx-auto 2xl:pt-[170px] 2xl:pl-[3px] 2xl:w-[70%] 2xl:min-w-[975px]
  w-[90%] md:pt-[100px] pl-0 xs:min-w-[290px] xs:pt-[55px] 
  before:bg-star before:top-[15%] before:-left-[5%] 2xl:before:w-[56px] 2xl:before:h-[58px] 2xl:before:bg-[length:56px] 2xl:before:bg-no-repeat
  before:w-[40px] before:h-[40px] before:bg-[length:40px] xs:before:top-0 
  "
      >
        <header className="flex w-full flex-wrap">
          <h2 className="my-0 text-[36px] leading-[50px] font-rubik font-medium text-layoutTextColor xs:text-[22px] xs:leading-[31px] xs:w-full">
            Наши группы
          </h2>
          <p
            className="ml-auto 2xl:mb-0 2xl:mt-[5px] 2xl:w-[35%] font-montserrat text-layoutTextColor 2xl:text-[16px] 2xl:leading-[23px]
      md:mt-[7px] md:w-[40%] md:text-[14px] md:leading-[20px] xs:ml-0 xs:w-[55%] xs:mt-[15px] xs:text-[14px] xs:w-[90%]"
          >
            В&nbsp;группах занимается до&nbsp;5&nbsp;человек.
            <br />
            Все дети в&nbsp;группе примерно одного возраста и&nbsp;уровня знаний.
          </p>
        </header>
        <ul className="flex flex-wrap w-full 2xl:pl-0 2xl:mt-[52px] 2xl:mb-0 md:mt-[45px] xs:mt-[35px] xs:flex-col">
          {GROUPSITEMS.map((item) => {
            return (
              <li key={item.id} className={clsx(commomClassNameItem, item.classNameItem)}>
                <article className="items-center">
                  <h3 className="mt-[40px] mb-[30px] md:mt-[40px] md:mb-[20px] font-montserrat text-layoutTextColor font-medium text-[20px] leading-[28px] ">
                    {item.subtitle}
                  </h3>
                  <ul>
                    {item.grouptextitems.map((item) => {
                      return (
                        <li
                          key={item.id}
                          className="text-[16px] leading-[22px] mb-[8px] font-montserrat text-layoutTextColor"
                        >
                          {item.text}
                        </li>
                      );
                    })}
                  </ul>
                  <p className="mb-[30px] md:mb-[25px] text-layoutTextColor font-montserrat font-medium text-[20px] leading-[28px]">
                    {item.price}&nbsp;₽ <span>в&nbsp;месяц</span>
                  </p>
                  <a className={clsx(commonClassNameBtb, item.classNameBtnColor)} href="#">
                    Записаться
                  </a>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Groups;
