import React from "react";
import LoginLayout from "../../../components/layouts/LoginLayout";
import Registero from "../../../components/dashboard/register/Step3";

const Step3 = ({ theme, setTheme }) => {
  return (
    <LoginLayout theme={theme} setTheme={setTheme}>
      <Registero />
    </LoginLayout>
  );
};

export default Step3;
