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
import SliderPagination from "../ProductCard/SliderPagination";

export interface ProductCollectionProps {
  filter?: ProductFilterInput;
  sortBy?: {
    field: ProductOrderField;
    direction?: OrderDirection;
  };
  allowMore?: boolean;
  allowPagination: boolean;
  perPage?: number;
  setCounter?: (value: number) => void;
}

export function ProductCollection({
  filter,
  sortBy,
  setCounter,
  allowMore = true,
  allowPagination = true,
  perPage = 4,
}: ProductCollectionProps) {
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
  const t = useIntl();

  const [products, setProducts] = useState(mapEdgesToItems(data?.products));
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);
  const [dataTotal, setDataTotal] = useState(data?.products?.totalCount);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const decrement = () => {
    if (currentPage !== 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const increment = () => {
    if (dataTotal) {
      if (currentPage < Math.ceil(dataTotal / productsPerPage)) {
        setCurrentPage((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    if (data?.products) {
      setDataTotal(data.products.totalCount);
    }
  }, [data]);

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
  useEffect(() => {
    const productsFetch = mapEdgesToItems(data?.products);
    setProducts(productsFetch);
  }, [data?.products]);

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
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
      {allowMore && (
        <Pagination
          onLoadMore={onLoadMore}
          pageInfo={data?.products?.pageInfo}
          itemsCount={data?.products?.edges.length}
          totalCount={data?.products?.totalCount || undefined}
        />
      )}
      {allowPagination && (
        <SliderPagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          currentPage={currentPage}
          decrement={decrement}
          increment={increment}
          onLoadMore={onLoadMore}
          paginate={paginate}
        />
      )}
    </div>
  );
}

export default ProductCollection;
