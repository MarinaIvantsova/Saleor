import React, { createContext, useState, ReactNode } from "react";

export type AUTH_STATES = "login" | "register" | undefined;

export enum AUTH_NAME_STATES {
  Login = "login",
  Register = "register",
}

type PopupContextType = {
  authState: AUTH_STATES;
  togglePopup: (param: AUTH_STATES) => void;
  wasUserIconClicked: boolean;
  toggleIconUser: () => void;
};

const default_value = {
  authState: undefined,
  togglePopup: () => {},
  wasUserIconClicked: false,
  toggleIconUser: () => {},
};

export const PopupContext = createContext<PopupContextType>(default_value);

type PopupProviderProps = {
  children: ReactNode;
};

export const PopupProvider = ({ children }: PopupProviderProps) => {
  const [authState, setAuthState] = useState<AUTH_STATES>(undefined);
  const [wasUserIconClicked, setWasUserIconClicked] = useState<boolean>(false);

  const togglePopup = (param: AUTH_STATES) => {
    setAuthState(param);
  };

  const toggleIconUser = () => {
    setWasUserIconClicked(!wasUserIconClicked);
  };

  const contextValue: PopupContextType = {
    authState,
    togglePopup,
    wasUserIconClicked,
    toggleIconUser,
  };

  return <PopupContext.Provider value={contextValue}>{children}</PopupContext.Provider>;
};
