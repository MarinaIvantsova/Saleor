import { useRouter } from "next/router";
import React from "react";
import RedirectPage from "../../redirect";

const AppContainer = (
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement>
) => {
  const router = useRouter();

  if (router.pathname === "/checkout-spa") {
    return <div {...props} />;
  }
  if (router.pathname === "/redirect") {
    return <RedirectPage />;
  }
};
export default AppContainer;
