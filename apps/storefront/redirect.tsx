import { useProductCollectionQuery } from "@/saleor/api";
import Image from "next/image";

const mockVariables = {
  channel: "default-channel",
  filter: { categories: ["Q2F0ZWdvcnk6Nw=="] },
  first: 4,
  locale: "EN_US",
};
// @ts-ignore
function RedirectPage() {
  const { data } = useProductCollectionQuery({
    // @ts-ignore
    variables: mockVariables,
  });
  return (
    <>
      {data?.products?.edges.map((variant) => (
        <h1 className="grow" key={variant.node.id}>
          {variant.node.name}
        </h1>
      ))}

      {data?.products?.edges.map((variant) =>
        // @ts-ignore
        variant.node.media.map((productImage) => (
          <Image
            src={productImage.url}
            width={250}
            height={200}
            key={variant.node.id}
            alt="product image"
          />
        ))
      )}
    </>
  );
}

export default RedirectPage;
