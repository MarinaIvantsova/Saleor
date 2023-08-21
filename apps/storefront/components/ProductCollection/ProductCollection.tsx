import { Text } from "@saleor/ui-kit";
import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";

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

  let [products, setProducts] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);

  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  const decrement = () => {
    if (currentPage !== 1) {
      setCurrentPage((currentPage -= 1));
    }
  };
  const increment = () => {
    if (currentPage !== Math.ceil(products.length / productsPerPage)) {
      setCurrentPage((currentPage += 1));
    }
  };

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

  useEffect(() => {
    if (setCounter) {
      setCounter(data?.products?.totalCount || 0);
    }
  }, [setCounter, data?.products?.totalCount]);

  useEffect(() => {
    let productsFetch = mapEdgesToItems(data?.products);

    setProducts(productsFetch);
  });

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

  return (
    <div>
      <ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        data-testid="productsList"
      >
        {currentPosts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </ul>
      <button
        className="p-3 bg-indigo-600 text-white focus:ring hover:bg-indigo-800 "
        onClick={() => {
          decrement();
        }}
      >
        Preious
      </button>
      <button
        className="p-3 bg-indigo-600 text-white focus:ring hover:bg-indigo-800 "
        onClick={() => {
          onLoadMore();
          increment();
        }}
      >
        Next
      </button>
    </div>
  );
}

export default ProductCollection;
