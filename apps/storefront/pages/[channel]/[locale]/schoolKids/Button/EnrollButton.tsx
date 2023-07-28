import clsx from "clsx";
import React from "react";

function EnrollButton({ marginX }: { marginX?: string }) {
  return (
    <a
      className={clsx(
        `block  pt-[15px] w-[166px] h-[50px] xs:w-[130px] xs:pt-[10px] xs:h-[40px] xs:text-[14px] xs:leading-[20px] bg-[#ffd787]
       font-montserrat no-underline text-center font-medium text-[16px] leading-[22px] rounded-[35px] text-layoutTextColor
       hover:opacity-50 focus:opacity-50 active:opacity-50`,
        marginX
      )}
      href="#"
    >
      Записаться
    </a>
  );
}

export default EnrollButton;
