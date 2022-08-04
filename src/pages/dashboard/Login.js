import React from "react";
import LoginLayout from "../../components/layouts/LoginLayout";
import Logino from "../../components/dashboard/login/Login";

const Login = ({theme, setTheme}) => {
  return (
    <LoginLayout theme={theme} setTheme={setTheme}>
      <Logino />
    </LoginLayout>
  );
};

export default Login;
