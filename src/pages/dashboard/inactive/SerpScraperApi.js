import React, { useEffect } from "react";
import InactiveItem from "../../../components/dashboard/inactive/InactiveItem";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import { setValue } from "../../../redux/features/dashboard/dashboardReducer";
import { useDispatch } from "react-redux";

const SerpScraperApi = ({ theme, setTheme }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setValue({ name: "in4", bool: true, main: "in", mbool: true  }));
  }, [dispatch]);
  return (
    <DashboardLayout title="SERP Scraper API" theme={theme} setTheme={setTheme}>
      <InactiveItem title="SERP Scraper API" />
    </DashboardLayout>
  );
};

export default SerpScraperApi;
