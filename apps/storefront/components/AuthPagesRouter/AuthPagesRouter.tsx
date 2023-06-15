import { useContext, useEffect } from "react";
import { AUTH_NAME_STATES, PopupContext } from "../LoginPopup/popupContext";
import LoginPopup from "../LoginPopup/LoginPopup";
import RegisterPopup from "../RegisterPopup/RegisterPopup";

function AuthPagesRouter({
  setIsAuthenticating,
}: {
  setIsAuthenticating: (param: boolean) => void;
}) {
  const { authState, togglePopup } = useContext(PopupContext);

  const handleClick = () => {
    togglePopup(undefined);
  };

  const renderAuthPageContent = () => {
    if (authState === AUTH_NAME_STATES.Login) {
      return <LoginPopup setIsAuthenticating={setIsAuthenticating} />;
    } else if (authState === AUTH_NAME_STATES.Register) {
      return <RegisterPopup />;
    }
  };

  if (authState === undefined) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="min-h-screen bg-no-repeat bg-cover bg-center bg-gradient-to-r from-blue-100 to-blue-500">
          <div className="flex justify-end">
            <div className="bg-white min-h-screen w-1/2 flex justify-center items-center">
              {renderAuthPageContent()}
            </div>
          </div>
        </div>
        <button onClick={handleClick} className="close-button">
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default AuthPagesRouter;
