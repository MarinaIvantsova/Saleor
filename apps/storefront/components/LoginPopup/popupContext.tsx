import React, { createContext, useState, ReactNode } from "react";

export type AUTH_STATES = "login" | "register" | undefined;

export enum AUTH_NAME_STATES {
  Login = "login",
  Register = "register",
}

type PopupContextType = {
  authState: AUTH_STATES;
  setAuthState: (newAuthPageState: AUTH_STATES) => void;
  wasUserIconClicked: boolean;
  toggleIconUser: () => void;
};

const default_value = {
  authState: undefined,
  setAuthState: () => {},
  wasUserIconClicked: false,
  toggleIconUser: () => {},
};

export const PopupContext = createContext<PopupContextType>(default_value);

type PopupProviderProps = {
  children: ReactNode;
};

export const PopupProvider = ({ children }: PopupProviderProps) => {
  const [authState, setAuthState] = useState<AUTH_STATES>(default_value.authState);
  const [wasUserIconClicked, setWasUserIconClicked] = useState<boolean>(
    default_value.wasUserIconClicked
  );

  const toggleIconUser = () => {
    setWasUserIconClicked(!wasUserIconClicked);
  };

  const contextValue: PopupContextType = {
    authState,
    setAuthState,
    wasUserIconClicked,
    toggleIconUser,
  };

  return <PopupContext.Provider value={contextValue}>{children}</PopupContext.Provider>;
};
