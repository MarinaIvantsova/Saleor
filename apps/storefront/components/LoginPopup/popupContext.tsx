import React, { createContext, useState, ReactNode } from "react";

export type AUTH_STATES = "login" | "register" | undefined;
export type typeCheckoutFunction = () => void;

export enum AUTH_NAME_STATES {
  Login = "login",
  Register = "register",
}

type PopupContextType = {
  authState: AUTH_STATES;
  togglePopup: (prev: AUTH_STATES) => void;
  checkoutState: typeCheckoutFunction;
  setFuncWithId: (func: typeCheckoutFunction) => void;
  setCheckoutState: (prev: typeCheckoutFunction) => void;
};

const default_value = {
  authState: undefined,
  togglePopup: (prev: AUTH_STATES) => {},
  checkoutState: () => {},
  setFuncWithId: (func: typeCheckoutFunction) => {},
  setCheckoutState: () => {},
};

export const PopupContext = createContext<PopupContextType>(default_value);

type PopupProviderProps = {
  children: ReactNode;
};

export const PopupProvider = ({ children }: PopupProviderProps) => {
  const [authState, setAuthState] = useState<AUTH_STATES>(undefined);
  const [checkoutState, setCheckoutState] = useState<typeCheckoutFunction>(() => {});

  const togglePopup = (prev: AUTH_STATES) => {
    setAuthState(prev);
  };
  const setFuncWithId = (func: typeCheckoutFunction) => {
    setCheckoutState(func);
  };

  const contextValue: PopupContextType = {
    authState,
    togglePopup,
    checkoutState,
    setFuncWithId,
    setCheckoutState,
  };

  return <PopupContext.Provider value={contextValue}>{children}</PopupContext.Provider>;
};
