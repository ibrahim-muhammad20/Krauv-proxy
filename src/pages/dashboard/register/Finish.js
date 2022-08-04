import React from "react";
import LoginLayout from "../../../components/layouts/LoginLayout";
import Finish from "../../../components/dashboard/recovery/Check";

const Confirm = ({ theme, setTheme }) => {
  return (
    <LoginLayout theme={theme} setTheme={setTheme}>
      <Finish />
    </LoginLayout>
  );
};

export default Confirm;
