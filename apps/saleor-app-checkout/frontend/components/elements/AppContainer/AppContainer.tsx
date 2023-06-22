import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { useStyles } from "./styles";
import RedirectPage from "../../../../../storefront/pages/[channel]/[locale]/products/redirect";

const AppContainer: React.FC<{ children: ReactNode }> = (props) => {
  const classes = useStyles();
  const router = useRouter();

  if (router.pathname === "/checkout-spa") {
    return <div {...props} />;
  }
  if (router.pathname === "/redirect") {
    return <RedirectPage />;
  }

  return <div className={classes.root} {...props} />;
};
export default AppContainer;
