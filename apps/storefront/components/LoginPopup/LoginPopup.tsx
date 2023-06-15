import { useIntl } from "react-intl";
import { messages } from "@/components/translations";
import { useForm } from "react-hook-form";
import { DEMO_MODE } from "@/lib/const";
import { useContext } from "react";
import { AUTH_NAME_STATES, PopupContext } from "./popupContext";

export interface LoginFormData {
  email: string;
  password: string;
}

function LoginPopup({ setIsAuthenticating }: { setIsAuthenticating: (param: boolean) => void }) {
  const t = useIntl();

  const defaultValues = DEMO_MODE
    ? {
        email: "admin@example.com",
        password: "admin",
      }
    : {};

  const {
    register: registerForm,
    handleSubmit: handleSubmitForm,
    formState: { errors: errorsForm },
    setError: setErrorForm,
  } = useForm<LoginFormData>({ defaultValues });

  const handleLogin = handleSubmitForm(async (formData: LoginFormData) => {
    togglePopup(undefined);
  });

  const { togglePopup } = useContext(PopupContext);

  return (
    <div>
      <form method="post" onSubmit={handleLogin}>
        <div>
          <span className="text-sm text-gray-900">
            {t.formatMessage(messages.loginWelcomeMessage)}
          </span>
          <h1 className="text-2xl font-bold">{t.formatMessage(messages.loginHeader)}</h1>
        </div>

        <div className="my-3">
          <label htmlFor="email" className="block text-md mb-2">
            {t.formatMessage(messages.loginEmailFieldLabel)}
          </label>
          <input
            className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
            type="email"
            id="email"
            spellCheck={false}
            {...registerForm("email", {
              required: true,
            })}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="password" className="block text-md mb-2">
            {t.formatMessage(messages.loginPasswordFieldLabel)}
          </label>
          <input
            className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
            type="password"
            id="password"
            spellCheck={false}
            {...registerForm("password", {
              required: true,
            })}
          />
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-blue-700 hover:underline cursor-pointer pt-2">
            {t.formatMessage(messages.loginRemindPasswordButtonLabel)}
          </span>
        </div>
        <div className="">
          <button
            onClick={() => setIsAuthenticating(true)}
            type="submit"
            className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100"
          >
            {t.formatMessage(messages.logIn)}
          </button>
          {!!errorsForm.email && (
            <p className="text-sm text-red-500 pt-2">{errorsForm.email?.message}</p>
          )}
        </div>
      </form>
      <p className="mt-8">
        <span onClick={() => togglePopup(AUTH_NAME_STATES.Register)}>
          {t.formatMessage(messages.createAccount)}
        </span>
      </p>
    </div>
  );
}

export default LoginPopup;
