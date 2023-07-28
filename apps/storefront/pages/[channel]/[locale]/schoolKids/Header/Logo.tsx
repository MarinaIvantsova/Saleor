import React from "react";
import OpenButton from "./HeaderIcons/OpenButton";
import CLoseButton from "./HeaderIcons/CLoseButton";
import clsx from "clsx";
import LogoIcon from "./HeaderIcons/LogoIcon";
type LogoIconCompProps = {
  isNavOpen: boolean;
  setIsNavOpen: (isOpen: boolean) => void;
  toggleBurgerState: () => void;
};

function Logo({ isNavOpen, setIsNavOpen, toggleBurgerState }: LogoIconCompProps) {
  return (
    <div className="2xl:min-w-[145px] 2xl:mr-[55px] md:flex md:mr-auto md:mb-[30px] xs:flex xs:mr-auto xs:mb-[35px]">
      <button
        onClick={toggleBurgerState}
        type="button"
        id="button-open"
        className={clsx(
          "2xl:hidden md:w-[25px] md:h-[10px] xs:w-[25px] xs:h-[10px]",
          isNavOpen ? "md:hidden xs:hidden" : "md:block md:mr-[25px] xs:block xs:mr-[15px]"
        )}
      >
        <span className="visually-hidden">Открыть меню</span>
        <OpenButton />
      </button>
      <button
        onClick={() => setIsNavOpen(false)}
        type="button"
        id="button-close"
        className={clsx(
          "2xl:hidden md:w-[20px] md:h-[20px] xs:w-[15px] xs:h-[15px]",
          isNavOpen ? "md:block md:mr-[30px] xs:block xs:mr-[25px]" : "md:hidden xs:hidden"
        )}
      >
        <span className="visually-hidden">Закрыть меню</span>
        <CLoseButton />
      </button>
      <a
        href="#"
        className="2xl:w-[15px] 2xl:h-[25px] md:w-[130px] md:h-[20px] xs:w-[110px] xs:h-[15px] transition-colors hover:opacity-50 no-underline"
        aria-label="Logo Icon"
      >
        <LogoIcon />
      </a>
    </div>
  );
}

export default Logo;
