import React from "react";

function SliderPagination({
  productsPerPage,
  totalProducts,
  currentPage,
  decrement,
  increment,
  onLoadMore,
  paginate,
}: {
  productsPerPage: number;
  totalProducts: number;
  currentPage: number;
  decrement: () => void;
  increment: () => void;
  onLoadMore: () => void;
  paginate: (pageNumber: number) => void;
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  function getButtons(btnName: string, onClickFunction: () => void) {
    return (
      <li
        className="text-base font-semibold text-white bg-blue-500 py-2 px-4 rounded-lg cursor-pointer transition duration-500 ease-in-out "
        onClick={onClickFunction}
      >
        {btnName}
      </li>
    );
  }

  return (
    <div>
      <ul className="flex justify-center items-center mt-[50px] gap-[20px]">
        {getButtons("Previous", decrement)}
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={
              `text-base font-semibold text-blue-500 bg-white py-2 px-4 rounded-lg cursor-pointer transition duration-500 ease-in-out
              ` + (number === currentPage ? "!text-white bg-blue-500" : "")
            }
          >
            {number}
          </li>
        ))}
        {getButtons("Next", () => {
          increment();
          onLoadMore();
        })}
      </ul>
    </div>
  );
}

export default SliderPagination;
