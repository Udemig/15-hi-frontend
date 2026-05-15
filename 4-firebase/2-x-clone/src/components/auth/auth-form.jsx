import { useState } from "react";
import AuthToggle from "./auth-toggle";
import EmailInput from "./email-input";
import ForgotPassword from "./forgot-password";
import PasswordInput from "./password-input";
import SubmitButton from "./submit-button";

const AuthForm = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  return (
    <div className="flex flex-col">
      <EmailInput />

      <PasswordInput />

      <ForgotPassword />

      <SubmitButton />

      <AuthToggle />
    </div>
  );
};

export default AuthForm;
