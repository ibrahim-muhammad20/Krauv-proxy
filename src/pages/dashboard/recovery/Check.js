import React from "react";
import LoginLayout from "../../../components/layouts/LoginLayout";
import Checko from "../../../components/dashboard/recovery/Check";

const Check = ({ theme, setTheme }) => {
  return (
    <LoginLayout theme={theme} setTheme={setTheme}>
      <Checko />
    </LoginLayout>
  );
};

export default Check;
