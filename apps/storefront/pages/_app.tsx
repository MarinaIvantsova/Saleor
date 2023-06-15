import "styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import { NextPage } from "next";
import { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import React, { ReactElement, ReactNode, useContext } from "react";

import { DemoBanner } from "@/components/DemoBanner";
import { RegionsProvider } from "@/components/RegionsProvider";
import { BaseSeo } from "@/components/seo/BaseSeo";
import { API_URI, DEMO_MODE } from "@/lib/const";
import { CheckoutProvider } from "@/lib/providers/CheckoutProvider";
import { useAuthenticatedApolloClient } from "@/lib/auth/useAuthenticatedApolloClient";
import { SaleorAuthProvider, useAuthChange, useSaleorAuthClient } from "@/lib/auth";
import { PopupContext, PopupProvider } from "@/components/LoginPopup/popupContext";
import AuthPagesRouter from "@/components/AuthPagesRouter/AuthPagesRouter";
import ContainerComponent from "@/components/ContainerComponent/ContainerComponent";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  const useSaleorAuthClientProps = useSaleorAuthClient({
    saleorApiUrl: API_URI,
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
  });

  const { saleorAuthClient, setIsAuthenticating } = useSaleorAuthClientProps;
  // const { authState } = useContext(PopupContext);

  const { apolloClient, resetClient } = useAuthenticatedApolloClient(
    saleorAuthClient.fetchWithAuth
  );

  useAuthChange({
    onSignedOut: () => resetClient(),
  });

  return (
    <SaleorAuthProvider {...useSaleorAuthClientProps}>
      <ApolloProvider client={apolloClient}>
        <CheckoutProvider>
          <PopupProvider>
            <RegionsProvider>
              <BaseSeo />
              <NextNProgress color="#5B68E4" options={{ showSpinner: false }} />
              {DEMO_MODE && <DemoBanner />}
              <ContainerComponent>
                {getLayout(<Component {...pageProps} />)}
                {<AuthPagesRouter setIsAuthenticating={setIsAuthenticating} />}
              </ContainerComponent>
            </RegionsProvider>
          </PopupProvider>
        </CheckoutProvider>
      </ApolloProvider>
    </SaleorAuthProvider>
  );
}

export default MyApp;
