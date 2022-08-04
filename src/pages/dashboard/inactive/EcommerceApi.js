import React, { useEffect } from "react";
import InactiveItem from "../../../components/dashboard/inactive/InactiveItem";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import { setValue } from "../../../redux/features/dashboard/dashboardReducer";
import { useDispatch } from "react-redux";

const EcommerceApi = ({ theme, setTheme }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setValue({ name: "in6", bool: true, main: "in", mbool: true  }));
  }, [dispatch]);
  return (
    <DashboardLayout title="Ecommerce API" theme={theme} setTheme={setTheme}>
      <InactiveItem title="Ecommerce API" />
    </DashboardLayout>
  );
};

export default EcommerceApi;
