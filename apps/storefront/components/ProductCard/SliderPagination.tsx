import clsx from "clsx";
import React, { useEffect, useState } from "react";

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
    onClickFunction: () => void,
    controlButton?: boolean
  ) {
    return (
      <li
        key={btnName}
        className={clsx(
          "text-base font-semibold py-2 px-4 rounded-lg cursor-pointer transition duration-500 ease-in-out",
          btnName === currentPage || controlButton
            ? "!text-white bg-blue-500"
            : "text-blue-500 bg-white"
        )}
        onClick={onClickFunction}
      >
        {btnName}
      </li>
    );
  }

  return (
    <ul className="flex justify-center items-center mt-[50px] gap-[20px]">
      {getButton("Previous", decrement, true)}
      {pageNumbers.map((numberPage) => getButton(numberPage, () => setCurrentPage(numberPage)))}
      {getButton(
        "Next",
        () => {
          increment();
          onLoadMore();
        },
        true
      )}
    </ul>
  );
}

export default SliderPagination;
