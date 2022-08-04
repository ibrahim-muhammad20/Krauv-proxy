import React, { useEffect } from "react";
import MyAccountLayout from "../../../components/layouts/MyAccountLayout";
import Invoiceo from "../../../components/dashboard/myaccount/invoice/Invoice";
import { setValue } from "../../../redux/features/dashboard/dashboardReducer";
import { useDispatch } from "react-redux";

const Invoice = ({ theme, setTheme }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setValue({ name: "my3", bool: true, main: "my", mbool: true }));
  }, [dispatch]);

  return (
    <MyAccountLayout setTheme={setTheme} theme={theme}>
      <Invoiceo theme={theme} />
    </MyAccountLayout>
  );
};

export default Invoice;
