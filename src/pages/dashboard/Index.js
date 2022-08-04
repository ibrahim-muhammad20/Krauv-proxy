import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Index from "../../components/dashboard/Index";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { setValue } from "../../redux/features/dashboard/dashboardReducer";

const Dashboard = ({ theme, setTheme }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setValue({
        name: "over",
        bool: true,
      })
    );
  }, [dispatch]);

  return (
    <DashboardLayout
      title={"Choose a Product"}
      theme={theme}
      setTheme={setTheme}
    >
      <Index theme={theme} />
    </DashboardLayout>
  );
};

export default Dashboard;
