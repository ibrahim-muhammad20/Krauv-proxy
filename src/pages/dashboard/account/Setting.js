import React, { useEffect } from "react";
import MyAccountLayout from "../../../components/layouts/MyAccountLayout";
import Settingo from "../../../components/dashboard/myaccount/setting/Setting";
import { setValue } from "../../../redux/features/dashboard/dashboardReducer";
import { useDispatch } from "react-redux";

const Setting = ({ theme, setTheme }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setValue({ name: "my4", bool: true, main: "my", mbool: true }));
  }, [dispatch]);

  return (
    <MyAccountLayout setTheme={setTheme} theme={theme}>
      <Settingo theme={theme} />
    </MyAccountLayout>
  );
};

export default Setting;
