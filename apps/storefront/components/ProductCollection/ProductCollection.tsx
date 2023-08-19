import { Text } from "@saleor/ui-kit";
import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import { createPortal } from "react-dom";
import ModalContent from "../ProductCard/ModalContent";

import { mapEdgesToItems } from "@/lib/maps";
import {
  OrderDirection,
  ProductCollectionQueryVariables,
  ProductFilterInput,
  ProductOrderField,
  useProductCollectionQuery,
} from "@/saleor/api";

import { Pagination } from "../Pagination";
import { ProductCard } from "../ProductCard";
import { useRegions } from "../RegionsProvider";
import { Spinner } from "../Spinner";
import { messages } from "../translations";

export interface ProductCollectionProps {
  filter?: ProductFilterInput;
  sortBy?: {
    field: ProductOrderField;
    direction?: OrderDirection;
  };
  allowMore?: boolean;
  perPage?: number;
  setCounter?: (value: number) => void;
}

export function ProductCollection({
  filter,
  sortBy,
  setCounter,
  allowMore = true,
  perPage = 4,
}: ProductCollectionProps) {
  const t = useIntl();
  const { query } = useRegions();

  const variables: ProductCollectionQueryVariables = {
    filter,
    first: perPage,
    ...query,
    ...(sortBy?.field &&
      sortBy?.direction && {
        sortBy: {
          direction: sortBy.direction,
          field: sortBy.field,
        },
      }),
  };

  const { loading, error, data, fetchMore } = useProductCollectionQuery({
    variables,
  });
  let products = mapEdgesToItems(data?.products);

  useEffect(() => {
    if (setCounter) {
      setCounter(data?.products?.totalCount || 0);
    }
  }, [setCounter, data?.products?.totalCount]);

  const onLoadMore = () => {
    return fetchMore({
      variables: {
        after: data?.products?.pageInfo.endCursor,
      },
    });
  };

  if (loading) return <Spinner />;
  if (error) return <p>Error</p>;

  if (products.length === 0) {
    return (
      <Text size="xl" color="secondary" data-testid="noResultsText">
        {t.formatMessage(messages.noProducts)}
      </Text>
    );
  }
  const productsProcessed = products.slice(products.length - 4);
  return (
    <div>
      <ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        data-testid="productsList"
      >
        {productsProcessed.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </ul>
      {/* {allowMore && (
        <Pagination
          onLoadMore={onLoadMore}
          pageInfo={data?.products?.pageInfo}
          itemsCount={data?.products?.edges.length}
          totalCount={data?.products?.totalCount || undefined}
        />
      )} */}
      <button
        className="p-3 bg-indigo-600 text-white focus:ring hover:bg-indigo-800 "
        onClick={() => {
          onLoadMore();
        }}
      >
        Preious
      </button>
      <button
        className="p-3 bg-indigo-600 text-white focus:ring hover:bg-indigo-800 "
        onClick={() => {
          onLoadMore();
          console.log(onLoadMore());
        }}
      >
        Next
      </button>
    </div>
  );
}

export default ProductCollection;
