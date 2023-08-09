import clsx from "clsx";
import React from "react";
import MobileIcon from "./HeaderIcons/MobileIcon";

function Mobile({ isNavOpen }: { isNavOpen: boolean }) {
  return (
    <div
      className={clsx(
        "2xl:flex 2xl:ml-auto 2xl:min-w-[190px] 2xl:leading-[25px]",
        isNavOpen ? "md:mb-[45px] xs:mb-[40px]" : "xs:hidden"
      )}
    >
      <a
        href="tel:+74959834719"
        className="hover:opacity-50 transition-colors no-underline flex items-center text-[18px] text-layoutTextColor font-medium "
      >
        <span className="mr-[5px] w-[15px] h-[15px]" aria-label="Mobile Icon">
          <MobileIcon />
        </span>
        + 7 (495) 983-47-19
      </a>
    </div>
  );
}

export default Mobile;
