import React, { useEffect } from "react";
import InactiveItem from "../../../components/dashboard/inactive/InactiveItem";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import { setValue } from "../../../redux/features/dashboard/dashboardReducer";
import { useDispatch } from "react-redux";

const DedicatedDatacenterProxies = ({ theme, setTheme }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setValue({ name: "in3", bool: true, main: "in", mbool: true  }));
  }, [dispatch]);
  return (
    <DashboardLayout
      title="Dedicated Datacenter Proxies"
      theme={theme}
      setTheme={setTheme}
    >
      <InactiveItem title="Dedicated Datacenter Proxies" />
    </DashboardLayout>
  );
};

export default DedicatedDatacenterProxies;
