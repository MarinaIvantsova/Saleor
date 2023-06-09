import { useRegisterMutation } from "@/saleor/api";
import { useForm } from "react-hook-form";
import { useRegions } from "../RegionsProvider";
import { useRouter } from "next/router";
import usePaths from "@/lib/paths";
import { messages } from "@/components/translations";
import { useIntl } from "react-intl";
import { AUTH_NAME_STATES, PopupContext } from "../LoginPopup/popupContext";
import { useContext } from "react";

export interface RegisterFormData {
  email: string;
  password: string;
}
function RegisterPopup() {
  const router = useRouter();
  const paths = usePaths();
  const [register] = useRegisterMutation();
  const { currentChannel } = useRegions();
  const t = useIntl();

  const { setAuthState } = useContext(PopupContext);

  const {
    register: registerForm,
    handleSubmit: handleSubmitForm,
    formState: { errors: errorsForm },
    setError: setErrorForm,
  } = useForm<RegisterFormData>({});

  const handleRegister = handleSubmitForm(async (formData: RegisterFormData) => {
    const { data } = await register({
      variables: {
        input: {
          email: formData.email,
          password: formData.password,
          redirectUrl: `${window.location.origin}/account/confirm`,
          channel: currentChannel.slug,
        },
      },
    });

    if (data?.accountRegister?.errors.length) {
      // Unable to sign in.
      data?.accountRegister?.errors.forEach((e) => {
        if (e.field === "email") {
          setErrorForm("email", { message: e?.message || undefined });
        } else if (e.field === "password") {
          setErrorForm("password", { message: e?.message || undefined });
        } else {
          console.error("Registration error:", e);
        }
      });
      return;
    }

    // User signed in successfully.
    void router.push(paths.$url());
  });

  return (
    <div>
      <form method="post" onSubmit={handleRegister}>
        <div>
          <h1 className="text-2xl font-bold">{t.formatMessage(messages.registerHeader)}</h1>
        </div>

        <div className="my-3">
          <label htmlFor="email" className="block text-md mb-2">
            {t.formatMessage(messages.registerEmailFieldLabel)}
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
          {!!errorsForm.email && (
            <p className="text-sm text-red-500 pt-2">{errorsForm.email?.message}</p>
          )}
        </div>
        <div className="mt-5">
          <label htmlFor="password" className="block text-md mb-2">
            {t.formatMessage(messages.registerPasswordFieldLabel)}
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
          {!!errorsForm.password && (
            <p className="text-sm text-red-500 pt-2">{errorsForm.password?.message}</p>
          )}
        </div>

        <div className="">
          <button
            type="submit"
            className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100"
          >
            {t.formatMessage(messages.registerButton)}
          </button>
        </div>
      </form>
      <p className="mt-8">
        <span onClick={() => setAuthState(AUTH_NAME_STATES.Login)}>
          {t.formatMessage(messages.backToLogin)}
        </span>
      </p>
    </div>
  );
}

export default RegisterPopup;
