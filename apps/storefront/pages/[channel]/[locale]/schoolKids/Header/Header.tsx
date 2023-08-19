import clsx from "clsx";
import { useState } from "react";
import Mobile from "./Mobile";
import Logo from "./Logo";

const MENUITEMS = [
  { name: "Методика", id: 0 },
  { name: "Преподаватели", id: 1 },
  { name: "Группы", id: 2 },
  { name: "Отзывы", id: 3 },
  { name: "Контакты", id: 4 },
];

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleBurgerState = () => setIsNavOpen((prev) => !prev);

  const renderNav = () => {
    return (
      <ul
        className={clsx(
          "2xl:flex 2xl:gap-5 2xl:min-w-[533px] 2xl:w-[45%] [&>*:last-child]:md:mb-[36px] [&>*:last-child]:xs:mb-[36px]",
          isNavOpen ? "md:flex md:flex-col xs:flex xs:flex-col" : "md:hidden xs:hidden"
        )}
      >
        {MENUITEMS.map((item) => {
          return (
            <li key={item.id} className="font-medium 2xl:font-normal md:mb-[30px] xs:mb-[25px] ">
              <a
                className="hover:opacity-50 transition-colors no-underline text-layoutTextColor 2xl:text-[16px] md:text-[22px]
                 xs:text-[18px]"
                href="#"
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <header className="flex justify-center">
      <div
        className="2xl:flex 2xl:max-w-[100%] 2xl:pt-[40px] md:w-[90%] md:flex md:flex-wrap md:pt-[30px] xs:w-[88%] xs:flex xs:flex-col
           xs:pt-[30px]"
      >
        <Logo
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
          toggleBurgerState={toggleBurgerState}
        />
        <div
          className={clsx(
            "2xl:w-[80%] 2xl:min-w-[970px] 2xl:flex 2xl:mb-[45px] md:flex xs:flex font-montserrat",
            isNavOpen ? "md:w-full md:flex-col xs:flex-col" : "md:flex-row xs:flex-row"
          )}
        >
          {renderNav()}
          <Mobile isNavOpen={isNavOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;
