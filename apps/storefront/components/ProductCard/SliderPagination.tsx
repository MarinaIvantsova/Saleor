import clsx from "clsx";
import React, { useEffect, useState } from "react";

const commonClassNamePagination =
  "text-base font-semibold  py-2 px-4 rounded-lg cursor-pointer transition duration-500 ease-in-out";
const commonClassNameActive = "!text-white bg-blue-500";
const numberPageColor = "text-blue-500 bg-white";

function SliderPagination({
  productsPerPage,
  totalProducts,
  currentPage,
  decrement,
  increment,
  onLoadMore,
  setCurrentPage,
}: {
  productsPerPage: number;
  totalProducts: number;
  currentPage: number;
  decrement: () => void;
  increment: () => void;
  onLoadMore: () => void;
  setCurrentPage: (pageNumber: number) => void;
}) {
  const [pageNumbers, setPageNumbers] = useState<Array<number>>([]);

  useEffect(() => {
    const newPageNumbers: Array<number> = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      newPageNumbers.push(i);
    }
    setPageNumbers(newPageNumbers);
  }, [totalProducts]);

  function getButton(
    btnName: string | number,
    onClickFunction?: () => void,
    btnColor?: string,
    key?: number
  ) {
    return (
      <li
        key={key}
        className={clsx(
          commonClassNamePagination,
          btnColor,
          btnName === currentPage && commonClassNameActive
        )}
        onClick={onClickFunction}
      >
        {btnName}
      </li>
    );
  }

  return (
    <ul className="flex justify-center items-center mt-[50px] gap-[20px]">
      {getButton("Previous", decrement, commonClassNameActive)}
      {pageNumbers.map((numberPage) =>
        getButton(numberPage, () => setCurrentPage(numberPage), numberPageColor, numberPage)
      )}
      {getButton(
        "Next",
        () => {
          increment();
          onLoadMore();
        },
        commonClassNameActive
      )}
    </ul>
  );
}

export default SliderPagination;
