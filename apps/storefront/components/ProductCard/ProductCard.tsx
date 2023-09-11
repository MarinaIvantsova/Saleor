import { PhotographIcon } from "@heroicons/react/outline";
import Image from "next/legacy/image";
import React, { useState } from "react";

import { translate } from "@/lib/translations";
import { ProductCardFragment } from "@/saleor/api";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";

export interface ProductCardProps {
  product: ProductCardFragment;
}

const getCardSecondaryDescription = (product: ProductCardFragment) => {
  const artistAttribute = product.attributes.find(
    (attribute) => attribute.attribute.slug === "artist"
  );
  const mainValue = artistAttribute?.values[0];
  if (mainValue?.name) {
    return mainValue.name;
  }
  if (product.category) {
    return translate(product.category, "name");
  }
  return "";
};

export function ProductCard({ product }: ProductCardProps) {
  const secondaryDescription = getCardSecondaryDescription(product);
  const thumbnailUrl = product.media?.find((media) => media.type === "IMAGE")?.url;
  const [showModal, setShowModal] = useState(false);

  return (
    <li key={product.id} className="w-full" onClick={() => setShowModal(!showModal)}>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(!showModal)} />,
          // @ts-ignore
          document.getElementById("my-portal")
        )}
      <a href="#">
        <div className="bg-main active:bg-brand w-full aspect-1">
          <div className="bg-white w-full h-full relative object-contain ">
            {thumbnailUrl ? (
              <Image src={thumbnailUrl} width={512} height={512} />
            ) : (
              <div className="grid justify-items-center content-center h-full w-full">
                <PhotographIcon className="h-10 w-10 content-center" />
              </div>
            )}
          </div>
        </div>
        <p
          className="block mt-2 text-md font-extrabold text-main truncate"
          data-testid={`productName${product.name}`}
        >
          {translate(product, "name")}
        </p>
        {secondaryDescription && (
          <p className="block text-md font-normal text-main underline">{secondaryDescription}</p>
        )}
      </a>
      {/* </Link> */}
    </li>
  );
}
