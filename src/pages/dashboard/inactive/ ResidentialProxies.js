import React, { useEffect } from "react";
import InactiveItem from "../../../components/dashboard/inactive/InactiveItem";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import { setValue } from "../../../redux/features/dashboard/dashboardReducer";
import { useDispatch } from "react-redux";

const ResidentialProxies = ({ theme, setTheme }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setValue({ name: "in1", bool: true, main: "in", mbool: true }));
  }, [dispatch]);

  return (
    <DashboardLayout
      title="Residential Proxies"
      theme={theme}
      setTheme={setTheme}
    >
      <InactiveItem title="Residential Proxies" />
    </DashboardLayout>
  );
};

export default ResidentialProxies;
