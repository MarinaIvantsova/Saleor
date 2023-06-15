import clsx from "clsx";
import { ReactNode, useContext } from "react";
import { PopupContext } from "../LoginPopup/popupContext";
type PopupProviderProps = {
  children: ReactNode;
};

function ContainerComponent({ children }: PopupProviderProps) {
  const { authState } = useContext(PopupContext);
  console.log(authState);

  return <div className={clsx(authState && "overflow-hidden")}>{children}</div>;
}

export default ContainerComponent;
