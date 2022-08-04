import React from "react";
import LoginLayout from "../../../components/layouts/LoginLayout";
import Registero from "../../../components/dashboard/register/Step2";

const Register = ({ theme, setTheme }) => {
  return (
    <LoginLayout theme={theme} setTheme={setTheme}>
      <Registero />
    </LoginLayout>
  );
};

export default Register;
