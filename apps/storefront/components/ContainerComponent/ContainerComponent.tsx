import clsx from "clsx";
import { ReactNode, useContext } from "react";
import { PopupContext } from "../LoginPopup/popupContext";
type PopupProviderProps = {
  children: ReactNode;
};

function ContainerComponent({ children }: PopupProviderProps) {
  const { authState } = useContext(PopupContext);

  return <div className={clsx(authState && "overflow-hidden h-screen")}>{children}</div>;
}

export default ContainerComponent;
