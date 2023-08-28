import clsx from "clsx";
import React from "react";

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
  const pageNumbers = [];
  const commonClassName =
    "text-base font-semibold  py-2 px-4 rounded-lg cursor-pointer transition duration-500 ease-in-out";

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  function getButton(btnName: string, onClickFunction: () => void) {
    return (
      <li className={clsx(commonClassName, "text-white bg-blue-500")} onClick={onClickFunction}>
        {btnName}
      </li>
    );
  }

  return (
    <ul className="flex justify-center items-center mt-[50px] gap-[20px]">
      {getButton("Previous", decrement)}
      {pageNumbers.map((number) => (
        <li
          key={number}
          onClick={() => setCurrentPage(number)}
          className={clsx(
            commonClassName,
            "text-blue-500 bg-white",
            number === currentPage && "!text-white bg-blue-500"
          )}
        >
          {number}
        </li>
      ))}
      {getButton("Next", () => {
        increment();
        onLoadMore();
      })}
    </ul>
  );
}

export default SliderPagination;
